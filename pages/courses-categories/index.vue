<template>
  <div class="container">
    <div class="top_h1_text">
      <h1 class="top-h1">Все категории онлайн-курсов IT и Digital</h1>
    </div>

    <div class="content-withe">
      <div class="groups-crosslinks-wrapper">
        <div
          v-for="category in topCategories"
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
                :href="`/courses/${subCategory.slug}/`"
              >
                {{ subCategory.title }}
              </a>
            </li>
          </ul>

          <p
            class="toggle"
            v-on:click="foldUnfoldCategory(category)"
            v-if="category.subCategories.length > 6"
            :data-category="`${category.id}`"
            data-prev-text="Свернуть"
          >
            {{ isCategoryFolded(category) ? 'Показать еще...' : 'Свернуть' }}
          </p>
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
  data () {
    return {
      cdnUrl: process.env.cdnUrl,
      unfoldedCategories: [],
    }
  },
  computed: {
    ...mapState('courses-categories', ['topCategories']),
    ...mapGetters('courses-categories', ['getCategoryById']),
  },
  methods: {
    ...mapActions('courses-categories', ['getTopCategories']),
    foldUnfoldCategory (category) {
      if (this.isCategoryFolded(category)) {
        this.unfoldedCategories.push(category.id)
      } else {
        this.unfoldedCategories = this.unfoldedCategories.filter(
          id => id !== category.id
        )
      }
    },
    isCategoryFolded (category) {
      return !this.unfoldedCategories.includes(category.id)
    },
  },
  async fetch () {
    await this.getTopCategories()
  },
}
</script>

<style scoped lang="scss">

.content-withe {
  background: #ffffff;
  padding-bottom: 10px;
  margin-bottom: 50px;
  width: 100%;
}

.groups-crosslinks-wrapper {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  & .group-title {
    margin-bottom: 20px;

    & a {
      display: flex;
      align-items: center;
      min-height: 70px;

      & img {
        width: 64px;
      }
    }

    & span {
      width: calc(100% - 84px);
      display: block;
      font-weight: 500;
      font-size: 18px;
      color: #000000;
      margin-left: 20px;
    }
  }

  & .group-holder {
    width: calc(25% - 15px);
    margin-bottom: 32px;
    line-height: 18px;
    font-size: 13px;
    margin-right: 15px;

    & .group-title a {
      color: #208dd7;
    }

    & ul {
      list-style: none;
      padding-left: 0;
      margin: 0;

      & li {
        margin-bottom: 8px;

        & a {
          color: #333333;
          font-weight: 500;
          font-size: 12px;
          background: rgba(166, 206, 255, 0.25);
          border-radius: 25px;
          padding: 4px 16px;
          display: inline-block;
          transition: all 0.4s;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 250px;
          overflow: hidden;
        }

        &.hidden {
          display: none;
        }
      }
    }

    & .toggle {
      margin: 0 0;
      text-decoration: none;
      cursor: pointer;
      font-size: 12px;
      color: #333;
      padding: 4px 16px;
      display: inline-block;
      border: 1px solid #208DD7;
      border-radius: 25px;
      transition: all 0.4s;
    }
  }

}

.categories-list_folded .categories-list__item:nth-child(n + 6) {
  display: none;
}
</style>
