<template>
  <div class="header--home">
    <div class="header__logo">
      <Logo />
    </div>
  </div>
</template>

<script>
  import Logo from '~/assets/icons/aurorales-logo-white.svg';

  export default {
    name: "HomeHeader",
    components: {
      Logo,
    },
  }
</script>

<style lang="scss" scoped>
  .header--home {
    height: calc(100vh - 130px);
    background-color: $secondary-background;
  }
  .header__logo {
    display: block;
    width: 335px;
  }
</style>