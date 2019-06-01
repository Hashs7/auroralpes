<template>
    <div class="intro" ref="logoContainer">
        <div class="intro-logo" ref="logoAnim"></div>
    </div>
</template>

<script>
    import bodymovin from 'lottie-web'
    import { TimelineMax } from 'gsap';

    export default {
        name: "Intro",
        mounted() {

            const anim = bodymovin.loadAnimation({
                container: this.$refs.logoAnim,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: window.origin + '/models/logo-intro.json'
            });

            const tl = new TimelineMax();

            tl.to(this.$refs.logoContainer, .8, {
                height: 0,
                // backgroundColor: 'transparent'
            });
            tl.delay(5);
        },
    }
</script>

<style scoped>
    .intro {
        display: flex;
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
        height: 100vh;
        background-color: white;
    }
    .intro-logo {
        max-width: 300px;
        width: 35%;
        height: 100%;
        margin: auto;
    }
</style>