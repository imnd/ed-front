<template>
  <div>
    <div class="courses-filters">
      <input
        v-model="searchString"
        type="text"
        placeholder="Поиск..."
        class="courses-filters__search-field"
        :class="{ 'courses-filters__search-field_visible': doesSearchFieldHaveVisibleModifier }"
      >

      <button class="courses-filters__button-show-filters" title="Показать фильтры" @click="isShowModal = true">
        <svg width="16" height="16" viewBox="0 0 16 16" class="courses-filters__button-show-filters-icon">
          <path
            d="M4.11301 12.0001C4.25074 11.6097 4.50617 11.2717 4.84407 11.0326C5.18198 10.7935 5.58573 10.6651 5.99967 10.6651C6.41362 10.6651 6.81737 10.7935 7.15528 11.0326C7.49318 11.2717 7.74861 11.6097 7.88634 12.0001H14.6663V13.3334H7.88634C7.74861 13.7238 7.49318 14.0618 7.15528 14.3009C6.81737 14.54 6.41362 14.6684 5.99967 14.6684C5.58573 14.6684 5.18198 14.54 4.84407 14.3009C4.50617 14.0618 4.25074 13.7238 4.11301 13.3334H1.33301V12.0001H4.11301ZM8.11301 7.33342C8.25074 6.94307 8.50617 6.60504 8.84408 6.36595C9.18198 6.12685 9.58573 5.99845 9.99968 5.99845C10.4136 5.99845 10.8174 6.12685 11.1553 6.36595C11.4932 6.60504 11.7486 6.94307 11.8863 7.33342H14.6663V8.66675H11.8863C11.7486 9.05711 11.4932 9.39513 11.1553 9.63423C10.8174 9.87332 10.4136 10.0017 9.99968 10.0017C9.58573 10.0017 9.18198 9.87332 8.84408 9.63423C8.50617 9.39513 8.25074 9.05711 8.11301 8.66675H1.33301V7.33342H8.11301ZM4.11301 2.66675C4.25074 2.2764 4.50617 1.93838 4.84407 1.69928C5.18198 1.46018 5.58573 1.33179 5.99967 1.33179C6.41362 1.33179 6.81737 1.46018 7.15528 1.69928C7.49318 1.93838 7.74861 2.2764 7.88634 2.66675H14.6663V4.00009H7.88634C7.74861 4.39044 7.49318 4.72846 7.15528 4.96756C6.81737 5.20666 6.41362 5.33505 5.99967 5.33505C5.58573 5.33505 5.18198 5.20666 4.84407 4.96756C4.50617 4.72846 4.25074 4.39044 4.11301 4.00009H1.33301V2.66675H4.11301ZM5.99967 4.00009C6.17649 4.00009 6.34606 3.92985 6.47108 3.80483C6.5961 3.6798 6.66634 3.51023 6.66634 3.33342C6.66634 3.15661 6.5961 2.98704 6.47108 2.86202C6.34606 2.73699 6.17649 2.66675 5.99967 2.66675C5.82286 2.66675 5.6533 2.73699 5.52827 2.86202C5.40325 2.98704 5.33301 3.15661 5.33301 3.33342C5.33301 3.51023 5.40325 3.6798 5.52827 3.80483C5.6533 3.92985 5.82286 4.00009 5.99967 4.00009ZM9.99968 8.66675C10.1765 8.66675 10.3461 8.59652 10.4711 8.47149C10.5961 8.34647 10.6663 8.1769 10.6663 8.00009C10.6663 7.82328 10.5961 7.65371 10.4711 7.52868C10.3461 7.40366 10.1765 7.33342 9.99968 7.33342C9.82286 7.33342 9.6533 7.40366 9.52827 7.52868C9.40325 7.65371 9.33301 7.82328 9.33301 8.00009C9.33301 8.1769 9.40325 8.34647 9.52827 8.47149C9.6533 8.59652 9.82286 8.66675 9.99968 8.66675ZM5.99967 13.3334C6.17649 13.3334 6.34606 13.2632 6.47108 13.1382C6.5961 13.0131 6.66634 12.8436 6.66634 12.6668C6.66634 12.4899 6.5961 12.3204 6.47108 12.1953C6.34606 12.0703 6.17649 12.0001 5.99967 12.0001C5.82286 12.0001 5.6533 12.0703 5.52827 12.1953C5.40325 12.3204 5.33301 12.4899 5.33301 12.6668C5.33301 12.8436 5.40325 13.0131 5.52827 13.1382C5.6533 13.2632 5.82286 13.3334 5.99967 13.3334Z"
            fill="#9B5DE5" />
        </svg>
        <span class="courses-filters__button-show-filters-title">Фильтры</span>
      </button>

      <button class="courses-filters__button-search"
              @click="doesSearchFieldHaveVisibleModifier = !doesSearchFieldHaveVisibleModifier">
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M12.0203 11.0779L14.8757 13.9326L13.9323 14.8759L11.0777 12.0206C10.0155 12.8721 8.69434 13.3352 7.33301 13.3333C4.02101 13.3333 1.33301 10.6453 1.33301 7.33325C1.33301 4.02125 4.02101 1.33325 7.33301 1.33325C10.645 1.33325 13.333 4.02125 13.333 7.33325C13.3349 8.69459 12.8718 10.0157 12.0203 11.0779ZM10.683 10.5833C11.5291 9.71318 12.0016 8.54687 11.9997 7.33325C11.9997 4.75459 9.91101 2.66659 7.33301 2.66659C4.75434 2.66659 2.66634 4.75459 2.66634 7.33325C2.66634 9.91125 4.75434 11.9999 7.33301 11.9999C8.54663 12.0018 9.71293 11.5293 10.583 10.6833L10.683 10.5833Z"
            fill="#B8B8B8" />
        </svg>
      </button>

      <EdvisorSelect
        v-model="sorting"
        :items="availableSortings"
        select-title="Сортировка"
        class="courses-filters__sort"
        @input="filterChangedHandler"
      />

      <div class="courses-filters__table-section">
        <EdvisorMultipleSelect
          v-model="selectedCategories"
          :items="categories"
          :with-children="true"
          select-title="Категория"
          class="courses-filters__category"
          item-value-prop-name="id"
          item-title-prop-name="title"
          children-prop-name="subCategories"
          child-value-prop-name="id"
          child-text-prop-name="title"
          @input="selectedCategories = $event"
        />

        <EdvisorMultipleSelect
          v-model="selectedSchools"
          :items="schools"
          select-title="Школа"
          item-value-prop-name="id"
          item-title-prop-name="title"
          class="courses-filters__school"
          @input="selectedSchools = $event"
        />

        <EdvisorMultipleSelect
          v-model="selectedDuration"
          :items="duration"
          select-title="Продолжительность"
          item-value-prop-name="id"
          item-title-prop-name="title"
          class="courses-filters__duration"
          @input="selectedDuration = $event"
        />

        <EdvisorMultipleSelect
          v-model="selectedPaymentTypes"
          :items="paymentTypes"
          select-title="Тип оплаты"
          item-value-prop-name="id"
          item-title-prop-name="title"
          class="courses-filters__payment-type"
          @input="selectedPaymentTypes = $event"
        />

        <EdvisorMultipleSelect
          v-model="selectedEducationFormats"
          :items="educationFormats"
          select-title="Формат обучения"
          item-value-prop-name="id"
          item-title-prop-name="title"
          class="courses-filters__education-format"
          @input="selectedEducationFormats = $event"
        />
      </div>

      <div class="courses-filters__table-header" v-if="courses.length > 0">
        <div
          class="courses-filters__table-header-title"
          @click="handleSorting('courseName')"
          :class="{
            'courses-filters__table-header-title_sort-asc' : sorting.field && sorting.field === 'courseName' && sorting.type && sorting.type === 'ASC',
            'courses-filters__table-header-title_sort-desc' : sorting.field && sorting.field === 'courseName' && sorting.type && sorting.type === 'DESC',
          }"
        >
          Курс
        </div>
        <div
          class="courses-filters__table-header-title"
          @click="handleSorting('schoolName')"
          :class="{
            'courses-filters__table-header-title_sort-asc': sorting.field && sorting.field === 'schoolName' && sorting.type && sorting.type === 'ASC',
            'courses-filters__table-header-title_sort-desc': sorting.field && sorting.field === 'schoolName' && sorting.type && sorting.type === 'DESC',
          }">Школа
        </div>
        <div
          class="courses-filters__table-header-title"
          @click="handleSorting('price')"
          :class="{
            'courses-filters__table-header-title_sort-asc': sorting.field && sorting.field === 'price' && sorting.type && sorting.type === 'ASC',
            'courses-filters__table-header-title_sort-desc': sorting.field && sorting.field === 'price' && sorting.type && sorting.type === 'DESC',
          }">Цена
        </div>
        <div
          class="courses-filters__table-header-title"
          @click="handleSorting('duration')"
          :class="{
            'courses-filters__table-header-title_sort-asc': sorting.field && sorting.field === 'duration' && sorting.type && sorting.type === 'ASC',
            'courses-filters__table-header-title_sort-desc': sorting.field && sorting.field === 'duration' && sorting.type && sorting.type === 'DESC',
          }">Длительность
        </div>
        <div class="courses-filters__table-header-title courses-filters__table-header-title_no-sort">Особенности</div>
        <div class="courses-filters__table-header-title courses-filters__table-header-title_no-sort">Подробнее</div>
      </div>
    </div>
    <EdvisorModal v-model="isShowModal" title="Фильтры">
      <div class="courses-filters__modal">
        <div class="courses-filters__modal-counter-line">
          <span class="courses-filters__modal-counter-line-title">Всего выбрано: {{ selectedFiltersCount }}</span>
          <span class="courses-filters__modal-counter-line-reset" @click="resetFilters">Сбросить</span>
        </div>

        <EdvisorSelector
          title="Категория курса"
          :items="categories"
          :with-children="true"
          item-value-prop-name="id"
          item-text-prop-name="title"
          children-prop-name="subCategories"
          child-value-prop-name="id"
          child-text-prop-name="title"
          v-model="selectedCategories"
        />

        <EdvisorSelector
          title="Школа"
          :items="schools"
          item-value-prop-name="id"
          item-text-prop-name="title"
          v-model="selectedSchools"
        />

        <EdvisorSelector
          title="Длительность"
          :items="duration"
          item-value-prop-name="id"
          item-text-prop-name="title"
          v-model="selectedDuration"
        />

        <EdvisorSelector
          title="Тип оплаты"
          :items="paymentTypes"
          item-value-prop-name="id"
          item-text-prop-name="title"
          v-model="selectedPaymentTypes"
        />

        <EdvisorSelector
          title="Формат обучения"
          :items="educationFormats"
          item-value-prop-name="id"
          item-text-prop-name="title"
          v-model="selectedEducationFormats"
        />

        <button class="courses-filters__modal-button" @click="isShowModal = false">
          Закрыть
        </button>
      </div>
    </EdvisorModal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EdvisorSelect from '@/components/common/EdvisorSelect'
import EdvisorModal from '@/components/common/EdvisorModal'
import EdvisorSelector from '@/components/common/EdvisorSelector'
import EdvisorMultipleSelect from '@/components/common/EdvisorMultipleSelect'

export default {
  name: 'CoursesFilters',
  components: { EdvisorMultipleSelect, EdvisorSelector, EdvisorModal, EdvisorSelect },
  emits: ['filters-changed'],
  props: {
    filters: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      sorting: {},
      availableSortings: [
        { value: { field: 'courseName', type: 'ASC' }, title: 'По названию курса A-Z' },
        { value: { field: 'courseName', type: 'DESC' }, title: 'По названию курса Z-A' },
        { value: { field: 'schoolName', type: 'ASC' }, title: 'По названию школы A-Z' },
        { value: { field: 'schoolName', type: 'DESC' }, title: 'По названию школы Z-A' },
        { value: { field: 'price', type: 'ASC' }, title: 'По возрастанию цены' },
        { value: { field: 'price', type: 'DESC' }, title: 'По убыванию цены' },
        { value: { field: 'duration', type: 'ASC' }, title: 'По возрастанию длительности' },
        { value: { field: 'duration', type: 'DESC' }, title: 'По убыванию длительности' },
      ],
      doesSearchFieldHaveVisibleModifier: false,
      isShowModal: false,
    }
  },
  computed: {
    ...mapState('courses-categories', ['categories']),
    ...mapState('schools', ['schools']),
    ...mapState('duration', ['duration']),
    ...mapState('payment-types', ['paymentTypes']),
    ...mapState('education-formats', ['educationFormats']),
    ...mapState('courses', ['courses']),

    selectedFiltersCount () {
      return this.selectedCategories.length
        + this.selectedSchools.length
        + this.selectedDuration.length
        + this.selectedPaymentTypes.length
        + this.selectedEducationFormats.length
    },

    selectedCategories: {
      get () {
        return this.filters.selectedCategories
      },
      set (value) {
        this.$emit('filters-changed', { selectedCategories: value })
      }
    },
    selectedSchools: {
      get () {
        return this.filters.selectedSchools
      },
      set (value) {
        this.$emit('filters-changed', { selectedSchools: value })
      }
    },
    selectedDuration: {
      get () {
        return this.filters.selectedDuration
      },
      set (value) {
        this.$emit('filters-changed', { selectedDuration: value })
      }
    },
    selectedPaymentTypes: {
      get () {
        return this.filters.selectedPaymentTypes
      },
      set (value) {
        this.$emit('filters-changed', { selectedPaymentTypes: value })
      }
    },
    selectedEducationFormats: {
      get () {
        return this.filters.selectedEducationFormats
      },
      set (value) {
        this.$emit('filters-changed', { selectedEducationFormats: value })
      }
    },
    searchString: {
      get () {
        return this.filters.searchString
      },
      set (value) {
        this.$emit('filters-changed', { searchString: value })
      }
    },
    page: {
      get () {
        return this.filters.page
      },
      set (value) {
        this.$emit('filters-changed', { page: value })
      }
    },
  },
  methods: {
    resetFilters () {
      this.selectedCategories = []
      this.selectedSchools = []
      this.selectedDuration = []
      this.selectedPaymentTypes = []
      this.selectedEducationFormats = []
    },
    filterChangedHandler () {
      this.$emit('filters-changed', {
        selectedCategories: this.selectedCategories,
        selectedSchools: this.selectedSchools,
        selectedDuration: this.selectedDuration,
        selectedPaymentTypes: this.selectedPaymentTypes,
        selectedEducationFormats: this.selectedEducationFormats,
        searchString: this.searchString,
        sorting: this.sorting,
      })
    },
    handleSorting (sortField) {
      if (!this.sorting || this.sorting.field !== sortField) {
        this.sorting = this.availableSortings.find(s => s.value.field === sortField && s.value.type === 'ASC').value
      } else if (this.sorting.type === 'ASC') {
        this.sorting = this.availableSortings.find(s => s.value.field === sortField && s.value.type === 'DESC').value
      } else if (this.sorting.type === 'DESC') {
        this.sorting = null
      }

      this.page = 1
      this.filterChangedHandler()
    },
  },
}
</script>

<style scoped lang="scss">
.courses-filters {
  display: grid;
  grid-template-columns: 48px 48px 1fr;
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;

  &__table-header-title {
    display: flex;
    align-items: center;

    &:after {
      background: url('../../assets/images/sort_icon.svg') no-repeat right center;
      display: inline-block;
      content: '';
      height: 14.17px;
      width: 16.67px;
      margin-left: 10.5px;
      transform: rotate(180deg);
    }

    &_sort-asc,
    &_sort-desc {
      &:after {
        transform: rotate(180deg);
        filter: invert(1);
      }
    }

    &_sort-desc {
      &:after {
        transform: rotate(0);
      }
    }

    &_no-sort {
      &:after {
        display: none;
      }
    }
  }

  &__button-show-filters {
    background: #FFFFFF;
    border: 1px solid #9B5DE5;
    box-sizing: border-box;
    border-radius: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    width: 40px;
    justify-content: center;
    cursor: pointer;
    outline: none;

    &-title {
      display: none;
    }
  }

  &__button-search {
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 100px;
    outline: none;
  }

  &__search-field {
    grid-column: 1 / span 3;
    grid-row-start: 2;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    height: 40px;
    padding-left: 48px;
    font-size: 16px;
    margin-top: 8px;
    background: url('../../assets/images/search.svg') no-repeat left 20px center;
    outline: none;
    display: none;

    &_visible {
      display: block;
    }
  }

  &__modal {
    display: grid;
    grid-template-rows: max-content max-content max-content max-content max-content max-content 1fr;
    box-sizing: border-box;
    height: 100%;

    &-counter-line {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 15px;
      padding: 0 16px;

      &-title {
        font-weight: 800;
        font-size: 14px;
        line-height: 140%;
      }

      &-reset {
        font-size: 14px;
        line-height: 140%;
        color: #9B5DE5;
        cursor: pointer;
      }
    }

    &-button {
      align-self: end;
      justify-self: center;
      margin: 20px 32px;
      padding: 14.5px 29px;
      color: #fff;
      background-color: #9B5DE5;
      border: none;
      border-radius: 100px;
      font-weight: 800;
      line-height: 120%;
      outline: none;
      cursor: pointer;
    }
  }

  &__table-section,
  &__table-header {
    display: none;
  }
}

@media(min-width: 768px) {
  .courses-filters {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 18px;

    &__button-show-filters {
      grid-column: 2 / span 1;
      grid-row-start: 1;
      width: auto;
      font-weight: 800;
      font-size: 16px;
      line-height: 120%;
      color: #9B5DE5;
      height: 48px;

      &-icon {
        margin-right: 8px;
      }

      &-title {
        display: inline;
      }
    }

    &__button-search {
      display: none;
    }

    &__search-field {
      display: block;
      grid-column: 1 / 2;
      grid-row-start: 1;
      height: 48px;
      margin-top: 0;
    }
  }
}

@media(min-width: 1440px) {
  .courses-filters {
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 16px;
    max-width: 1440px;
    margin: 0 auto;

    &__search-field {
      grid-column: 1 / span 5;
      height: 56px;
      margin-bottom: 16px;

      &::placeholder {
        color: #B8B8B8;
      }
    }

    &__button-show-filters {
      display: none;
    }

    &__sort {
      display: none;
    }

    &__table-section {
      height: 56px;
      grid-column: 1 / span 5;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 16px;
      margin-bottom: 32px;
    }

    &__table-header {
      display: grid;
      grid-column: 1 / span 5;
      grid-template-columns: repeat(6, 1fr);
      grid-column-gap: 16px;

      &-title {
        padding: 20px 0;
        font-weight: 800;
        cursor: pointer;
      }
    }
  }
}
</style>
