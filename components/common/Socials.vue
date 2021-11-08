<template>
    <div class="socials">
      <div class="socials-links">
        <a v-if="fb.length" :href="fb" target="_blank" rel="noopener" aria-label="Suivez nous sur facebook" class="socials-link">
          <span class="logo">
            <Facebook/>
          </span>
        </a>
        <a v-if="insta.length" :href="insta" target="_blank" rel="noopener" aria-label="Suivez nous sur instagram" class="socials-link">
          <span class="logo">
            <Instagram/>
          </span>
        </a>
        <a v-if="twitter.length" :href="twitter" target="_blank" rel="noopener" aria-label="Suivez nous sur twitter" class="socials-link">
          <span class="logo">
            <Twitter/>
          </span>
        </a>
      </div>
    </div>
</template>

<script>
  import Facebook from '~/assets/icons/fb.svg'
  import Twitter from '~/assets/icons/twitter.svg'
  import Instagram from '~/assets/icons/instagram.svg'

  export default {
    name: "SocialFooter",
    components: { Facebook, Twitter, Instagram },
    props: {
      fb: {
        type: String,
        default: ''
      },
      insta: {
        type: String,
        default: ''
      },
      twitter: {
        type: String,
        default: ''
      },
    }
  }
</script>

<style scoped lang="scss">
  .socials {
    max-width: 360px;
  }

  .socials-title {
    font-size: 25px;
    margin-bottom: 70px;
    @media #{$lg-down} {
      margin-bottom: 50px;
    }
    @media #{$md-down} {
      // @include fluid-type(20px, 25px);
      margin-bottom: 24px;
    }
  }

  .socials-links {
    display: flex;
    justify-content: space-between;
    @media #{$md-down} {
      width: 220px;
      margin: 0 auto;
    }
    @media #{$sm-down} {
      width: 180px;
    }
  }

  .socials-link {
    display: inline-block;
    padding: 8px;

    &:hover path {
      fill: $orange;
    }

    &:hover .logo:before {
      background-color: rgba(255, 255, 255, .4);
      transform: scale(1.5);
    }
  }

  .logo {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;

    @media #{$md-down} {
      width: 30px;
      height: 30px;
    }

    svg {
      position: relative;
      z-index: 10;
    }

    path {
      fill: white;
      transition: fill .2s ease;
    }

    &:before {
      display: block;
      content: '';
      z-index: 1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
      transform: scale(.5);
      background-color: rgba(255, 255, 255, 0);
      transition: background-color .3s ease, transform .3s ease-out;
    }
  }
</style>