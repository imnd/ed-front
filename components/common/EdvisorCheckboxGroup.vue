<template>
  <div class="edvisor-checkbox-group">
    <div class="edvisor-checkbox-group__parent">
      <edvisor-checkbox
        v-model="model"
        :value="value"
        :text="text"
        class="edvisor-checkbox-group__parent-input"
        @update:modelValue="parentChangeStateHandler"
      />

      <svg width="12" height="8" viewBox="0 0 12 8" class="edvisor-checkbox-group__parent-icon" :class="{ 'edvisor-checkbox-group__parent-icon_active': isToggled }" @click="isToggled = !isToggled">
        <path d="M6.00011 4.97656L10.1251 0.851562L11.3034 2.0299L6.00011 7.33323L0.696777 2.0299L1.87511 0.851562L6.00011 4.97656Z" />
      </svg>
    </div>

    <ul v-if="isToggled" class="edvisor-checkbox-group__children-list">
      <li
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        class="edvisor-checkbox-group__children-list-item"
      >
        <edvisor-checkbox
          :value="item[itemValuePropName]"
          :text="item[itemTextPropName]"
          v-model="model"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import EdvisorCheckbox from '@/components/common/EdvisorCheckbox';

export default {
  name: 'EdvisorCheckboxGroup',
  components: { EdvisorCheckbox },
  props: {
    modelValue: {
      type: Array,
    },
    value: {
      type: [Number, String, Boolean],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    itemValuePropName: {
      type: String,
      default: 'value',
    },
    itemTextPropName: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      isToggled: false,
    };
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(value) {
        return this.$emit('update:modelValue', value);
      },
    },
    isParentChecked() {
      return this.modelValue.includes(this.value);
    },
  },
  methods: {
    parentChangeStateHandler(newModelValue) {
      const isChecked = newModelValue.includes(this.value);

      this.isToggled = isChecked;

      const allValues = [...this.items.map(item => item[this.itemValuePropName]), this.value];
      const modelWithoutAllValues = this.modelValue.filter(item => !allValues.includes(item));

      if (isChecked) {
        this.$emit('update:modelValue', [...modelWithoutAllValues, ...allValues]);
      } else {
        this.$emit('update:modelValue', modelWithoutAllValues);
      }
    },
  },
  created() {
    if (this.modelValue.includes(this.value)) {
      this.isToggled = true;
    }
  }
};
</script>

<style scoped lang="scss">
.edvisor-checkbox-group {
  &__children-list {
    list-style-type: none;
    padding: 0;
    margin: 0;

    &-item {
      padding-left: 32px;
      margin-top: 24px;
    }
  }

  &__parent {
    display: flex;
    align-items: center;

    &-icon {
      margin-left: auto;
      fill: #333;
      cursor: pointer;
      transition: 0.25s ease-in-out;

      &_active {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
