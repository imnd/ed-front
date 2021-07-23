<template>
  <footer>
    <div class="container">
      <div class="info">
        <div class="ogrn">ООО Эдвизор, ОГРН 1234567890</div>
        <a href="mailto:info@edvisor.ru" class="mail">info@edvisor.ru</a>
      </div>
      <div class="links">
        <a href="#">Пользовательское соглашение</a>
        <a href="#">Политика конфиденциальности</a>
        <div class="copy">© Edvisor, 2021</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterDefault'
}
</script>

<style scoped lang="scss">
footer {
  padding: 23px 0;
  color: #ffffff;
  background: #333333;
  margin-top: 80px;

  .container {
    display: flex;
    justify-content: space-between;

    .info {
      .ogrn {
        margin-bottom: 12px;
      }

      .mail {
        color: #ffffff;
      }
    }

    .links {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 32px;

      a {
        color: #ffffff;
      }
    }
  }
}
</style>
