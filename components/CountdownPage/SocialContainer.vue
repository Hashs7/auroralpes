<template>
  <div class="social-container">
    <a :href="fb" aria-label="Suivez nous sur facebook" class="social-link">
      <span class="logo">
        <Facebook/>
      </span>
    </a>
    <a :href="insta" aria-label="Suivez nous sur instagram" class="social-link">
      <span class="logo">
        <Instagram/>
      </span>
    </a>
    <a :href="twitter" aria-label="Suivez nous sur twitter" class="social-link">
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
    components: {Facebook, Twitter, Instagram},
    props:['fb', 'insta', 'twitter']
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
