<template>
  <div class="container front-page">
    <div>
      <div class="front-header">
        <h1>Мы анализируем весь рынок онлайн-образования, чтобы подсказать самое <span>лучшее</span></h1>
        <h3>Мы собрали все онлайн-курсы по digital и IT профессиям. Читайте отзывы о школах, сравнивайте и
          выбирайте то, что подходит именно вам!</h3>
      </div>
      <div class="front-category">
        <div
          v-for="(category, index) in topCategories"
          :key="category.id"
          :class="`front-category__item front-category__item-color-${index + 1}`"
        >
          <a :href="`/courses/${category.slug}/`">
            <span class="sub-title">Топ 10 курсов</span>
            <span class="title">{{ category.title }}</span>
            <span class="icon">
              <img :src="category.icon" />
            </span>
          </a>
        </div>
      </div>
      <div class="edvlisting">
        <CoursesList path="/" />
      </div>
    </div>
    <!--<SalesList />-->
    <div class="review">
      <div class="container">
        <h2>Новые отзывы о школах</h2>
        <ReviewsList />
      </div>
    </div>
    <div class="block-seo">
      <div class="container">
        <h2>О проекте</h2>
        <p>
          Среди большого выбора программ обучения по digital и IT профессиям от многочисленных онлайн-школ
          стало трудно ориентироваться. Курсы различаются по продолжительности, типу и стоимости оплаты,
          программе курса и качеству материала.
        </p>
        <p>
          Мы создали сайт edvisor.ru для удобного сравнения онлайн-курсов между собой.
          Читайте отзывы о школах от реальных студентов, следите за акциями, сравнивайте и выбирайте
          онлайн-курсы, которые подходят именно вам!
        </p>
        <p>
          Все программы, которые Вы пометите как "Интересные" будут доступны в личном кабинете,
          во вкладке "Избранное". Это позволит Вам следить за появлением скидок на онлайн-курсы
          только по интересующим вас программам обучения.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import { mapActions, mapState } from 'vuex'
import DateTime from '@/mixins/DateTime'
import CoursesList from '@/components/courses/CoursesList'
import SalesList from '@/components/sales/SalesList'
import ReviewsList from '@/components/school-reviews/ReviewsList'
import axios from '~/plugins/axios'

export default Vue.extend({
  head: {
    title: 'Edvisor — Все онлайн курсы по Digital и IT профессиям'
  },
  components: { CoursesList, SalesList, ReviewsList },
  mixins: [DateTime],
  computed: {
    ...mapState('courses-categories', ['topCategories']),
    ...mapState('courses', ['courses', 'coursesCount']),
    ...mapState('school-reviews', ['lastReviews']),
  },
  methods: {
    ...mapActions('courses-categories', ['getTopCategories']),
    ...mapActions('school-reviews', ['getLastReviews']),
  },
  async fetch () {
    await this.getTopCategories(6)
    await this.getLastReviews()
  },
})
</script>

<style lang="scss" scoped>
.courses-page {
  &__content {
    margin-bottom: 32px;
  }

  &__courses-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-top: 32px;
  }

  &__footer {
    text-align: center;
  }

  &__courses-count-info {
    color: #757575;
    margin-bottom: 20px;
  }

  &__button-show-more {
    background: #fff;
    border: 1px solid #9b5de5;
    box-sizing: border-box;
    border-radius: 100px;
    padding: 17px 32px;
    font-weight: 800;
    font-size: 18px;
    line-height: 120%;
    color: #9b5de5;
    width: 100%;
    cursor: pointer;
    transition: .25s ease-in-out;
    outline: none;

    @media (min-width: 768px) {
      width: auto;
    }
  }
}

.front-category__item .icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 120px;
  right: 24px;
}

.review {
  margin-top: 80px;
}

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
    max-width: 1140px;
  }

  @media (min-width: 1200px) {
    max-width: 1270px;
  }
}

h2 {
  margin-bottom: 40px;
  line-height: 120%;
  font-size: 40px;
  font-weight: 800;
}

.rewiew h2 {
  margin-bottom: 25px;
}

.block-seo {
  padding-top: 110px;

  & h2 {
    margin-bottom: 26px;
  }

  & p {
    margin-bottom: 49px;
    font-size: 16px;
    line-height: 150%;
    color: #757575;
    font-weight: 500;
  }
}

svg:not(:root) {
  overflow: hidden;
}

path {
  transition: all 0.4s;
}
</style>
