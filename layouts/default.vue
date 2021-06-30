<template>
  <div>
    <DefaultHeader/>
    <Nuxt/>
    <FooterDefault/>
  </div>
</template>

<script>

import DefaultHeader from "../components/layout/HeaderDefault";
import FooterDefault from "../components/layout/FooterDefault";
export default {
  name: "default",
  components: {FooterDefault, DefaultHeader},
}
</script>

<style scoped>

</style>
