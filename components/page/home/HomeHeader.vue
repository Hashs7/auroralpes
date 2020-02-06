<template>
  <div class="header--home">
    <IlluLeft class="header__illu-left" />
    <Logo class="header__logo" />
  </div>
</template>

<script>
  import Logo from '~/assets/icons/aurorales-logo-white.svg';
  import IlluLeft from '~/assets/icons/home/illu-home-left.svg';

  export default {
    name: "HomeHeader",
    components: {
      Logo,
      IlluLeft,
    },
  }
</script>

<style lang="scss" scoped>
  .header--home {
    position: relative;
    height: calc(100vh - 130px);
    background-color: $secondary-background;
  }
  .header__logo {
    display: block;
    width: 335px;
    padding-top: 310px;
    margin: auto 20% auto auto;
  }
  .header__illu-left {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 790px;
    max-height: 854px;
    height: 60vw;
    svg {
      vertical-align: top;
    }
  }
  .header__illu-right {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 868px;
    max-height: 472px;
    height: 40vw;
    svg {
      vertical-align: top;
    }
  }
</style>