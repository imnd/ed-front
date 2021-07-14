<template>
  <div class="edvlisting-item">
    <div class="logo-item" v-if="school.logo">
      <a :href="`/schools/${school.title}/`"><img :src="school.logo"/></a>
    </div>
    <div class="reviews">
      <div class="title">
        <a :href="`/schools/${school.title}/`">{{ school.post_title }}</a>
      </div>
      <div class="edv-rating">
        <div class="star"></div>
        <div class="value">{{ school.averageRating }}</div>
        <a :href="`/schools/${school.title}/`">{{ school.reviewsCount }} отзыва о школе</a>
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
        {{ school.short_description }}
      </div>

      <div class="buttons">
        <a :href="`http://edvisor/goto?sg=3&obj=${school.id}`" class="btn-feo btn-feo-arrow" target="_blank">На сайт
          школы</a>
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
  }
};
</script>
