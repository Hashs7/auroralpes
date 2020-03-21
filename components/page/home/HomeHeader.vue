<template>
  <div class="header--home">
    <Logo class="header__logo" />
    <canvas ref="canvas" width="300" height="650" />
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
    position: relative;
    height: 100vh;
  }
  .header__logo {
    display: block;
    width: 335px;
    padding-top: 310px;
    margin: auto 20% auto auto;
  }
</style>