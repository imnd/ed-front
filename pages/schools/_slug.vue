<template>
  <div class="container edv-object">
    <div class="content-edv-object">
      <h1 class="object-title">{{ school.title }}</h1>
      <h1 class="object-title">{{ school.post_title }}</h1>

      <ul class="tags">
        <li
          v-for="category in school.categories"
          :key="category.id"
        >
          {{ category.title }}
        </li>
      </ul>

      <div class="text-object">
        <p>{{ school.shortDescription || '' }}</p>
      </div>

      <div class="buttons-object">
        <a :href="`${school.link}`" target="_blank" class="btn-feo-arrow btn-feo">На сайт школы</a>
        <!--<a :href="`${redirectUrl}${school.id}`" target="_blank" class="btn-feo-arrow btn-feo">На сайт школы</a>-->
      </div>

      <div class="scroll-nav">
        <ul class="nav nav-tabs">
          <li
            v-for="(tab, index) in tabs"
            :key="index"
          >
            <a
              href="#"
              :class="{ active: activeTab === tab.title }"
              @click.prevent="activeTab = tab.title"
            >{{ tab.title }}</a>
          </li>
        </ul>
      </div>

      <div class="tab-content">
        <component :is="currentTabComponent" :school="school" />
      </div>
    </div>
    <div class="objectlogo">
      <img v-if="school.logo" :src="school.logo" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Reviews from '@/components/schools/tabs/Reviews'
import About from '@/components/schools/tabs/About'
import PhotoAndVideo from '@/components/schools/tabs/PhotoAndVideo'
import SchoolCard from '@/components/schools/SchoolCard'

import axios from 'axios'

export default {
  components: { Reviews, About, PhotoAndVideo, SchoolCard },
  data () {
    return {
      tabs: [
        { title: 'Отзывы', component: 'Reviews' },
        { title: 'О школе', component: 'About' },
        { title: 'Фото и видео', component: 'PhotoAndVideo' },
      ],
      activeTab: 'Отзывы',
    }
  },
  async fetch () {
    await this.getSchool(this.$route.params.slug)
  },
  computed: {
    ...mapState('schools', ['school']),
    currentTabComponent () {
      const currentTab = this.tabs.find(tab => tab.title === this.activeTab)

      return currentTab ? currentTab.component : this.tabs[0].component
    },
    redirectUrl () {
      return process.env.redirectUrl + this.school.id
    },
  },
  methods: {
    ...mapActions('schools', ['getSchool']),
  },
}
</script>
