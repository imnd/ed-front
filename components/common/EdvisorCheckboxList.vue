<template>
  <div>
    <div class="checkbox-items">
      <EdvisorCheckbox
        v-for="item in visibleItems"
        :key="item[itemValuePropName]"
        :id="item[itemValuePropName]"
        :text="item[itemTextPropName]"
        class="checkbox-items__checkbox"
        v-model="model"
        @input="model = $event"
      />

      <template v-if="isHiddenItemsShowed">
        <EdvisorCheckbox
          v-for="item in hiddenItems"
          :key="item[itemValuePropName]"
          :id="item[itemValuePropName]"
          :text="item[itemTextPropName]"
          class="checkbox-items__checkbox"
          v-model="model"
          @input="model = $event"
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
import EdvisorCheckbox from './EdvisorCheckbox'

export default {
  name: 'EdvisorCheckboxList',
  components: { EdvisorCheckbox },
  props: {
    value: {
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
  data () {
    return {
      isHiddenItemsShowed: false,
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        return this.$emit('input', value)
      },
    },
    visibleItems () {
      return this.items.slice(0, this.visibleItemsSize)
    },
    hiddenItems () {
      return this.items.slice(this.visibleItemsSize)
    },
  },
}
</script>

<style scoped lang="scss">
.checkbox-items {
  &__checkbox {
    display: block;
    margin-bottom: 20px;
  }
}
</style>
