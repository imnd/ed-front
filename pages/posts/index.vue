<template>
  <div class="container posts-page">
    <div class="top_h1_text">
      <h1 class="top-h1">Блог</h1>
    </div>

    <div class="posts-page__loader" v-if="isLoading">
      <EdvisorLoader />
    </div>

    <template v-else>
      <ul class="row posts-page__posts-list" v-if="posts.length > 0">
        <li
          class="col-12 col-md-6 col-xl-4"
          v-for="post in posts"
          :key="post.id"
        >
          <a
            class="posts-page__list-item-wrapper-link"
            :href="`/posts/${post.slug}/`"
          >
            <div class="posts-page__list-item">
              <div
                class="posts-page__list-item-cover"
                :style="{ backgroundImage: 'url(' + post.cover + ')' }"
              ></div>

              <div class="posts-page__list-item-date-views-block">
                <div class="posts-page__list-item-date">{{ formatDate(post.createdAt) }}</div>
                <div class="posts-page__list-item-views">{{ post.viewsCount }}</div>
              </div>

              <div class="posts-page__list-item-title">{{ post.title }}</div>

              <div class="posts-page__list-item-text">{{ post.shortText }}</div>
            </div>
          </a>
        </li>
      </ul>

      <div v-else>
        <p></p>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import EdvisorLoader from '@/components/common/EdvisorLoader'
import DateTime from '@/mixins/DateTime'

export default {
  name: 'PostsPage',
  components: { EdvisorLoader },
  mixins: [DateTime],
  data () {
    return {
      isLoading: true,
    }
  },
  computed: {
    ...mapState('posts', ['posts']),
  },
  methods: {
    ...mapActions('posts', ['getPosts']),
  },
  async created () {
    await this.getPosts()

    this.isLoading = false
  },
}
</script>

<style scoped lang="scss">

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }


  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1270px;
  }
}


.posts-page {
  font-family: Raleway, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  min-height: calc(100vh - 106px - 60px - 70px - 106px);

  &__list-item {
    margin-bottom: 40px;
  }

  &__list-item-cover {
    border-radius: 8px;
    margin-bottom: 16px;
    height: 220px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  &__list-item-date-views-block {
    color: #757575;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  &__list-item-views {
    background: url("~/assets/images/eye.svg") no-repeat left center;
    padding-left: 27px;
  }

  &__list-item-title {
    font-weight: 800;
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 12px;
  }
}
</style>
