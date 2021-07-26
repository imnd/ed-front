<template>
  <div class="container edvlisting listing-page">
    <h1>Все категории онлайн-курсов IT и Digital</h1>
    <div class="container">
      <div class="content-withe">
        <div class="groups-crosslinks-wrapper">
          <div
            v-for="category in categories"
            :key="category.id"
            class="group-holder"
          >
            <p class="group-title">
              <a :href="`/courses/${category.slug}/`">
                <img :src="category.icon" />
                <span>{{ category.title }}</span>
              </a>
            </p>

            <ul
              class="categories-list"
              :class="isCategoryFolded(category) && 'categories-list_folded'"
            >
              <li
                v-for="subCategory in category.subCategories"
                :key="subCategory.id"
                class="categories-list__item"
              >
                <a
                  :title="`${subCategory.title}`"
                  :href="`/courses/${category.slug}/${subCategory.slug}/`"
                >
                  {{ subCategory.title }}
                </a>
              </li>
            </ul>

            <p
              class="toggle"
              v-on:click="foldUnfoldCategory(category)"
              :data-category="`${category.id}`"
              data-prev-text="Свернуть"
            >
              {{ isCategoryFolded(category) ? 'Показать еще...' : 'Свернуть' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  head: {
    title: 'Все категории онлайн-курсов it и Digital тематик',
  },
  data() {
    return {
      unfoldedCategories: [],
    }
  },
  computed: {
    ...mapState('courses-categories', ['categories']),
    ...mapGetters('courses-categories', ['getCategoryById']),
  },
  methods: {
    ...mapActions('courses-categories', ['getTopCategories']),
    foldUnfoldCategory(category) {
      if (this.isCategoryFolded(category)) {
        this.unfoldedCategories.push(category.id)
      } else {
        this.unfoldedCategories = this.unfoldedCategories.filter(
          id => id !== category.id
        )
      }
    },
    isCategoryFolded(category) {
      return !this.unfoldedCategories.includes(category.id)
    },
  },
  serverPrefetch() {
    return this.$store.dispatch('courses-categories/getTopCategories')
  },
}
</script>

<style>
.middle-container {
  padding-top: 0;
  padding-left: 17px;
}

.edvlisting.listing-page {
  margin-top: 60px;
}

.edvlisting.listing-page h1 {
  padding-bottom: 40px;
  font-weight: 700;
  font-size: 32px;
  color: #333333;
}

.categories-list_folded .categories-list__item:nth-child(n + 6) {
  display: none;
}
</style>
