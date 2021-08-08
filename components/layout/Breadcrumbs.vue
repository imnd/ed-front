<template>
  <div v-if="breadcrumbs.length" class="breadcrumbs">
    <span v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.href">
      <span>
        <a v-if="typeof breadcrumb.href !== undefined" class="breadcrumbs__link" :href="breadcrumb.href">
          <span>{{ breadcrumb.title }}</span>
        </a>
        <span v-else> {{ breadcrumb.title }}</span>
      </span>
      <span class="breadcrumbs__separator" v-if="index + 1 < breadcrumbs.length"> / </span>
    </span>
  </div>
</template>

<script>
import { mapGetters, } from 'vuex'

export default {
  name: 'Breadcrumbs',
  data () {
    return {
      breadcrumbs: []
    }
  },
  computed: {
    ...mapGetters('breadcrumbs', ['getBreadcrumbs']),
  },
  created () {
    this.breadcrumbs = this.getBreadcrumbs()
  }
}
</script>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  margin-top: 40px;
  margin-left: 70px;

  &__separator, &__link {
    font-size: 14px;
    font-weight: 500;
    color: #9b5de5;
  }

  &__link {
    margin: 0;
  }
}
</style>
