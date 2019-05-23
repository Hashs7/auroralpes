<template>
    <footer class="social-footer">
        <div class="social-container">
            <h3 class="social-title">Suivez nos aventures :</h3>

            <div class="social-links">
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
        </div>
    </footer>
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
    .social-footer {
        display: flex;
        height: 312px;
        color: white;
        background-color: $secondary-dark;
        text-align: center;
    }
    .social-title {
        font-size: 25px;
        margin-bottom: 70px;
    }
    .social-container {
        margin: auto;
        width: 360px;
    }
    .social-links {
        display: flex;
        justify-content: space-between;
    }
    .logo {
        display: block;
        width: 50px;
        height: 50px;
        path {
            fill: white;
        }
    }
</style>