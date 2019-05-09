<template>
  <div class="logo-container">
    <div>
      <img :src="logoAuro" alt="" class="logo-auro">
      <span class="logo-auro__txt">Des étoiles dans les yeux</span>
    </div>
    <span class="cross">
      <Cross />
    </span>
    <div>
      <img :src="logoMondes" alt="" class="logo-mondes">
    </div>
  </div>
</template>

<script>
  import Cross from '~/assets/icons/cross.svg'

  export default {
        name: "LogoContainer",
        props: ['logoAuro', 'logoMondes'],
        components: { Cross }
    }
</script>

<style scoped lang="scss">
  .logo-container {
    position: absolute;
    top: 170px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    margin: auto;
  }
  .logo-auro {
    width: 230px;
    height: auto;
  }
  .logo-auro__txt {
    display: block;
    font-weight: bold;
    color: $primary;
  }
  .cross {
    width: 28px;
    height: 28px;
  }
  .logo-mondes {
    width: 208px;
  }
</style>
