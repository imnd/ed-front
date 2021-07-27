<template>
  <div class="edvisor-modal" :style="{ zIndex }" v-if="model">
    <div class="edvisor-modal__content">
      <svg v-if="withBackIcon" width="8" height="14" viewBox="0 0 8 14" class="edvisor-modal__back-button"
           @click="model = false">
        <path
          d="M2.828 6.99999L7.778 11.95L6.364 13.364L0 6.99999L6.364 0.635986L7.778 2.04999L2.828 6.99999Z"
          fill="#B8B8B8" />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        class="edvisor-modal__close-button"
        @click="model = false"
      >
        <path
          d="M6.99974 5.58599L11.9497 0.635986L13.3637 2.04999L8.41374 6.99999L13.3637 11.95L11.9497 13.364L6.99974 8.41399L2.04974 13.364L0.635742 11.95L5.58574 6.99999L0.635742 2.04999L2.04974 0.635986L6.99974 5.58599Z"
          fill="#B8B8B8" />
      </svg>

      <div v-if="title" class="edvisor-modal__title">{{ title }}</div>

      <div class="edvisor-modal__content-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdvisorModal',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default: 10000,
    },
    title: {
      type: String,
      default: null,
    },
    withBackIcon: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isOpen: false,
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
  },
  created () {
    this.isOpen = this.isOpenImmediately
  },
}
</script>

<style scoped lang="scss">
.edvisor-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  line-height: 150%;

  &__content {
    background-color: #fff;
    box-sizing: border-box;
    overflow: auto;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-rows: max-content auto;
  }

  &__back-button {
    box-sizing: content-box;
    position: absolute;
    left: 16px;
    top: 20px;
    cursor: pointer;
    padding: 5.5px 8px;
  }

  &__close-button {
    box-sizing: content-box;
    cursor: pointer;
    padding: 5.5px;
    position: absolute;
    right: 16px;
    top: 20px;
  }

  &__title {
    text-align: center;
    font-weight: 800;
    font-size: 18px;
    border-bottom: 1px solid #E8E8E8;
    padding: 20px 16px;
    margin-bottom: 24px;
  }

  &__content-body {
    padding: 0;
    min-height: 100%;
    box-sizing: border-box;
  }
}

@media(min-width: 768px) {
  .edvisor-modal {
    &__content {
      margin: 50px;
      height: calc(100% - 200px);
      border-radius: 8px;
    }
  }
}
</style>
