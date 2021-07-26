<template>
  <div>
    <div class="rating-tab" v-if="reviews.length > 0">
      <div class="header-rating">
        <div class="left">
          <svg class="progress-rating" width="132" height="132" viewBox="0 0 120 120">
            <circle class="progress__meter" cx="60" cy="60" r="54" stroke-width="8" />
            <circle class="progress__value" cx="60" cy="60" r="54" stroke-width="9" />
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
          <div class="title">Количество отзывов: {{ reviews.length }}</div>
        </div>

        <div class="items">
          <div
            v-for="(review, index) in currentReviews"
            :key="index"
            class="item"
          >
            <div class="left">
              <div class="avatar">
                <img v-if="review.user.avatar" :src="review.user.avatar" />
              </div>

              <template v-if="review.comments[0]">
                <div class="name">{{ review.comments[0].user.firstName }} {{ review.comments[0].user.lastName }}</div>
                <div class="date">{{ formatDate(review.comments[0].createdAt) }}</div>
                <div class="edv-stars">
                  <i v-for="n in parseInt(review.comments[0].rating || 0)" :key="n"></i>
                  <i v-for="n in (5 - parseInt(review.comments[0].rating || 0))" :key="n" class="star-gray"></i>
                </div>
              </template>
            </div>
            <div class="right">
              <EdvisorContentLimiter
                v-if="review.comments[0] && review.comments[0].text"
                :text="review.comments[0].text"
                class="review-content"
              />

              <EdvisorContentLimiter
                v-if="review.comments[0] && review.comments[0].advantages"
                :text="review.comments[0].advantages"
                class="plus"
              />

              <EdvisorContentLimiter
                v-if="review.comments[0] && review.comments[0].disadvantages"
                :text="review.comments[0].disadvantages"
                class="minus"
              />

              <div class="likes">
                <button class="like">{{ review.likes }}</button>
                <button class="dislike">{{ review.dislikes }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <div class="shows-course">Показано отзывов: {{ currentReviews.length }} из {{ reviews.length }}</div>
        <a
          v-if="currentPage < pagesCount"
          href="#"
          class="btn-outline shows-course-btn"
          @click.prevent="loadMore"
        >
          Показать еще
        </a>
      </div>

      <div class="pagination-showsitem">
        <EdvisorPagination
          :pages-count="pagesCount"
          v-model="currentPage"
          @input="rebuildCurrentReviews"
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
import EdvisorPagination from '@/components/common/EdvisorPagination'
import EdvisorContentLimiter from '@/components/common/EdvisorContentLimiter'
import DateTime from '@/mixins/DateTime'

const initPageLimit = 12

export default {
  name: 'Reviews',
  components: { EdvisorContentLimiter, EdvisorPagination },
  mixins: [DateTime],
  props: {
    school: {
      type: Object,
    },
  },
  data () {
    return {
      pageLimits: [6, 12, 24, 48],
      currentPageLimit: initPageLimit,
      currentPage: 1,
      currentReviewsStart: 0,
      currentReviewsEnd: initPageLimit,
      maxContentLength: 500,
    }
  },
  computed: {
    pagesCount () {
      return Math.ceil(this.reviews.length / this.currentPageLimit)
    },
    averageRating () {
      return (this.reviews.reduce((sum, review) => sum + parseInt(review.comments[0] && review.comments[0].rating || 0), 0) / this.reviews.length).toFixed(1)
    },
    reviews () {
      if (this.school.reviews) {
        return this.school.reviews.data
      }
      return {}
    },
    currentReviews () {
      return this.reviews.slice(this.currentReviewsStart, this.currentReviewsEnd)
    }
  },
  watch: {
    currentPageLimit () {
      this.currentPage = 1
      this.rebuildCurrentReviews()
    },
  },
  methods: {
    rebuildCurrentReviews () {
      this.currentReviewsStart = (this.currentPage - 1) * this.currentPageLimit
      this.currentReviewsEnd = (this.currentPage - 1) * this.currentPageLimit + this.currentPageLimit
    },
    loadMore () {
      this.currentPage++

      const showedReviews = [...this.currentReviews]
      this.rebuildCurrentReviews()
      this.currentReviews = [...showedReviews, ...this.currentReviews]
    },
    calcRatingPercent (ratingValue) {
      const reviewsWithRatingValue = this.reviews.filter(review => parseInt(review.comments[0] && review.comments[0].rating || 0) === ratingValue)

      return Math.floor((reviewsWithRatingValue.length / this.reviews.length) * 100)
    },
  },
}
</script>

<style scoped lang="scss">
.review-content {
  padding-left: 36px;
  background: url('../../../assets/images/comment.svg') left top no-repeat;
  margin-bottom: 16px;
}
</style>
