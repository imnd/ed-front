<template>
  <div class="courses-page">
    <div class="courses-page__header">
      <h1 class="courses-page__title">Онлайн-курсы</h1>
      <p class="courses-page__description">
        Список всех онлайн-курсов с рейтингом, отзывами и детальным описанием курса
        2021 года. Для удобства поиска курса используйте фильтры, сортировку, сравнение и поиск.
        Мы обновляем информацию о всех курсах каждую неделю.
      </p>
    </div>

    <div class="courses-page__content">

      <CoursesFilters
        @filters-changed="loadCourses"
        :filters="filters"
      />
      <div class="courses-page__courses-list">
        <ul v-if="courses.length > 0">
          <li
            v-for="course in courses"
            :key="course.id"
          >
            <CourseCard
              :course="course"
              :course-school="getSchoolById(course.school.id)"
            />
          </li>
        </ul>
        <div v-else>
          <p>По Вашему запросу не найдено ни одного курса. Попробуйте изменить условия поиска.</p>
        </div>
      </div>
    </div>

    <div class="courses-page__footer" v-if="courses.length > 0">
      <div class="courses-page__courses-count-info">Показано {{ courses.length }} курсов из {{ coursesCount }}</div>
      <button
        v-if="courses.length < coursesCount"
        class="courses-page__button-show-more"
        @click="loadMoreCourses"
      >
        Показать еще
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import CoursesFilters from '@/components/courses/CoursesFilters'
import CourseCard from '@/components/courses/CourseCard'
import { debounce } from 'throttle-debounce'
import Seo from '@/mixins/Seo'

export default {
  name: 'CoursesList',
  components: { CourseCard, CoursesFilters },
  mixins: [Seo],
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      isLoadingMore: false,
      filters: {
        selectedCategories: [],
        selectedSchools: [],
        selectedDuration: [],
        selectedPaymentTypes: [],
        selectedEducationFormats: [],

        sorting: null,
        searchString: null,
        limit: 20,
      },
      seo: null,
    }
  },
  head () {
    return this.getHeadData(this.seo)
  },
  computed: {
    ...mapState('courses', ['courses', 'coursesCount']),
    ...mapState('courses-categories', ['categories']),
    ...mapState('duration', ['duration']),
    ...mapState('payment-types', ['paymentTypes']),
    ...mapState('education-formats', ['educationFormats']),
    ...mapState('schools', ['schools']),
    ...mapGetters('schools', ['getSchoolById']),
    courseSchool () {
      return this.getSchoolById(this.course.school)
    },
  },
  methods: {
    ...mapActions('courses', ['getCourses', 'loadMore']),
    ...mapActions('courses-categories', ['getCategories']),
    ...mapActions('duration', ['getDuration']),
    ...mapActions('education-formats', ['getEducationFormats']),
    ...mapActions('payment-types', ['getPaymentTypes']),
    ...mapActions('schools', ['getSchools']),
    ...mapActions('breadcrumbs', ['setBreadcrumbs']),

    setCategories (category) {
      if (!category) {
        return
      }

      this.filters.selectedCategories.push(category.id, ...category.subCategories.map(sc => sc.id))
    },

    checkQueryParams () {
      const query = this.$route.query
      const categoriesSlugsString = query.category
      if (categoriesSlugsString) {
        const categoriesSlugs = categoriesSlugsString.split(',')

        this.filters.selectedCategories = this.categories.reduce(
          (result, category) => {
            if (categoriesSlugs.includes(category.slug)) {
              result.push(category.id)
            }

            result.push(...category.subCategories.filter(sc => categoriesSlugs.includes(sc.slug)).map(sc => sc.id))

            return result
          },
          []
        )
      }

      const schoolsSlugsString = query.school
      if (schoolsSlugsString) {
        const schoolsSlugs = schoolsSlugsString.split(',')

        this.filters.selectedSchools = this.schools.reduce((result, school) => {
          if (schoolsSlugs.includes(school.slug)) {
            result.push(school.id)
          }

          return result
        }, [])
      }

      const durationSlugsString = query.duration
      if (durationSlugsString) {
        const durationSlugs = durationSlugsString.split(',')

        this.filters.selectedDuration = this.duration.reduce((result, duration) => {
          if (durationSlugs.includes(duration.slug)) {
            result.push(duration.id)
          }

          return result
        }, [])
      }

      const paymentTypesSlugsString = query.paymenttype
      if (paymentTypesSlugsString) {
        const paymentTypesSlugs = paymentTypesSlugsString.split(',')

        this.filters.selectedPaymentTypes = this.paymentTypes.reduce((result, paymentType) => {
          if (paymentTypesSlugs.includes(paymentType.slug)) {
            result.push(paymentType.id)
          }

          return result
        }, [])
      }

      const educationFormatsSlugsString = query.educationformat
      if (educationFormatsSlugsString) {
        const educationFormatsSlugs = educationFormatsSlugsString.split(',')

        this.filters.selectedEducationFormats = this.educationFormats.reduce((result, educationFormat) => {
          if (educationFormatsSlugs.includes(educationFormat.slug)) {
            result.push(educationFormat.id)
          }

          return result
        }, [])
      }
    },

    updateUrl () {
      const query = {}

      if (this.filters.selectedCategories.length > 0) {
        const categoriesIds = this.categories.map(
          c => [c.id, ...c.subCategories.map(sc => sc.id)].sort().toString()
        )

        if (this.filters.selectedCategories.length === 1) {
          query.category = this.filters.selectedCategories[0]
        } else {
          query.category = this.categories
            .reduce(
              (result, category) => {
                if (this.filters.selectedCategories.includes(category.id)) {
                  result.push(category.slug)
                }

                result.push(
                  ...category.subCategories
                    .filter(subCat => this.filters.selectedCategories.includes(subCat.id))
                    .map(subCat => subCat.slug)
                )

                return result
              },
              []
            )
            .join(',')
        }
      }

      if (this.filters.selectedSchools.length > 0) {
        query.school = this.schools
          .reduce((result, school) => {
            if (this.filters.selectedSchools.includes(school.id)) {
              result.push(school.title)
            }

            return result
          }, [])
          .join(',')
      }

      if (this.filters.selectedDuration.length > 0) {
        query.duration = this.duration
          .reduce((result, duration) => {
            if (this.filters.selectedDuration.includes(duration.id)) {
              result.push(duration.slug)
            }

            return result
          }, [])
          .join(',')
      }

      if (this.filters.selectedPaymentTypes.length > 0) {
        query.paymenttype = this.paymentTypes
          .reduce((result, paymentType) => {
            if (this.filters.selectedPaymentTypes.includes(paymentType.id)) {
              result.push(paymentType.slug)
            }

            return result
          }, [])
          .join(',')
      }

      if (this.filters.selectedEducationFormats.length > 0) {
        query.educationformat = this.educationFormats
          .reduce((result, educationFormat) => {
            if (this.filters.selectedEducationFormats.includes(educationFormat.id)) {
              result.push(educationFormat.slug)
            }

            return result
          }, [])
          .join(',')
      }

      this.$router.push({ path: this.path, query })

      const metaCanonical = document.querySelector('[rel="canonical"]')
      if (metaCanonical) {
        const value = `${window.location.origin}${this.path}${new URLSearchParams(query).toString()}`

        metaCanonical.setAttribute('href', value)
      }
    },

    debounceGetCourses: debounce(500, async function () {
      await this.getCourses(this.filters)
    }),

    async loadCourses (updatedFilters) {
      this.filters = { ...this.filters, ...updatedFilters }

      this.updateUrl()

      await this.debounceGetCourses()
    },

    async loadMoreCourses () {
      this.filters.page++

      this.isLoadingMore = true
      await this.loadMore(this.filters)
      this.isLoadingMore = false
    },
  },
  async fetch () {
    await this.getCategories()
    const categorySlug = this.$route.params.slug
    if (categorySlug) {
      const category = this.categories.find(c => c.slug === categorySlug)
      this.setCategories(category)
      this.seo = this.getSeoData(category.seo, this.$route.fullPath)
    }

    await this.getSchools()
    await this.getDuration()
    await this.getPaymentTypes()
    await this.getEducationFormats()

    this.checkQueryParams()

    await this.getCourses(this.filters)
  },
}
</script>

<style scoped lang="scss">
.courses-page {
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-weight: 500;
  max-width: 1440px;

  &__header {
    margin-bottom: 32px;
  }

  &__description {
    font-size: 18px;
    max-width: 856px;
  }

  &__loader {
    text-align: center;
    transform: scale(0.7);
  }

  &__filters {
    margin-bottom: 32px;
  }

  &__content {
    margin-bottom: 32px;
  }

  &__footer {
    text-align: center;
  }

  &__courses-count-info {
    color: #757575;
    margin-bottom: 20px;
  }

  &__button-show-more {
    background: #FFFFFF;
    border: 1px solid #9B5DE5;
    box-sizing: border-box;
    border-radius: 100px;
    padding: 17px 32px;
    font-weight: 800;
    font-size: 18px;
    line-height: 120%;
    color: #9B5DE5;
    width: 100%;
    @media (min-width: 768px) {
      width: auto;
    }
    cursor: pointer;
    transition: 0.25s ease-in-out;
    outline: none;

    &:hover {
      background-color: #9B5DE5;
      color: #fff;
    }
  }

  &__courses-list {
    margin: 32px 0 0;
    @media (min-width: 1440px) {
      margin: 0;
    }
    padding: 0;

    & ul {
      list-style-type: none;
      padding-left: 0;
    }
  }
}

</style>
