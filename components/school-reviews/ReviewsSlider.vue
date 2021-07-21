<template>
  <div class="reviews-slider">
    <div class="reviews-slider__control reviews-slider__control_left">
      <button class="reviews-slider__control-button reviews-slider__control-button_left" @click="handleControl('left')">
        <svg>
          <path d="M2.90872 6.99997L8 11.978L6.54564 13.4L0 6.99997L6.54564 0.599976L8 2.02197L2.90872 6.99997Z" />
        </svg>
      </button>
    </div>

    <div class="reviews-slider__list-wrapper">
      <ul ref="list" class="reviews-slider__list">
        <li
          v-for="review in lastReviews"
          :key="review.id"
          class="reviews-slider__list-item"
        >
          <SliderItem :review="review" />
        </li>
      </ul>
    </div>

    <div class="reviews-slider__control reviews-slider__control_right">
      <button
        class="reviews-slider__control-button reviews-slider__control-button_right"
        @click="handleControl('right')">
        <svg>
          <path d="M5.09128 6.99997L0 2.02197L1.45436 0.599976L8 6.99997L1.45436 13.4L0 11.978L5.09128 6.99997Z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import SliderItem from '@/components/school-reviews/SliderItem'

export default {
  name: 'ReviewsSlider',
  components: { SliderItem },
  data () {
    return {
      currentIndex: 0,
      isLoading: true,
    }
  },
  computed: {
    ...mapState('school-reviews', ['lastReviews']),
    itemsCount () {
      return this.lastReviews.length
    },
  },
  methods: {
    ...mapActions('school-reviews', ['getLastReviews']),
    handleControl (direction) {
      const windowWidth = window.innerWidth

      let multiplier = 1
      multiplier = windowWidth >= 768 ? 2 : multiplier
      multiplier = windowWidth >= 1440 ? 3 : multiplier

      console.log('multiplier', multiplier)

      this.currentIndex += direction === 'right' ? multiplier : -multiplier

      console.log('currentIndex', this.currentIndex)
      if (this.currentIndex >= this.itemsCount) {
        this.currentIndex = 0
      } else if (this.currentIndex < 0) {
        this.currentIndex = this.itemsCount - multiplier
      }

      console.log('currentIndex', this.currentIndex)

      this.$refs.list.style['transform'] = `translateX(calc(-${this.currentIndex / multiplier * 100}%))`
    },
  },
  async created () {
    await this.getLastReviews()
  },
}
</script>

<style lang="scss" scoped>

.reviews-slider {
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;

  &__control {
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    &_left {
      grid-row-start: 2;
      grid-column: 1/2;
      margin-left: auto;
      margin-right: 5px;
    }

    &_right {
      grid-row-start: 2;
      margin-left: 5px;
    }

    &-button {
      min-width: 40px;
      height: 40px;
      border-radius: 100%;
      background: #fff;
      border: 1px solid #B8B8B8;
      box-sizing: border-box;
      cursor: pointer;
      transition: 0.25s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;

      svg {
        width: 8px;
        height: 14px;
        fill: #B8B8B8;
        transition: 0.25s ease;
      }

      &:hover {
        border-color: #9B5DE5;

        svg {
          fill: #9B5DE5;
        }
      }
    }
  }

  &__list-wrapper {
    overflow: hidden;
    grid-column: 1/3;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(100, calc(50%));
    transition: 0.25s ease-in-out;
  }

  &__list-item {
    padding: 4px;
    box-sizing: border-box;
    margin: 0 8px;
  }
}

@media(min-width: 768px) {
  .reviews-slider {
    grid-column-gap: 20px;
    grid-template-columns: 40px 1fr 40px;
    grid-row-gap: 0;

    &__control {
      &_left {
        grid-row-start: 1;
        grid-column: 1/2;
        margin: 0;
      }

      &_right {
        grid-row-start: 1;
        grid-column: 3/4;
        margin: 0;
      }
    }

    &__list-wrapper {
      overflow: hidden;
      grid-column: 2/3;
    }
  }
}

@media(min-width: 1440px) {
  .reviews-slider {
    &__list {
      grid-template-columns: repeat(100, calc(50% / 3));
    }
  }
}
</style>
