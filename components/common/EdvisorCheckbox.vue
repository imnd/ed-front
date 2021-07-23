<template>
  <label class="edvisor-checkbox">
    <input
      type="checkbox"
      class="edvisor-checkbox__input"
      :value="id"
      v-model="model"
    />
    <span class="edvisor-checkbox__element" :class="{ 'edvisor-checkbox__element_active': isActive }"/>
    <span class="edvisor-checkbox__text">{{ text }}</span>
  </label>
</template>

<script>
export default {
  name: 'EdvisorCheckbox',
  props: {
    value: {
      type: Array,
    },
    id: {
      type: [Number, String, Boolean],
      default: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.value.includes(this.id);
    },
    model: {
      get() {
        return this.value;
      },
      set(value) {
        return this.$emit('input', value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.edvisor-checkbox {
  display: inline-flex;
  cursor: pointer;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  align-items: center;

  &__input {
    display: none;
  }

  &__element {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 2px;
    margin-right: 8px;

    &_active {
      border: none;
      background: url('../../assets/images/check.svg');
    }
  }

  &__text {
    color: #333333;
    user-select: none;
  }
}
</style>
