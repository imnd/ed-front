<template>
  <div class="edvlisting-items">
    <div class="search-sorting">
      <button class="filter-button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.14199 14.9999C5.31416 14.512 5.63344 14.0895 6.05583 13.7906C6.47821 13.4917 6.9829 13.3312 7.50033 13.3312C8.01775 13.3312 8.52244 13.4917 8.94483 13.7906C9.36721 14.0895 9.68649 14.512 9.85866 14.9999H18.3337V16.6666H9.85866C9.68649 17.1545 9.36721 17.5771 8.94483 17.8759C8.52244 18.1748 8.01775 18.3353 7.50033 18.3353C6.9829 18.3353 6.47821 18.1748 6.05583 17.8759C5.63344 17.5771 5.31416 17.1545 5.14199 16.6666H1.66699V14.9999H5.14199ZM10.142 9.16659C10.3142 8.67865 10.6334 8.25612 11.0558 7.95725C11.4782 7.65838 11.9829 7.49788 12.5003 7.49788C13.0178 7.49788 13.5224 7.65838 13.9448 7.95725C14.3672 8.25612 14.6865 8.67865 14.8587 9.16659H18.3337V10.8333H14.8587C14.6865 11.3212 14.3672 11.7437 13.9448 12.0426C13.5224 12.3415 13.0178 12.502 12.5003 12.502C11.9829 12.502 11.4782 12.3415 11.0558 12.0426C10.6334 11.7437 10.3142 11.3212 10.142 10.8333H1.66699V9.16659H10.142ZM5.14199 3.33326C5.31416 2.84532 5.63344 2.42279 6.05583 2.12392C6.47821 1.82505 6.9829 1.66455 7.50033 1.66455C8.01775 1.66455 8.52244 1.82505 8.94483 2.12392C9.36721 2.42279 9.68649 2.84532 9.85866 3.33326H18.3337V4.99993H9.85866C9.68649 5.48787 9.36721 5.9104 8.94483 6.20927C8.52244 6.50814 8.01775 6.66864 7.50033 6.66864C6.9829 6.66864 6.47821 6.50814 6.05583 6.20927C5.63344 5.9104 5.31416 5.48787 5.14199 4.99993H1.66699V3.33326H5.14199ZM7.50033 4.99993C7.72134 4.99993 7.9333 4.91213 8.08958 4.75585C8.24586 4.59957 8.33366 4.38761 8.33366 4.16659C8.33366 3.94558 8.24586 3.73362 8.08958 3.57734C7.9333 3.42106 7.72134 3.33326 7.50033 3.33326C7.27931 3.33326 7.06735 3.42106 6.91107 3.57734C6.75479 3.73362 6.66699 3.94558 6.66699 4.16659C6.66699 4.38761 6.75479 4.59957 6.91107 4.75585C7.06735 4.91213 7.27931 4.99993 7.50033 4.99993ZM12.5003 10.8333C12.7213 10.8333 12.9333 10.7455 13.0896 10.5892C13.2459 10.4329 13.3337 10.2209 13.3337 9.99993C13.3337 9.77891 13.2459 9.56695 13.0896 9.41067C12.9333 9.25439 12.7213 9.16659 12.5003 9.16659C12.2793 9.16659 12.0674 9.25439 11.9111 9.41067C11.7548 9.56695 11.667 9.77891 11.667 9.99993C11.667 10.2209 11.7548 10.4329 11.9111 10.5892C12.0674 10.7455 12.2793 10.8333 12.5003 10.8333ZM7.50033 16.6666C7.72134 16.6666 7.9333 16.5788 8.08958 16.4225C8.24586 16.2662 8.33366 16.0543 8.33366 15.8333C8.33366 15.6122 8.24586 15.4003 8.08958 15.244C7.9333 15.0877 7.72134 14.9999 7.50033 14.9999C7.27931 14.9999 7.06735 15.0877 6.91107 15.244C6.75479 15.4003 6.66699 15.6122 6.66699 15.8333C6.66699 16.0543 6.75479 16.2662 6.91107 16.4225C7.06735 16.5788 7.27931 16.6666 7.50033 16.6666Z"
            fill="#9B5DE5" />
        </svg>
        Фильтры
      </button>
      <button class="search-button">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.0203 11.0779L14.8757 13.9326L13.9323 14.8759L11.0777 12.0206C10.0155 12.8721 8.69434 13.3352 7.33301 13.3333C4.02101 13.3333 1.33301 10.6453 1.33301 7.33325C1.33301 4.02125 4.02101 1.33325 7.33301 1.33325C10.645 1.33325 13.333 4.02125 13.333 7.33325C13.3349 8.69459 12.8718 10.0157 12.0203 11.0779ZM10.683 10.5833C11.5291 9.71318 12.0016 8.54687 11.9997 7.33325C11.9997 4.75459 9.91101 2.66659 7.33301 2.66659C4.75434 2.66659 2.66634 4.75459 2.66634 7.33325C2.66634 9.91125 4.75434 11.9999 7.33301 11.9999C8.54663 12.0018 9.71293 11.5293 10.583 10.6833L10.683 10.5833V10.5833Z"
            fill="#B8B8B8" />
        </svg>
      </button>

      <div class="search">
        <input v-model="searchString" type="text" placeholder="Поиск..." @input="debounceLoadData">
      </div>

      <EdvisorSelect
        v-model="sorting"
        :items="availableSortings"
        select-title="Сортировка"
        class="sorting select-sorting"
        @input="loadData"
      />
    </div>

    <h3 class="edvlisting-items_title">{{ schoolsCount }} школ(а/ы)</h3>

    <div v-if="schools.length > 0">
      <SchoolCard
        v-for="school in schools"
        :key="school.id"
        :school="school"
      />
      <div class="text-center">
        <div class="shows-course">Показано {{ schools.length }} школ из {{ schoolsCount }}</div>
        <a
          v-if="pagesCount > 0 && page < pagesCount"
          href="#"
          class="btn-outline shows-course-btn"
          @click.prevent="showMore"
        >
          Показать еще
        </a>
      </div>
      <div class="pagination-showsitem">
        <edvisor-pagination
          :pages-count="pagesCount"
          v-model="page"
          @input="loadData('page')"
        />

        <div class="showsitem">
          <select class="showsitem_select" v-model="limit" @change="loadData">
            <option
              v-for="(availableLimit, index) in availableLimits"
              :key="index"
              :value="availableLimit"
              :selected="availableLimit === limit"
            >
              Показывать по {{ availableLimit }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { debounce } from 'throttle-debounce'
import SchoolCard from '@/components/schools/SchoolCard'
import EdvisorPagination from '@/components/common/EdvisorPagination'
import EdvisorSelect from '@/components/common/EdvisorSelect'

export default {
  name: 'SchoolsList',
  components: { SchoolCard, EdvisorPagination, EdvisorSelect },
  props: {
    currentPage: {
      type: Number,
    },
  },
  data () {
    return {
      page: 1,
      searchString: '',
      limit: 20,
      availableLimits: [20, 50, 100],
      sorting: {},
      availableSortings: [
        { value: { field: 'rating', type: 'DESC' }, title: 'Сначала высокий рейтинг' },
        { value: { field: 'reviewsCount', type: 'DESC' }, title: 'По количеству отзывов' },
        { value: { field: 'schoolName', type: 'ASC' }, title: 'По названию A-Z' },
        { value: { field: 'schoolName', type: 'DESC' }, title: 'По названию Z-A' },
      ],
    }
  },
  computed: {
    ...mapState('courses', ['courses', 'coursesCount']),
    ...mapState('schools', ['schools', 'schoolsCount']),
    pagesCount () {
      return Math.ceil(this.schoolsCount / this.limit)
    },
  },
  watch: {
    currentPage (value) {
      this.page = value
    },
  },
  methods: {
    showMore () {
      this.page++

      this.$emit('showMore', {
        page: this.page,
      })
    },
    loadData (changedPropName) {

      if (changedPropName !== 'page') {
        this.page = 1
      }

      this.$emit('update-filters', {
        page: this.page,
        sorting: this.sorting,
        searchString: this.searchString,
        limit: this.limit,
      })
    },
    debounceLoadData: debounce(800, function (changedPropName) {
      this.loadData(changedPropName)
    }),
  },
}
</script>

<style scoped lang="scss">
.select-sorting,
.showsitem_select {
  border: 1px solid #E0E0E0;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
}

.edvlisting-items {
  width: 100%;
  padding-left: 32px;
}

.search-sorting {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.edvlisting-items_title {
  margin-top: 32px;
  margin-bottom: 32px;
  color: #000;
  font-weight: 800;
  font-size: 28px;
  line-height: 120%;
  font-feature-settings: "pnum" on, "lnum" on;
}

</style>
