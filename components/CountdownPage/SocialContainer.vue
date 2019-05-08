<template>
  <div class="social-container">
    <a href="#" class="social-link">
      <span class="logo">
        <Facebook/>
      </span>
    </a>
    <a href="#" class="social-link">
      <span class="logo">
        <Instagram/>
      </span>
    </a>
    <a href="https://twitter.com/Auroralpes" class="social-link">
      <span class="logo">
        <Twitter/>
      </span>
    </a>
  </div>
</template>

<script>
  import Facebook from '~/assets/icons/fb.svg'
  import Twitter from '~/assets/icons/twitter.svg'
  import Instagram from '~/assets/icons/instagram.svg'

  export default {
    name: "SocialContainer",
    components: {Facebook, Twitter, Instagram}
  }
</script>

<style lang="scss">
  .social-container {
    position: absolute;
    bottom: 130px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    max-width: 460px;
    margin: 0 auto;
  }
  .logo {
    display: block;
    width: 50px;
    height: 50px;
    & svg {
      fill: $primary;
      width: 100%;
      height: 100%;
    }
  }
</style>
