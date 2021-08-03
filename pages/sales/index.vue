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

.edv-shares {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;

  & .item {
    background: #fff;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  & .img, .title-shares {
    margin-bottom: 8px;
  }

  & .reviews {
    display: flex;
    align-items: center;

    & .title {
      margin-bottom: 0;
    }
  }

  & .date {
    color: #b8b8b8;
    font-size: 14px;
    font-weight: 500;
  }

  & .text {
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    flex-grow: 1;
    margin-bottom: 16px;
  }

  & .btn-feo {
    width: 100%;
  }

  & .img {
    margin-bottom: 8px;
  }
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
