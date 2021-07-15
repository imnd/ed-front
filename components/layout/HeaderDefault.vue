<template>
  <div class="header">
    <div class="container">
      <Logo/>
      <MenuTop/>
    </div>
  </div>
</template>

<script>
import MenuTop from '../MenuTop'

export default {
  name: 'Default-header',
  components: { MenuTop }
}
</script>

<style scoped lang="scss">
$header-padding-lr: 0px;
$header-mobile-padding-lr: 15px;
$header-padding-tb: 21px;
$header-shadow: 0px 2px 20px rgb(0 0 0 / 10%);

.header {
  padding: $header-padding-tb $header-padding-lr;
  box-shadow: $header-shadow;
  position: sticky;
  top: 0;
  background-color: $header-bg-color;
  z-index: 10000;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .header {
    padding: $header-padding-tb $header-mobile-padding-lr;
  }
}

</style>
