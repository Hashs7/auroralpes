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
                path: 'models/logo-intro.json'
            });

            const tl = new TimelineMax();

            tl.to(this.$refs.logoContainer, .7, {
                height: 100,
                y: -210,
                // backgroundColor: 'transparent'
            });
            tl.delay(3);
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
        max-width: 1000px;
        height: 100%;
        margin: auto;
    }
</style>