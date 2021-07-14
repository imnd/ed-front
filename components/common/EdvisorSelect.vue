<template>
  <div
    v-if="items && items.length > 0"
    class="edvisor-select"
    ref="edvisor-select"
  >
    <div
      class="edvisor-select__field"
      :class="{ 'edvisor-select__field_active': isActive }"
      @click="isActive = !isActive"
    >
      <span class="edvisor-select__field-title" :class="{ 'edvisor-select__field-title_not-empty': !!model }">
        {{ title }}
      </span>
      <svg width="10" height="6" viewBox="0 0 10 6" class="edvisor-select__field-icon" :class="{ 'edvisor-select__field-icon_active': isActive }">
        <path d="M5 5.33325L0 0.333252H10L5 5.33325Z" />
      </svg>
    </div>

    <ul
      v-if="isActive"
      class="edvisor-select__list"
    >
      <li
        v-for="item in items"
        :key="item[itemValuePropName]"
        class="edvisor-select__list-item edvisor-select__list-item_selectable"
        @click="model = item[itemValuePropName]; isActive = false"
      >
        {{ item[itemTitlePropName] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EdvisorSelect',
  props: {
    value: {
      type: [Number, String, Object],
    },
    selectTitle: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
    itemValuePropName: {
      type: String,
      default: 'value',
    },
    itemTitlePropName: {
      type: String,
      default: 'title',
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        return this.$emit('input', value);
      },
    },
    title() {
      if (this.model) {
        let selected = this.items.find(item => item[this.itemValuePropName] === this.model);
        if (selected !== undefined) {
          return selected[this.itemTitlePropName];
        }
      }
      return this.selectTitle;
    }
  },
};
</script>

<style scoped lang="scss">
.edvisor-select {
  font-family: Raleway, sans-serif;
  position: relative;
  box-sizing: border-box;
  min-width: 0;

  &__field {
    box-sizing: border-box;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    height: 100%;
    max-height: 56px;
    line-height: 24px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    user-select: none;
    padding: 0 40px 0 20px;
    display: flex;
    align-items: center;
    position: relative;

    &_active {
      border-color: #9B5DE5;
    }
  }

  &__field-counter {
    color: #333;
  }

  &__field-title {
    color: #B8B8B8;
    user-select: none;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: content-box;

    &_not-empty {
      color: #333;
    }
  }

  &__field-icon {
    position: absolute;
    right: 20px;
    height: 100%;
    transition: 0.3s ease-in-out;
    fill: #B8B8B8;

    &_active {
      transform: rotate(180deg);
      fill: #9B5DE5;
    }
  }

  &__list {
    list-style-type: none;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid #DECAF6;
    border-radius: 5px;
    position: absolute;
    width: 100%;
    z-index: 99;
    background-color: #fff;
    margin: 8px 0 0 0;
  }

  &__list-item {
    padding: 16px 20px;
    transition: 0.2s ease-in-out;
    user-select: none;

    &_counter-block {
      display: flex;
      justify-content: space-between;
    }

    &_selectable {
      &:hover {
        background-color: #F4EEFC;
      }
    }
  }
}
</style>
