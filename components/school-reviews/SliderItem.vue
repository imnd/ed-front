<template>
  <div class="reviews-slider-item">
    <header class="reviews-slider-item__header">
      <img
        v-if="review.user.avatar"
        :src="cdnUrl + review.user.avatar"
        class="reviews-slider-item__avatar"
      />

      <div class="reviews-slider-item__username-date-block">
        <div class="reviews-slider-item__username">{{ userFullName }}</div>
        <div class="reviews-slider-item__date">{{ reviewDate }}</div>
      </div>
    </header>

    <section class="reviews-slider-item__courseName-rating-schoolLogo-section">
      <div class="reviews-slider-item__courseName-rating-block">
        <div class="reviews-slider-item__courseName">Школа «{{ review.school.title }}»</div>
        <div class="reviews-slider-item__rating">

          <svg
            v-for="positiveMark of reviewRating"
            :key="review.id + positiveMark"
            class="reviews-slider-item__rating-icon"
          >
            <path
              d="M8.0002 12.1666L3.10186 15.1583L4.43353 9.57498L0.0751953 5.84165L5.79603 5.38331L8.0002 0.083313L10.2044 5.38331L15.926 5.84165L11.5669 9.57498L12.8985 15.1583L8.0002 12.1666Z" />
          </svg>

          <svg
            v-for="negativeMark of (5 - reviewRating)"
            :key="negativeMark"
            class="reviews-slider-item__rating-icon reviews-slider-item__rating-icon_negative"
          >
            <path
              d="M8.0002 12.1666L3.10186 15.1583L4.43353 9.57498L0.0751953 5.84165L5.79603 5.38331L8.0002 0.083313L10.2044 5.38331L15.926 5.84165L11.5669 9.57498L12.8985 15.1583L8.0002 12.1666Z" />
          </svg>
        </div>
      </div>

      <img
        v-if="review.school.logo"
        :src="cdnUrl + review.school.logo"
        class="reviews-slider-item__schoolLogo"
      />
    </section>

    <section class="reviews-slider-item__body">
      {{ isFullTextShown ? review.text : croppedBody }}
    </section>

    <footer v-if="isMaxBodyLengthExceeded" class="reviews-slider-item__footer">
      <button class="reviews-slider-item__button-show-full" @click="isFullTextShown = !isFullTextShown">
        {{ isFullTextShown ? 'Скрыть' : 'Читать полностью' }}

        <svg
          width="12" height="8" viewBox="0 0 12 8"
          class="reviews-slider-item__button-show-full-icon"
          :class="{ 'reviews-slider-item__button-show-full-icon_active': isFullTextShown }">
          <path
            d="M5.99962 4.97669L10.1246 0.851685L11.303 2.03002L5.99962 7.33335L0.696289 2.03002L1.87462 0.851685L5.99962 4.97669Z"
            fill="#9B5DE5"
          />
        </svg>
      </button>
    </footer>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'SliderItem',
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      cdnUrl: process.env.cdnUrl,
      maxBodyLength: 162,
      delimiter: '...',
      isFullTextShown: false,
    }
  },
  computed: {
    isMaxBodyLengthExceeded () {
      return this.review.text.length > this.maxBodyLength
    },
    croppedBody () {
      return this.review.text.slice(0, this.maxBodyLength).trimRight() + '...'
    },
    userFullName () {
      return `${this.review.user.firstName} ${this.review.user.lastName}`.trim()
    },
    reviewDate () {
      return moment(this.review.createdAt).format('DD.MM.YYYY')
    },
    reviewRating () {
      return parseInt(this.review.rating || 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.reviews-slider-item {
  padding: 16px;
  color: #333;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #FFFFFF;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  &__header {
    display: flex;
    flex-direction: row;
    margin-bottom: 18px;
  }

  &__avatar {
    width: 56px;
    height: 56px;
    border-radius: 100%;
    margin-right: 16px;
  }

  &__username {
    font-weight: 800;
  }

  &__date {
    font-size: 14px;
    line-height: 140%;
    color: #B8B8B8;
  }

  &__courseName-rating-schoolLogo-section {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__courseName-rating-block {
    margin-right: 22px;
  }

  &__courseName {
    font-weight: 800;
    margin-bottom: 9px;
  }

  &__rating-icon {
    margin-right: 4.15px;
    width: 16px;
    height: 16px;
    fill: #FEE440;

    &_negative {
      fill: #B8B8B8;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__schoolLogo {
    height: 24px;
    max-width: 60px;
  }

  &__body {
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 20px;
  }

  &__footer {
    display: flex;
    flex-direction: row;
    margin-top: auto;
    background-color: #fff;
    padding: 0;
  }

  &__button-show-full {
    margin-left: auto;
    padding-right: 4.7px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: #9B5DE5;
    font-size: 14px;
    line-height: 140%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;

    &-icon {
      margin-left: 12.7px;
      transition: 0.25s ease-in-out;

      &_active {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
