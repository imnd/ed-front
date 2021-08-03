<template>
  <div class="wrapper">
    <HeaderDefault />
    <Breadcrumbs />
    <main class="main">
      <Nuxt />
    </main>
    <FooterDefault />
  </div>
</template>

<script>
import HeaderDefault from '../components/layout/HeaderDefault'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import FooterDefault from '../components/layout/FooterDefault'

export default {
  name: 'default',
  components: { FooterDefault, HeaderDefault, Breadcrumbs },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}
</style>
