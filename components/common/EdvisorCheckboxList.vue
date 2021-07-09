<template>
  <div>
    <div class="checkbox-items">
      <edvisor-checkbox
          v-for="item in visibleItems"
          :key="item[itemValuePropName]"
          :value="item[itemValuePropName]"
          :text="item[itemTextPropName]"
          class="checkbox-items__checkbox"
          v-model="model"
          @update:modelValue="$emit('update:modelValue', $event)"
      />

      <template v-if="isHiddenItemsShowed">
        <edvisor-checkbox
            v-for="item in hiddenItems"
            :key="item[itemValuePropName]"
            :value="item[itemValuePropName]"
            :text="item[itemTextPropName]"
            class="checkbox-items__checkbox"
            v-model="model"
            @update:modelValue="$emit('update:modelValue', $event)"
        />
      </template>
    </div>

    <button
        v-if="!isHiddenItemsShowed && items.length > visibleItemsSize"
        class="see-all-checkbox"
        @click="isHiddenItemsShowed = !isHiddenItemsShowed"
    >
      Смотреть все ({{ items.length }})
    </button>
  </div>
</template>

<script>
import EdvisorCheckbox from './EdvisorCheckbox';

export default {
  name: 'EdvisorCheckboxList',
  components: { EdvisorCheckbox },
  props: {
    modelValue: {
      type: Array,
    },
    items: {
      type: Array,
    },
    itemValuePropName: {
      type: String,
      default: 'id',
    },
    itemTextPropName: {
      type: String,
      default: 'text',
    },
    visibleItemsSize: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      model: [],
      isHiddenItemsShowed: false,
    };
  },
  computed: {
    visibleItems() {
      return this.items.slice(0, this.visibleItemsSize);
    },
    hiddenItems() {
      return this.items.slice(this.visibleItemsSize);
    },
  },
  created() {
    this.model = [...this.modelValue];
  },
};
</script>

<style scoped lang="scss">
.checkbox-items {
  &__checkbox {
    display: block;
    margin-bottom: 20px;
  }
}
</style>
