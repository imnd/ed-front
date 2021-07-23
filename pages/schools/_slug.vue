<template>
  <div class="edv-object middle-container">
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
        <component :is="currentTabComponent" :school="school"/>
      </div>
    </div>
    <div class="objectlogo">
      <img v-if="school.logo" :src="school.logo"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Reviews from '@/components/schools/tabs/Reviews'
import About from '@/components/schools/tabs/About'
import PhotoAndVideo from '@/components/schools/tabs/PhotoAndVideo'
import SchoolCard from '@/components/schools/SchoolCard'

/*import axios from 'axios';*/

export default {
  components: { Reviews, About, PhotoAndVideo, SchoolCard },
  /*async fetch() {
    // await this.getSchool(this.$route.params.slug);

    try {
      const slug = this.$route.params.slug
      const { data: school } = await axios.get(`/schools/${slug}`);
      this.school = school;
      commit('setState', {
        key:  'school',
        value: school
      });
    } catch (error) {
      console.error(error);
      return false;
    }
  },*/
  /*async asyncData({route, params}) {
    try {
      const { data: school } = await axios.get(`/schools/${params.slug}`);
      return { school };
    } catch (error) {
      console.error(error);
      return false;
    }
  },*/
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
  computed: {
    ...mapState('schools', ['school', 'reviews']),
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
  async created () {
    await this.getSchool(this.$route.params.slug)
  },
}
</script>
