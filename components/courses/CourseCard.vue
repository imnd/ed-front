<template>
  <div class="course-card">
    <!--  Название, рейтинг, отзывы  -->
    <div class="course-card__title-rating-reviews-block">
      <div class="course-card__title">{{ course.post_title }}</div>
    </div>

    <div class="course-card__school-block">
      <img
        v-if="courseSchool"
        :src="courseSchool.logo"
        class="course-card__school-logo"
      />

      <div class="course-card__school-rating">
        <svg width="16" height="16" viewBox="0 0 16 16" class="course-card__rating-icon">
          <path
            d="M8.0002 12.6666L3.10186 15.6583L4.43353 10.0749L0.0751953 6.34159L5.79603 5.88325L8.0002 0.583252L10.2044 5.88325L15.926 6.34159L11.5669 10.0749L12.8985 15.6583L8.0002 12.6666Z"
            fill="#FEE440"/>
        </svg>
        <span class="course-card__school-rating-value">{{
            courseSchool ? courseSchool.reviews_average_rating : null
          }}</span>
        <span class="course-card__school-rating-reviews-count">{{
            courseSchool ? `(${courseSchool.reviews_count})` : null
          }}</span>
      </div>

      <div class="course-card__reviews">
        <a :href="courseSchool ? `/schools/${courseSchool.title}/` : '#'">Отзывы о школе
          {{ courseSchool ? `(${courseSchool.reviews_count})` : null }}</a>
      </div>
    </div>

    <div class="course-card__prices-block">
      <div
        v-if="priceWithoutDiscount()"
        class="course-card__price-without-discount"
        :class="{ 'course-card__price-without-discount_crossed-out' : course.priceWithDiscount !== null }"
      >
        {{ priceWithoutDiscount() }} ₽
      </div>

      <div
        v-if="course.priceWithDiscount"
        class="course-card__price-with-discount"
      >
        {{ course.priceWithDiscount }} ₽
      </div>

      <div
        v-if="creditPriceWithoutDiscount()"
        class="course-card__price-credit"
      >
        {{ creditPriceWithoutDiscount() }} ₽/месяц
      </div>
    </div>

    <div class="course-card__buttons-block">
      <a :href="`/goto?sg=2&obj=${course.id}`" target="_blank">
        <button class="course-card__button-course-site">
          На сайт курса

          <svg width="7" height="10" viewBox="0 0 7 10" class="course-card__button-course-site-icon">
            <path
              d="M4.28145 4.99999L0.981445 1.69999L1.92411 0.757324L6.16678 4.99999L1.92411 9.24266L0.981445 8.29999L4.28145 4.99999Z"
              fill="white"/>
          </svg>
        </button>
      </a>
    </div>

    <div v-if="isDetailsShowed" class="course-card__duration">
      <ul class="course-card__duration-list">
        <li
          v-for="(courseDuration, index) in (course.duration || [])"
          :key="index"
        >
          {{ courseDuration.name }}
        </li>
      </ul>
    </div>

    <ul v-if="isDetailsShowed" class="course-card__format-list">
      <li
        v-for="(courseEducationFormat, index) in (course.education_formats || [])"
        :key="index"
        class="course-card__format-list-item"
      >
        {{ courseEducationFormat.name }}
      </li>
    </ul>

    <div class="course-card__button-details-block">
      <button
        class="course-card__button-show-details"
        @click="isDetailsShowed = !isDetailsShowed"
      >
        {{ isDetailsShowed ? 'Скрыть подробности' : 'Подробнее' }}
        <svg width="12" height="8" viewBox="0 0 12 8" class="course-card__button-show-details-icon"
             :class="{ 'course-card__button-show-details-icon_showed': isDetailsShowed }">
          <path
            d="M5.99962 4.97656L10.1246 0.851562L11.303 2.0299L5.99962 7.33323L0.696289 2.0299L1.87462 0.851562L5.99962 4.97656Z"
            fill="#00BBF9"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: true,
    },
    courseSchool: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDetailsShowed: false,
    };
  },
  methods: {
    priceWithoutDiscount() {
      const price = this.course.price;

      return price ? this.formatPrice(price) : null;
    },
    creditPriceWithoutDiscount() {
      const value = this.course.price_month;

      return value ? this.formatPrice(value) : null;
    },
    formatPrice(price) {
      const intPrice = parseInt(price);
      if (!intPrice) {
        return;
      }

      return intPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
  },
  created() {
    this.isDetailsShowed = window.innerWidth > 1440;
  },
};
</script>

<style scoped lang="scss">
.course-card {
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  padding: 32px 16px 0 16px;
  box-sizing: border-box;
  line-height: 150%;
  background-color: #FFFFFF;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 16px;

  &__school-logo {
    max-height: 40px;
    width: auto;
    max-width: 100px;
  }

  &__title-rating-reviews-block {
    margin-bottom: 16px;
  }

  &__title {
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 8px;
  }

  &__school-rating {
    margin-bottom: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &-icon {
      margin-right: 6px;
    }

    &-value {
      margin-right: 4px;
      font-weight: 800;
      font-size: 18px;
    }

    &-reviews-count {
      color: #B8B8B8;
    }
  }

  &__reviews {
    font-size: 14px;
    line-height: 140%;

    a {
      color: #00BBF9;
      text-decoration: none;
    }
  }

  &__school-block {
    margin-bottom: 16px;
  }

  &__prices-block {
    margin-bottom: 24px;
  }

  &__price-without-discount {
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;

    &_crossed-out {
      font-size: 16px;
      line-height: 140%;
      color: #B8B8B8;
      text-decoration: line-through;
      font-weight: 500;
    }
  }

  &__price-with-discount {
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 8px;
  }

  &__price-credit {
    font-size: 14px;
    line-height: 140%;
  }

  &__buttons-block {
    margin-bottom: 24px;
  }

  &__button-course-site {
    background-color: #9B5DE5;
    border-radius: 100px;
    outline: none;
    border: none;
    color: #fff;
    padding: 11.5px 42.5px;
    font-weight: 800;
    font-size: 14px;
    line-height: 120%;
    cursor: pointer;

    &-icon {
      margin-left: 13.5px;
    }
  }

  &__duration {
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &-icon {
      margin-right: 9.6px;
    }
  }

  &__duration-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      background: url('../../assets/images/duration.svg') no-repeat left center;
      padding-left: 26px;
    }
  }

  &__promocode {
    margin-bottom: 16px;
    transition: 0.3s ease-in-out;

    &-title {
      font-size: 14px;
      line-height: 140%;
      color: #B8B8B8;
    }

    &-value {
      color: #9B5DE5;
      font-weight: 800;
    }
  }

  &__format-list {
    list-style-type: none;
    margin: 0 0 24px 0;
    padding: 0;

    &-item {
      background: url('../../assets/images/education-format.svg') no-repeat left center;
      padding-left: 25px;
    }
  }

  &__button-details-block {
    padding: 16px 0;
    text-align: right;
  }

  &__button-show-details {
    color: #00BBF9;
    border: none;
    outline: none;
    background-color: #fff;
    font-size: 16px;
    padding: 0;
    cursor: pointer;

    &-icon {
      margin-left: 8px;
      transition: 0.25s ease-in-out;

      &_showed {
        transform: rotate(180deg);
      }
    }
  }
}

@media(min-width: 768px) {
  .course-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr minmax(210px, 1fr);
    grid-column-gap: 20px;
    align-items: start;
    margin-bottom: 32px;

    &__title-rating-reviews-block {
      margin-bottom: 24px;
    }

    &__school-block {
      margin-bottom: 24px;
    }

    &__prices-block {
      margin-bottom: 24px;
    }

    &__buttons-block {
      margin-bottom: 24px;
    }

    &__duration {
      grid-column: 1 / span 2;
    }

    &__format-list {
      grid-column: 3 / span 2;
    }

    &__button-details-block {
      grid-column: 1 / span 4;
    }
  }
}

@media(min-width: 1440px) {
  .course-card {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr minmax(210px, 1fr);
    padding: 40px 0;
    box-shadow: none;
    border-radius: 0;
    border-top: 1px solid #E8E8E8;
    max-width: 1440px;
    margin: 0 auto;

    &:last-child {
      border-bottom: 1px solid #E8E8E8;
    }

    &__title-rating-reviews-block {
      grid-column: 1 / span 1;
      margin-bottom: 0;
    }

    &__school-block {
      grid-column: 2 / span 1;
      margin-bottom: 0;
    }

    &__prices-block {
      grid-column: 3 / span 1;
      margin-bottom: 0;
    }

    &__duration {
      grid-column: 4 / span 1;
      grid-row-start: 1;
      margin-bottom: 0;
    }

    &__promocode {
      grid-column: 5 / span 1;
      grid-row-start: 1;
      margin-bottom: 0;
    }

    &__buttons-block {
      grid-column: 6 / span 1;
      margin-bottom: 0;
    }

    &__format-list {
      grid-column: 5 / span 1;
      grid-row-start: 1;
      margin-bottom: 0;
    }

    &__button-details-block {
      display: none;
    }
  }
}
</style>
