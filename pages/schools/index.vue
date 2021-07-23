<template>
  <div class="container edvlisting listing-page middle-container">
    <h2>Онлайн-школы, преподающие Онлайн-курсы</h2>
    <div class="toptext">Список онлайн-школ, преподающих Онлайн-курсы с рейтингом, отзывами и детальным описанием курса
      2021 года. Подробные описания, цены, удобное сравнение характеристик курса.
    </div>

    <div class="edvlisting-row" v-if="!isLoading">
      <SchoolsSidebar @update-filters="updateFilters($event, true)"/>
      <SchoolsPage
        :currentPage="filters.page"
        @update-filters="updateFilters"
        @show-more="showMoreHandler"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      filters: {
        selectedCategories: null,
        selectedSchools: null,
        selectedDuration: null,
        selectedPaymentTypes: null,
        selectedEducationFormats: null,

        page: 1,
        sortingType: null,
        searchString: null,
        limit: 20,
      },
      isLoading: true,
    }
  },
  methods: {
    ...mapActions('courses-categories', ['getCategories']),
    ...mapActions('duration', ['getDuration']),
    ...mapActions('education-formats', ['getEducationFormats']),
    ...mapActions('payment-types', ['getPaymentTypes']),
    ...mapActions('schools', ['getSchoolsList', 'loadMore']),

    async updateFilters (payload, needToRefreshPage = false) {
      if (needToRefreshPage) {
        this.filters.page = 1
      }
      this.filters = { ...this.filters, ...payload }

      await this.getSchoolsList({ ...this.filters })
    },
    async showMoreHandler (payload) {
      this.filters = { ...this.filters, ...payload }

      await this.loadMore({ ...this.filters })
    },
  },
  async created () {
    await this.getCategories()
    await this.getDuration()
    await this.getPaymentTypes()
    await this.getEducationFormats()
    await this.getSchoolsList(this.filters)

    this.isLoading = false
  },
}
</script>
