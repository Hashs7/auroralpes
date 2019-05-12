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
        props: ['fb', 'insta', 'twitter']
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
        @media #{$xl-down} {
            width: 300px;
        }
        @media #{$xl-down-height} {
            bottom: 100px;
        }
        @media #{$lg-down-height} {
            bottom: 70px;
        }
        @media #{$lg-down} {
            bottom: 180px;
            width: 260px;
        }
        @media #{$md-down} {
            bottom: 210px;
            width: 230px;
        }
        @media #{$sm-down-height} {
            bottom: 140px;
        }
    }

    .logo {
        display: block;
        width: 50px;
        height: 50px;
        @media #{$md-down} {
            width: 40px;
            height: 40px;
        }
        @media #{$sm-down} {
            width: 32px;
            height: 32px;
        }

        svg {
            fill: $secondary;
            width: 100%;
            height: 100%;
            transition: fill .3s ease;
        }

        &:hover svg {
            fill: $secondary-light;
        }
    }
</style>
