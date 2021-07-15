<template>
  <div class="edvisor-selector">
    <div class="edvisor-selector__title-counter-block" @click="isItemsShowed = true">
      <span class="edvisor-selector__title">{{ title }}</span>
      <span class="edvisor-selector__counter">Выбрано: {{ selectedItemsCount }}</span>
    </div>

    <edvisor-modal
      v-model="isItemsShowed"
      :z-index="10001"
      :with-back-icon="true"
      :title="title"
    >
      <ul class="edvisor-selector__list">
        <li v-for="item in items" :key="item[itemValuePropName]" class="edvisor-selector__item">
          <component
            :is="modalComponent"
            :value="item[itemValuePropName]"
            :text="item[itemTextPropName]"
            v-model="model"
            :items="withChildren ? item[childrenPropName] : null"
            :item-value-prop-name="childValuePropName"
            :item-text-prop-name="childTextPropName"
          />
        </li>
      </ul>
    </edvisor-modal>
  </div>
</template>

<script>
import EdvisorModal from '@/components/common/EdvisorModal'
import EdvisorCheckbox from '@/components/common/EdvisorCheckbox'
import EdvisorCheckboxGroup from '@/components/common/EdvisorCheckboxGroup'

export default {
  name: 'EdvisorSelector',
  components: { EdvisorModal, EdvisorCheckbox, EdvisorCheckboxGroup },
  props: {
    value: {
      type: Array,
    },
    title: {
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
    withChildren: {
      type: Boolean,
      default: false,
    },
    childrenPropName: {
      type: String,
      default: 'items',
    },
    childValuePropName: {
      type: String,
      default: 'value',
    },
    childTextPropName: {
      type: String,
      default: 'text',
    },
  },
  data () {
    return {
      isItemsShowed: false,
      parentHeight: 0,
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
    modalComponent () {
      return this.withChildren ? 'EdvisorCheckboxGroup' : 'EdvisorCheckbox'
    },
    allValues () {
      return this.withChildren
        ? this.items.reduce((result, i) => [...result, i[this.itemValuePropName], ...i[this.childrenPropName].map(c => c[this.childValuePropName])], [])
        : this.items.map(i => i[this.itemValuePropName])
    },
    selectedItemsCount () {
      return this.model.filter(value => this.allValues.includes(value)).length
    },
  },
  mounted () {
    this.parentHeight = this.$el.parentElement.offsetHeight
  },
}
</script>

<style scoped lang="scss">
.edvisor-selector {
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  font-family: Raleway, sans-serif;
  position: relative;

  &__title-counter-block {
    padding: 16px 48px 16px 16px;
    background: url('../../assets/images/arr-title.svg') no-repeat right 10px center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
    transition: 0.25s ease-in-out;

    &:hover {
      background-color: #F4EEFC;
    }
  }

  &__title {
    color: #000;
  }

  &__counter {
    align-content: end;
    justify-self: end;
    color: #B8B8B8;
  }

  &__modal {
    color: red;
    position: absolute;
    top: 0;
    left: 0;
    background-color: yellow;
    width: 100%;
    height: 99999px;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &__item {
    padding: 16px 32px;
  }
}
</style>
