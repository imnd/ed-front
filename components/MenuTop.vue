<template>
  <div class="menu">
    <div :class="'menu__burger d-flex d-md-none' + (isOpen ? ' menu__burger--open' : '')" @click="toggle()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div :class="'menu__list' + (isOpen ? ' menu__list--open' : '')">
      <div v-for="item in list" :class="isOpen ? 'menu__list__item menu__list--open__item' : 'menu__list__item'">
        <a :href="item.route">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuTop",
  data() {
    return {
      isOpen: false,
      list: [
        {
          'name': 'Категории',
          'route': '#'
        },
        {
          'name': 'Курсы',
          'route': '#'
        },
        {
          'name': 'Школы',
          'route': '#'
        },
        {
          'name': 'Акции школ',
          'route': '#'
        },
        {
          'name': 'Блог',
          'route': '#'
        }
      ]
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped lang="scss">
$items-gap: 35px;
$item-font-size: 16px;
$mobile-items-gap: 20px;
.menu {
  display: flex;
  justify-content: center;

  &__list {
    display: flex;
    align-items: center;
    gap: $items-gap;

    @media (max-width: 768px) {
      max-height: 0;
      transition: max-height 0.5s;
      overflow: hidden;
      position: absolute;
      left: 0;
      width: 100%;
      background-color: #ffffff;
      flex-direction: column;
      gap: $mobile-items-gap;
      align-items: baseline;
      top: 100%;

      &__item {
        overflow: hidden;

        &:first-child {
          padding-top: 30px;
        }

        &:last-child {
          padding-bottom: 30px;
        }

        a {
          padding: 0 30px;
        }
      }
    }

    &__item {

      a {
        font-weight: 500;
        font-size: $item-font-size;
        color: $menu-item-color;
      }

      &:hover {
        a {
          color: $menu-item-hover-color;
        }
      }
    }

    &--open {
      max-height: 15em;
      top: 100%;

      &__item {
        margin: 0;
        display: flex;
      }
    }
  }

  &__burger {
    min-height: 33px;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    z-index: 2;

    span {
      width: 24px;
      height: 3px;
      background-color: black;
      transition: all 0.5s;
    }

    &--open {
      span {
        position: absolute;
        right: 30px;

        &:nth-child(1) {
          transform: rotate(
              45deg
          );
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(
              -45deg
          );
        }
      }
    }
  }
}
</style>
