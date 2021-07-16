<template>
  <div class="container middle-container promotions-page">
    <div class="promotions-page__header">
      <h1 class="promotions-page__title">Акции</h1>

      <p class="promotions-page__description">На этой странице мы предоставляем все текущие промо-акции и скидки
        онлайн-школ! Надеемся, они будут вам полезны!</p>
    </div>

    <div class="edv-shares" v-if="promotions.length > 0">
      <div
        v-for="promotion in promotions"
        :key="promotion.id"
        class="item"
      >
        <div class="img">
          <img v-if="promotion.school.logo" :src="promotion.school.logo" class="img img-fluid">
        </div>
        <div class="reviews">
          <div class="title">{{ promotion.school.title }}</div>
          <div class="edv-rating">
            <div class="star"></div>
            <div class="value">{{ promotion.averageRating }}</div>
          </div>
        </div>

        <div class="date">Срок проведения: c {{ formatDate(promotion.dateStart) }} до
          {{ formatDate(promotion.dateEnd) }}
        </div>
        <div class="title-shares">{{ promotion.title }}</div>
        <div class="text">
          {{ promotion.promo_description }}
        </div>
        <a :href="promotion.saleUrl" target="_blank" class="btn-feo btn-feo-arrow">Акция на сайте школы</a>
      </div>
    </div>

    <div v-else>
      В данный момент нет акций
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  computed: {
    ...mapState('promotions', ['promotions']),
  },
  methods: {
    ...mapActions('promotions', ['getPromotions']),
    formatDate (value) {
      return moment(value).format('DD.MM.YYYY')
    },
  },
  async created () {
    await this.getPromotions()
  },
}
</script>

<style lang="scss">
.promotions-page {
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  max-width: 1440px;

  &__loader {
    text-align: center;
    transform: scale(0.7);
  }

  &__header {
    margin-bottom: 32px;
  }

  &__title {
    font-weight: 800;
    font-size: 40px;
    line-height: 120%;
    margin: 0 0 16px 0;
  }

  &__description {
    font-size: 18px;
    max-width: 856px;
  }

  &__filters {
    margin-bottom: 32px;
  }

  &__promotions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-top: 32px;
  }

  &__content {
    margin-bottom: 32px;
  }

  &__footer {
    text-align: center;
  }

  &__promotions-count-info {
    color: #757575;
    margin-bottom: 20px;
  }

  &__button-show-more {
    background: #FFFFFF;
    border: 1px solid #9B5DE5;
    box-sizing: border-box;
    border-radius: 100px;
    padding: 17px 32px;
    font-weight: 800;
    font-size: 18px;
    line-height: 120%;
    color: #9B5DE5;
    width: 100%;
    cursor: pointer;
    transition: 0.25s ease-in-out;
    outline: none;

    &:hover {
      background-color: #9B5DE5;
      color: #fff;
    }
  }
}

@media (min-width: 768px) {
  .promotions-page {
    &__button-show-more {
      width: auto;
    }
  }
}

@media (min-width: 1440px) {
  .promotions-page {
    &__promotions-list {
      margin-top: 0;
    }
  }
}</style>
