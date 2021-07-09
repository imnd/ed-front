<template>
  <div>
    <div class="rating-tab" v-if="school.reviews.length > 0">
      <div class="header-rating">
        <div class="left">
          <svg class="progress-rating" width="132" height="132" viewBox="0 0 120 120">
            <circle class="progress__meter" cx="60" cy="60" r="54" stroke-width="8"/>
            <circle class="progress__value" cx="60" cy="60" r="54" stroke-width="9"/>
          </svg>

          <span>{{ averageRating }}</span>
        </div>
        <div class="right">
          <div class="item">
            <div class="stars-feo">
              <i class="active"></i>
              <i class="active"></i>
              <i class="active"></i>
              <i class="active"></i>
              <i class="active"></i>
              <span>{{ calcRatingPercent(5) }}%</span>
            </div>
          </div>
          <div class="item">
            <div class="stars-feo">
              <i class="active"></i>
              <i class="active"></i>
              <i class="active"></i>
              <i class="active"></i>
              <i></i>
              <span>{{ calcRatingPercent(4) }}%</span>
            </div>
          </div>
          <div class="item">
            <div class="stars-feo">
              <i class="active"></i>
              <i class="active"></i>
              <i class="active"></i>
              <i></i>
              <i></i>
              <span>{{ calcRatingPercent(3) }}%</span>
            </div>
          </div>
          <div class="item">
            <div class="stars-feo">
              <i class="active"></i>
              <i class="active"></i>
              <i></i>
              <i></i>
              <i></i>
              <span>{{ calcRatingPercent(2) }}%</span>
            </div>
          </div>
          <div class="item">
            <div class="stars-feo">
              <i class="active"></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <span>{{ calcRatingPercent(1) }}%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="body-rating">
        <div class="title-sorting">
          <div class="title">Количество отзывов: {{ school.reviews.length }}</div>
        </div>

        <div class="items">
          <div
            v-for="(review, index) in currentReviews"
            :key="index"
            class="item"
          >
            <div class="left">
              <div class="avatar">
                <img v-if="review.user_avatar" :src="review.user_avatar">
              </div>
              <div class="name">{{ review.comment_author }}</div>
              <div class="date">{{ formatDate(review.comment_date) }}</div>
              <div class="edv-stars">
                <i v-for="n in parseInt(review.comment_rating || 0)" :key="n"></i>
                <i v-for="n in (5 - parseInt(review.comment_rating || 0))" :key="n" class="star-gray"></i>
              </div>
            </div>
            <div class="right">
              <edvisor-content-limiter
                v-if="review.comment_content"
                :text="review.comment_content"
                class="review-content"
              />

              <edvisor-content-limiter
                v-if="review.comment_advantages"
                :text="review.comment_advantages"
                class="plus"
              />

              <edvisor-content-limiter
                v-if="review.comment_disadvantages"
                :text="review.comment_disadvantages"
                class="minus"
              />

              <div class="likes">
                <button class="like">{{ review.likes_count }}</button>
                <button class="dislike">{{ review.dislikes_count }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <div class="shows-cource">Показано отзывов: {{ currentReviews.length }} из {{ school.reviews.length }}</div>
        <a
          v-if="currentPage < pagesCount"
          href="#"
          class="btn-outline shows-cource-btn"
          @click.prevent="loadMore"
        >
          Показать еще
        </a>
      </div>

      <div class="pagination-showsitem">
        <edvisor-pagination
          :pages-count="pagesCount"
          v-model="currentPage"
          @update:modelValue="rebuildCurrentReviews"
        />

        <div class="showsitem">
          <select
            class="showsitem_select"
            v-model="currentPageLimit"
          >
            <option
              v-for="(pageLimit, index) in pageLimits"
              :key="index"
              :value="pageLimit"
            >
              Показывать по {{ pageLimit }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div v-else>У школы нет отзывов</div>
  </div>
</template>

<script>
import moment from 'moment';
import EdvisorPagination from '@/components/common/EdvisorPagination';
import EdvisorContentLimiter from '@/components/common/EdvisorContentLimiter';

export default {
  name: 'Reviews',
  components: {EdvisorContentLimiter, EdvisorPagination},
  props: {
    school: {
      type: Object,
    },
  },
  data() {
    return {
      pageLimits: [6, 12, 24, 48],
      currentPageLimit: 12,
      currentPage: 1,
      currentReviews: [],
      maxContentLength: 500,
    };
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.school.reviews.length / this.currentPageLimit);
    },
    averageRating() {
      return (this.school.reviews.reduce((sum, review) => sum + parseInt(review.comment_rating || 0), 0) / this.school.reviews.length).toFixed(1);
    },
  },
  watch: {
    currentPageLimit() {
      this.currentPage = 1;
      this.rebuildCurrentReviews();
    },
  },
  methods: {
    formatDate(date) {
      return moment(date).format('DD.MM.YYYY');
    },
    rebuildCurrentReviews() {
      this.currentReviews = this.school.reviews.slice(
        (this.currentPage - 1) * this.currentPageLimit,
        (this.currentPage - 1) * this.currentPageLimit + this.currentPageLimit,
      );
    },
    loadMore() {
      this.currentPage++;

      const showedReviews = [...this.currentReviews];
      this.rebuildCurrentReviews();
      this.currentReviews = [...showedReviews, ...this.currentReviews];
    },
    calcRatingPercent(ratingValue) {
      const reviewsWithRatingValue = this.school.reviews.filter(review => parseInt(review.comment_rating) === ratingValue);

      return Math.floor((reviewsWithRatingValue.length / this.school.reviews.length) * 100);
    },
  },
  created() {
    if (this.school.reviews.length > 0) {
      this.currentReviews = this.school.reviews.slice(0, this.currentPageLimit);
    }
  },
};
</script>

<style scoped lang="scss">
.review-content {
  padding-left: 36px;
  background: url('../../assets/images/comment.svg') left top no-repeat;
  margin-bottom: 16px;
}
</style>
