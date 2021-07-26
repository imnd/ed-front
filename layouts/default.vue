<template>
  <div class="wrapper">
    <DefaultHeader />
    <main class="main">
      <Nuxt />
    </main>
    <FooterDefault />
  </div>
</template>

<script>
import DefaultHeader from '../components/layout/HeaderDefault'
import FooterDefault from '../components/layout/FooterDefault'
export default {
  name: 'default',
  components: { FooterDefault, DefaultHeader },
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
