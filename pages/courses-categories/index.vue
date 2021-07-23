<template>
  <div class="container edvlisting listing-page middle-container">
    <h1>Все категории онлайн-курсов IT и Digital</h1>

    <div class="container" v-if="!isLoading">
      <div class="content-withe">
        <div class="groups-crosslinks-wrapper">
          <div
            v-for="category in categories"
            :key="category.id"
            class="group-holder"
          >
            <p class="group-title">
              <a :href="`/courses/${category.slug}/`">
                <img :src="`${cdnUrl}/${category.icon}`">
                <span>{{ category.title }}</span>
              </a>
            </p>

            <ul>
              <li
                v-for="(subCategory, index) in category.subCategories"
                :key="subCategory.id"
                :class="subCategory.hidden ? 'hidden' : ''"
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
              v-on:click="showMore"
              :data-category="`${category.id}`"
              data-prev-text="Свернуть"
            >
              Показать еще...
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
  data () {
    return {
      isLoading: true,
      cdnUrl: '',
    }
  },
  computed: {
    ...mapState('courses-categories', ['categories']),
    ...mapGetters('courses-categories', ['getCategoryById']),
  },
  methods: {
    ...mapActions('courses-categories', ['getTopCategories']),
    showMore (event) {
      const catId = event.target.getAttribute('data-category')
      let category = this.getCategoryById(catId)
      for (let j in category.subCategories) {
        category.subCategories[j].hidden = false
      }
      console.log(this.categories)
    },
  },
  async created () {
    this.cdnUrl = process.env.cdnUrl
    await this.getTopCategories()
    for (let i in this.categories) {
      let category = this.categories[i]
      for (let j in category.subCategories) {
        let subCategory = category.subCategories[j]
        subCategory.hidden = j > 5
      }
    }
    this.isLoading = false
    console.log(this.categories)
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

</style>
