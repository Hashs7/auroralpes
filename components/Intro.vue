<template>
    <div class="intro" ref="logoContainer">
        <div class="intro-logo" ref="logoAnim"></div>
    </div>
</template>

<script>
    import bodymovin from 'lottie-web'
    import { TimelineMax } from 'gsap';
    const tl = new TimelineMax();

    export default {
        name: "Intro",
        props: ['counter'],
        methods: {
            removeLayer(delay = false) {
                tl.to(this.$refs.logoContainer, .8, {
                    height: 0,
                    // backgroundColor: 'transparent'
                });
                if(delay) {
                    tl.delay(3.4);
                }
            }
        },
        mounted() {
            const anim = bodymovin.loadAnimation({
                container: this.$refs.logoAnim,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: window.origin + '/models/logo-intro-for-back.json'
            });

            this.removeLayer(true)
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
        color: #2e317a
    }
    .intro-logo {
        max-width: 300px;
        width: 35%;
        height: 100%;
        margin: auto;
    }
</style>