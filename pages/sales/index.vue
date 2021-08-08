<template>
  <div class="container">
    <div class="top_h1_text">
      <h1 class="top-h1">Акции</h1>
      <div class="top-text">
        <p>На этой странице мы предоставляем все текущие промо-акции и скидки онлайн-школ!
          Надеемся, они будут вам полезны!</p>
      </div>
    </div>

    <div class="edv-shares" v-if="sales.length > 0">
      <div
        v-for="sale in sales"
        :key="sale.id"
        class="item"
      >
        <div class="img">
          <img
            v-if="sale.school.logo"
            :src="sale.school.logo"
            class="img img-fluid"
          >
        </div>
        <div class="reviews">
          <div class="title">{{ sale.school.title }}</div>
          <div class="edv-rating">
            <div class="star"></div>
            <div class="value">{{ sale.averageRating }}</div>
          </div>
        </div>

        <div class="date">Срок проведения: c {{ formatDate(sale.dateStart) }} до
          {{ formatDate(sale.dateEnd) }}
        </div>
        <div class="title-shares">{{ sale.title }}</div>
        <div class="text">
          {{ sale.description }}
        </div>
        <a :href="sale.saleUrl" target="_blank" class="btn-feo btn-feo-arrow">Акция на сайте школы</a>
      </div>
    </div>

    <div v-else>
      В данный момент нет акций
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DateTime from '@/mixins/DateTime'

export default {
  mixins: [DateTime],
  computed: {
    ...mapState('sales', ['sales']),
  },
  methods: {
    ...mapActions('sales', ['getSales']),
  },
  async fetch () {
    await this.getSales()
  },
}
</script>

<style lang="scss">

.sales-page {
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  max-width: 1440px;
}

.title-shares {
  margin-bottom: 8px;
  margin-top: 16px;
  font-weight: 800;
  font-size: 16px;
}

.tags {
  display: flex;
  align-items: center;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.container p {
  margin-bottom: 10px;
}

</style>
