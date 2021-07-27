<template>
  <div class="container listing-page">
    <div class="top_h1_text">
      <h1 class="top-h1">Онлайн-школы, преподающие Онлайн-курсы</h1>
    </div>

    <div class="toptext">
      Список онлайн-школ, преподающих Онлайн-курсы с рейтингом,
      отзывами и детальным описанием курса 2021 года.
      Подробные описания, цены, удобное сравнение характеристик курса.
    </div>

    <div class="edvlisting-row">
      <SchoolsSidebar
        @update-filters="updateFilters($event, true)"
      />
      <SchoolsPage
        @update-filters="updateFilters"
        @show-more="showMoreHandler"
        :currentPage="filters.page"
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
        sorting: null,
        searchString: null,
        limit: 20,
      },
    }
  },
  methods: {
    ...mapActions('courses-categories', ['getCategories']),
    ...mapActions('duration', ['getDuration']),
    ...mapActions('education-formats', ['getEducationFormats']),
    ...mapActions('payment-types', ['getPaymentTypes']),
    ...mapActions('schools', ['getSchools', 'loadMore']),

    async updateFilters (updatedFilters, needToRefreshPage = false) {
      if (needToRefreshPage) {
        this.filters.page = 1
      }
      this.filters = { ...this.filters, ...updatedFilters }

      await this.getSchools({ ...this.filters })
    },
    async showMoreHandler (updatedFilters) {
      this.filters = { ...this.filters, ...updatedFilters }

      await this.loadMore({ ...this.filters })
    },
  },
  async fetch () {
    await this.getCategories()
    await this.getDuration()
    await this.getPaymentTypes()
    await this.getEducationFormats()
    await this.getSchools(this.filters)
  },
}
</script>

<style scoped>
.edvlisting-row {
  display: flex;
  align-items: flex-start;
}
</style>
