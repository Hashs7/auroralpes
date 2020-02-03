<template>
    <div class="social-entry">
        <div class="social-container">
            <div class="social-links">
                <a :href="fb" target="_new" aria-label="Suivez nous sur facebook" class="social-link">
                  <span class="logo">
                    <Facebook/>
                  </span>
                </a>
                <a :href="insta" target="_new" aria-label="Suivez nous sur instagram" class="social-link">
                  <span class="logo">
                    <Instagram/>
                  </span>
                </a>
                <a :href="twitter" target="_new" aria-label="Suivez nous sur twitter" class="social-link">
                  <span class="logo">
                    <Twitter/>
                  </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Facebook from '~/assets/icons/fb.svg'
    import Twitter from '~/assets/icons/twitter.svg'
    import Instagram from '~/assets/icons/instagram.svg'

    export default {
        name: "SocialFooter",
        components: {Facebook, Twitter, Instagram},
        props: ['fb', 'insta', 'twitter']
    }
</script>

<style scoped lang="scss">
    .social-entry {
        position: absolute;
        right: 100px;
        bottom: 20px;
        display: flex;
        width: 250px;
        text-align: center;
        @media #{$lg-down} {
            left: 0;
            right: 0;
            margin: auto;
            bottom: 100px
        }
        @media #{$sm-down} {
            bottom: 70px
        }
    }
    .social-title {
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
    .social-container {
        margin: auto;
        max-width: 360px;
        width: 100%;
    }
    .social-links {
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
    .social-link {
        padding: 8px;
        &:hover path {
            fill: $teal;
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
            top: 0; bottom: 0;
            left: 0; right: 0;
            border-radius: 50%;
            transform: scale(.5);
            background-color: rgba(255, 255, 255, 0);
            transition: background-color .3s ease, transform .3s ease-out;
        }

    }
</style>