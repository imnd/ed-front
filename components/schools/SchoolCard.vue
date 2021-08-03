<template>
  <div class="edvlisting-item">
    <div class="logo-item" v-if="school.logo">
      <a :href="`/schools/${school.slug}/`"><img :src="school.logo" /></a>
    </div>
    <div class="reviews">
      <div class="title">
        <a :href="`/schools/${school.slug}/`">{{ school.title }}</a>
      </div>
      <div class="edv-rating">
        <div class="star"></div>
        <div class="value">{{ school.averageRating }}</div>
        <a :href="`/schools/${school.slug}/`">{{ school.reviewsCount }} отзыва о школе</a>
      </div>
    </div>

    <ul class="tags" v-if="school.categories && school.categories.length > 0">
      <li
        v-for="schoolCategory in school.categories"
        :key="schoolCategory.id"
      >
        {{ schoolCategory.title }}
      </li>
    </ul>

    <div class="flex-description">
      <div class="text-desc">
        {{ school.shortDescription }}
      </div>

      <div class="buttons">
        <a :href="`${school.link}`" class="btn-feo btn-feo-arrow" target="_blank">На сайт школы</a>
        <!--<a :href="`${redirectUrl}${school.id}`" target="_blank" class="btn-feo-arrow btn-feo">На сайт школы</a>-->
        <!--<a :href="`http://edvisor/goto?sg=3&obj=${school.id}`" class="btn-feo btn-feo-arrow" target="_blank">
          На сайт школы
        </a>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SchoolCard',
  props: {
    school: {
      type: Object,
    }
  },
  computed: {
    redirectUrl () {
      return process.env.redirectUrl
    },
  },
}
</script>

<style scoped lang="scss">
.edvlisting-item {
  box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
  border-radius: 5px;
  background: #fff;
  padding: 28px 32px;
  margin-bottom: 32px;
  position: relative;
}

.edvlisting-item .logo-item {
  max-width: 221px;
  width: 100%;
  padding-right: 20px;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 800;
}
</style>
