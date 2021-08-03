<template>
  <div class="edvlisting-sidebar">
    <div class="edvlisting-sidebar-inner">
      <div class="title-sidebar-phone">
        Фильтры
        <button class="close-filter">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.9997 10.586L16.9497 5.63599L18.3637 7.04999L13.4137 12L18.3637 16.95L16.9497 18.364L11.9997 13.414L7.04974 18.364L5.63574 16.95L10.5857 12L5.63574 7.04999L7.04974 5.63599L11.9997 10.586Z"
              fill="#B8B8B8" />
          </svg>
        </button>
      </div>
      <aside v-if="categories && categories.length > 0">
        <div class="title-sidebar">Категория курса</div>
        <div class="hide-phone">
          <EdvisorCheckboxGroup
            v-model="selectedCategories"
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
            :text="category.title"
            :items="category.subCategories"
            item-value-prop-name="id"
            item-text-prop-name="title"
            class="schools__categories-list"
            id="qwe"
            @input="handleFilterChanging"
          />
        </div>
      </aside>

      <aside v-if="paymentTypes && paymentTypes.length > 0">
        <div class="title-sidebar">Тип оплаты</div>
        <div class="hide-phone">
          <EdvisorCheckboxList
            v-model="selectedPaymentTypes"
            :items="paymentTypes"
            item-value-prop-name="id"
            item-text-prop-name="title"
            @input="handleFilterChanging"
          />
        </div>
      </aside>

      <aside v-if="educationFormats && educationFormats.length > 0">
        <div class="title-sidebar">Формат обучения</div>
        <div class="hide-phone">
          <EdvisorCheckboxList
            v-model="selectedEducationFormats"
            :items="educationFormats"
            item-value-prop-name="id"
            item-text-prop-name="title"
            @input="handleFilterChanging"
          />
        </div>
      </aside>
    </div>
    <aside class="show-filter-phone-aside">
      <button class="btn-feo show-filter-phone">
        <span v-if="schoolsCount">Показать {{ schoolsCount || '' }} школ(ы)</span>
        <span v-else>Ничего не найдено</span>
      </button>
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EdvisorCheckboxGroup from '@/components/common/EdvisorCheckboxGroup'
import EdvisorCheckboxList from '@/components/common/EdvisorCheckboxList'

export default {
  name: 'SchoolsFilters',
  components: { EdvisorCheckboxGroup, EdvisorCheckboxList },
  data () {
    return {
      selectedCategories: [],
      selectedDuration: [],
      selectedPaymentTypes: [],
      selectedEducationFormats: [],
    }
  },
  computed: {
    ...mapState('schools-categories', ['categories']),
    ...mapState('duration', ['duration']),
    ...mapState('education-formats', ['educationFormats']),
    ...mapState('payment-types', ['paymentTypes']),
    ...mapState('schools', ['schoolsCount']),
    model: {
      get () {
        return this.value
      },
      set (value) {
        return this.$emit('input', value)
      },
    },
  },
  methods: {
    handleFilterChanging () {
      this.$emit('update-filters', {
        selectedCategories: this.selectedCategories,
        selectedDuration: this.selectedDuration,
        selectedPaymentTypes: this.selectedPaymentTypes,
        selectedEducationFormats: this.selectedEducationFormats,
      })
    },
  },
}
</script>

<style scoped lang="scss">
.schools__categories-list {
  margin-bottom: 20px;
}

.edvlisting-sidebar {
  max-width: 286px;
  width: 100%;
  z-index: 999;
}

</style>
