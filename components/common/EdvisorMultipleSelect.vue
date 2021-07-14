<template>
  <div
    v-if="items && items.length > 0"
    class="edvisor-select"
    ref="edvisor-select"
  >
    <div
      class="edvisor-select__field"
      :class="{
        'edvisor-select__field_with-selected-items': !isActive && value.length > 0,
        'edvisor-select__field_active': isActive,
      }"
      @click="isActive = !isActive"
    >
      <span class="edvisor-select__field-title">{{ selectTitle }}</span>
      <div class="edvisor-select__field-counter" v-if="!isActive && value.length > 0">Выбрано: {{
          value.length
        }}
      </div>

      <svg width="10" height="6" viewBox="0 0 10 6" class="edvisor-select__field-icon"
           :class="{ 'edvisor-select__field-icon_active': isActive }">
        <path d="M5 5.33325L0 0.333252H10L5 5.33325Z"/>
      </svg>
    </div>

    <div
      v-if="isActive"
      class="edvisor-select__list-wrapper"
    >
      <div class="edvisor-select__list-item edvisor-select__list-item_counter-block">
        <span class="edvisor-select__counter">Выбрано: {{ value.length }}</span>
        <button
          class="edvisor-select__select-all-btn"
          @click="selectAllOrClear"
        >
          <svg width="12" height="9" viewBox="0 0 12 9">
            <path
              d="M4.66649 7.11475L10.7945 0.986084L11.7378 1.92875L4.66649 9.00008L0.423828 4.75742L1.36649 3.81475L4.66649 7.11475Z"/>
          </svg>

          {{ doesModelIncludeValues ? 'очистить' : 'все' }}
        </button>
      </div>

      <ul
        v-if="isActive"
        class="edvisor-select__list"
      >
        <li
          v-for="item in items"
          :key="item[itemValuePropName]"
          class="edvisor-select__list-item edvisor-select__list-item_selectable"
        >
          <component
            :is="listComponent"
            v-model="model"
            :id="item[itemValuePropName]"
            :text="item[itemTitlePropName]"
            :items="withChildren ? item[childrenPropName] : null"
            :item-value-prop-name="childValuePropName"
            :item-text-prop-name="childTextPropName"
            @input="model = $event"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EdvisorCheckbox from '@/components/common/EdvisorCheckbox';
import EdvisorCheckboxGroup from '@/components/common/EdvisorCheckboxGroup';

export default {
  name: 'EdvisorMultipleSelect',
  components: {EdvisorCheckboxGroup, EdvisorCheckbox},
  props: {
    value: {
      type: Array,
      default: () => [],
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
    withChildren: {
      type: Boolean,
      default: false,
    },
    childValuePropName: {
      type: String,
      default: 'value',
    },
    childTextPropName: {
      type: String,
      default: 'text',
    },
    childrenPropName: {
      type: String,
      default: 'items',
    },
    selectTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    listComponent() {
      return this.withChildren ? 'EdvisorCheckboxGroup' : 'EdvisorCheckbox';
    },
    doesModelIncludeValues() {
      return this.model.find(item => this.allValues.includes(item)) !== undefined;
    },
    allValues() {
      return this.withChildren
        ? this.items.reduce((result, i) => [...result, i[this.itemValuePropName], ...i[this.childrenPropName].map(c => c[this.childValuePropName])], [])
        : [...this.items.map(i => i[this.itemValuePropName])];
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
  methods: {
    selectAllOrClear() {
      if (this.doesModelIncludeValues) {
        this.model = this.model.filter(item => !this.allValues.includes(item));
      } else {
        this.model = [
          ...this.value,
          ...this.allValues.filter(value => !this.model.includes(value))
        ];
      }
    },
  },
};
</script>

<style scoped lang="scss">
.edvisor-select {
  font-family: Raleway, sans-serif;
  position: relative;
  box-sizing: border-box;

  &__field {
    box-sizing: border-box;
    position: relative;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    height: 56px;
    line-height: 24px;
    padding: 16px 48px 16px 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    user-select: none;

    &_active {
      border-color: #9B5DE5;
    }

    &_with-selected-items {
      padding: 8px 48px 8px 20px;

      .edvisor-select__field-title {
        font-size: 12px;
        line-height: 16px;
      }
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
  }

  &__field-icon {
    position: absolute;
    right: 25px;
    top: 26.3px;
    transition: 0.3s ease-in-out;
    fill: #B8B8B8;

    &_active {
      transform: rotate(180deg);
      fill: #9B5DE5;
    }
  }

  &__list-wrapper {
    border: 1px solid #DECAF6;
    border-radius: 5px;
    position: absolute;
    width: 100%;
    z-index: 99;
    background-color: #fff;
    box-sizing: border-box;
  }

  &__counter {
    color: #757575;
    font-weight: 500;
    font-size: 14px;
  }

  &__select-all-btn {
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #fff;
    padding: 6px 12px;
    cursor: pointer;
    text-transform: uppercase;
    color: #757575;
    font-weight: 500;
    font-size: 12px;
    line-height: 130%;
  }

  &__list-wrapper {
    margin-top: 8px;
    box-sizing: border-box;
  }

  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
