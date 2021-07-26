<template>
  <div class="container">
    <div class="posts-page__loader" v-if="isLoading">
      <EdvisorLoader />
    </div>
    <div v-else class="edvisor-blog-post">
      <div class="row">
        <div class="col-12">
          <div
            class="edvisor-blog-post__cover"
            :style="{ backgroundImage: 'url(' + post.cover + ')' }">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="edvisor-blog-post__date-views-block">
            <div class="edvisor-blog-post__date-views-block-date">{{ formatDate(post.createdAt) }}</div>
            <div class="edvisor-blog-post__date-views-block-views">{{ post.viewsCount }}</div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-8">
          <h1 class="edvisor-blog-post__title">{{ post.title }}</h1>

          <p class="edvisor-blog-post__lead-paragraph">{{ post.shortText }}</p>

          <div class="edvisor-blog-post__content">{{ post.text }}</div>

          <div class="edvisor-blog-post__banner">
            <div class="edvisor-blog-post__banner-title">И что с этим делать?</div>

            <div class="edvisor-blog-post__banner-text">
              Мы знаем, как сложно определиться с обучением и найти свой путь.
              Поэтому создали Edvisor — агрегатор онлайн-образования с удобным фильтром,
              отзывами выпускников и механизмами сравнения.
              Мы поможем вам выбрать курс, один и самый подходящий.
            </div>

            <a
              :href="`/posts/${post.slug}/`"
              target="_blank"
              class="edvisor-blog-post__banner-button"
            >Да, помогите мне</a>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="edvisor-blog-post__share-block">
            <div class="edvisor-blog-post__share-block-title">Поделиться статьей:</div>
            <ul class="edvisor-blog-post__share-block-list">
              <li>
                <a
                  :href="`https://vk.com/share.php?url=${link}`"
                  target="_blank">
                  <img src="~/assets/images/vk.svg">
                </a>
              </li>
              <li>
                <a
                  :href="`https://www.facebook.com/sharer/sharer.php?u=${link}`"
                  target="_blank">
                  <img src="~/assets/images/fb.svg">
                </a>
              </li>
              <li>
                <a
                  :href="`http://twitter.com/share?text=Чем отличается реклама от маркетинга?&amp;url=${link}`"
                  target="_blank">
                  <img src="~/assets/images/twitter.svg">
                </a>
              </li>

              <!--li v-for="socNet in socNets">
                <a
                  :href="`${socNet.url}`"
                  target="_blank">
                  <img :src="`~/assets/images/${socNet.logo}`"/>
                </a>
              </li>-->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import EdvisorLoader from '@/components/common/EdvisorLoader'
import DateTime from '@/mixins/DateTime'

export default {
  components: { EdvisorLoader },
  mixins: [DateTime],
  data () {
    return {
      /*socNets: {
        'vk': {
          'url': 'https://vk.com/share.php?url=',
          'logo': 'vk.svg',
        },
        'facebook': {
          'url': 'https://www.facebook.com/sharer/sharer.php?u=',
          'logo': 'fb.svg',
        },
        'twitter': {
          'url': 'http://twitter.com/share?url=',
          'logo': 'twitter.svg',
        },
      },*/
      isLoading: true,
    }
  },
  computed: {
    ...mapState('posts', ['post']),
    link () {
      return `${process.env.baseAppUrl}posts/${this.post.slug}/`
    }
  },
  methods: {
    ...mapActions('posts', ['getPost']),
  },
  async created () {
    await this.getPost(this.$route.params.slug)

    /*for (const sn in this.socNets) {
      this.socNets[sn].url += `https://edvisor.ru/posts/${this.post.slug}/`
      if (sn === 'twitter') {
        this.socNets[sn].url += `&amp;text=${this.post.title}`
      }
    }*/
    this.isLoading = false
  },
}
</script>

<style scoped lang="scss">
.edvisor-blog-post {
  font-family: Raleway, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #000;
}

@media (min-width: 1200px) {
  .edvisor-blog-post {
    margin-top: 40px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1270px;
  }
}

.edvisor-blog-post__cover {
  min-height: 240px;
  overflow: hidden;
  background-size: cover;
  margin: 0 -15px;
}

@media (min-width: 768px) {
  .edvisor-blog-post__cover {
    min-height: 400px;
    margin: 0;
  }
}

.edvisor-blog-post__date-views-block {
  margin-top: 20px;
  color: #757575;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.edvisor-blog-post__date-views-block-date {
  margin-right: 20px;
}

.edvisor-blog-post__date-views-block-views {
  background: url("~/assets/images/eye.svg") no-repeat left center;
  padding-left: 27px;
}

.edvisor-blog-post__title {
  font-weight: 800;
  font-size: 32px;
  line-height: 120%;
  margin-bottom: 16px;
}

.edvisor-blog-post p {
  margin-bottom: 16px;
}

.edvisor-blog-post__lead-paragraph {
  font-size: 24px;
  margin-bottom: 16px;
  line-height: 150%;
}

.edvisor-blog-post__content {
  margin-bottom: 32px;
}

h2 {
  margin-bottom: 40px;
  line-height: 120%;
  font-size: 40px;
  font-weight: 800;
}

.edvisor-blog-post__selected-text-in-the-end {
  margin-bottom: 32px;
  font-size: 18px;
  background-color: #F2F2F2;
  border-left: 4px solid #9B5DE5;
  padding: 20px;
}

.edvisor-blog-post__quote-in-the-end {
  padding-left: 48px;
  background: url(~/assets/images/quote.svg) no-repeat left top;
  background-size: 24px 18px;
  margin-bottom: 32px;
}

@media (min-width: 768px) {
  .edvisor-blog-post__banner {
    margin: 0 0 32px 0;
    border-radius: 16px;
  }
}

.edvisor-blog-post__banner {
  padding: 32px;
  background-color: #9B5DE5;
  color: #fff;
  margin: 0 -15px 32px -15px;
}

.edvisor-blog-post__banner-title {
  font-weight: 800;
  font-size: 28px;
  line-height: 120%;
  margin-bottom: 20px;
}

.edvisor-blog-post__banner-text {
  margin-bottom: 24px;
}

.edvisor-blog-post a {
  text-decoration: underline;
  color: #9B5DE5;
}

.edvisor-blog-post__banner-button {
  display: inline-block;
  padding: 15px 32px;
  background-color: #fff;
  color: #9B5DE5;
  font-weight: 800;
  font-size: 16px;
  line-height: 120%;
  text-decoration: none !important;
  border-radius: 100px;
}

button, a, input[type="submit"] {
  cursor: pointer;
}

.edvisor-blog-post__share-block {
  margin-bottom: 40px;
}

.edvisor-blog-post__share-block-title {
  font-weight: 800;
  margin-bottom: 13px;
}

.edvisor-blog-post .edvisor-blog-post__share-block-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.edvisor-blog-post .edvisor-blog-post__share-block-list li {
  padding-left: 0;
  margin-right: 16px;
}

.edvisor-blog-post a {
  text-decoration: underline;
  color: #9B5DE5;
}
</style>
