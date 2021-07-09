<template>
  <div class="edvisor-content-limiter">
    <div>
      {{ (isHidden && doesTextNeedToTruncate) ? truncatedText : text }}

      <button
        v-if="doesTextNeedToTruncate"
        class="edvisor-content-limiter__button"
        :class="{ 'edvisor-content-limiter__button_inline': isInlineBtn }"
        @click="isHidden = !isHidden"
      >
        {{ isHidden ? showBtnText : hideBtnText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdvisorContentLimiter',
  props: {
    text: {
      type: String,
      required: true
    },
    limit: {
      type: Number,
      default: 500,
    },
    isInlineBtn: {
      type: Boolean,
      default: false,
    },
    showBtnText: {
      type: String,
      default: 'Показать полностью',
    },
    hideBtnText: {
      type: String,
      default: 'Свернуть',
    },
  },
  data() {
    return {
      isHidden: true,
    };
  },
  computed: {
    doesTextNeedToTruncate() {
      return this.text.length > this.limit;
    },
    truncatedText() {
      return this.doesTextNeedToTruncate
        ? this.text.substr(0, this.limit).trimRight() + '...'
        : this.text;
    },
  },
};
</script>

<style scoped lang="scss">
.edvisor-content-limiter {
  &__button {
    font-size: inherit;
    color: #9b5de5;
    margin: 5px 0 0 !important;
    padding: 0 !important;
    background-color: #fff !important;
    cursor: pointer;
    font-weight: 500 !important;

    &_inline {
      display: inline-block !important;
    }
  }
}
</style>
