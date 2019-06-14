<template>
    <section class="entry-video">
        <div class="entry-logo">
            <Logo ref="logo" />
        </div>
        <iframe title="Vidéo teaser du festival AurorAlpes"
                class="ytplayer"
                type="text/html"
                width="720"
                height="405"
                :src="ytLink"
                frameborder="0" allowfullscreen>
        </iframe>

        <SocialEntry :fb="fb" :insta="insta" :twitter="twitter"/>

        <div class="btn-rocket"
             @mouseover="rocketOver"
             @mouseleave="rocketLeave"
             @click="rocketLeave"
             v-scroll-to="{
                 el: '#EventSection',
                 duration: 700,
                 easing: 'ease-in-out',
                 force: true,
                 cancelable: true,
                 x: false,
                 y: true
             }"></div>

        <div class="container-rocket"
             ref="rocket">
            <Rocket />
        </div>
    </section>
</template>

<script>
    import Rocket from '~/assets/icons/rocket.svg'
    import Logo from '~/assets/icons/aurorales-logo-white.svg'
    import SocialEntry from '~/components/Teaser/SocialEntry'
    import {TimelineMax, default as TweenMax} from "gsap";

    const rocket = new TimelineMax({paused: true});


    export default {
        name: "EntryVideo",
        components: { Rocket, Logo, SocialEntry },
        props: ['link', 'fb', 'insta', 'twitter'],
        computed: {
            ytLink() {
                const link = this.link.split('watch?v=');
                return link[0] + 'embed/' + link[1] + '?loop=1&rel=0';
            }
        },
        methods: {
            rocketOver() {
                rocket.play();
            },
            rocketLeave() {
                rocket.reverse();
            }
        },
        mounted() {
            const eventSection = document.querySelector('.event-section');

            const tl = new TimelineMax();

            rocket.fromTo(eventSection, .3, {
                y: 0,
            },{
                y: -20,
            });
            rocket.fromTo(this.$refs.rocket, .3, {
                y: 0,
            },{
                y: -20,
            }, 0);

            tl.from(this.$refs.logo, .7, {
                y: -200,
            });
            tl.delay(4);
            tl.from(this.$refs.rocket, .7, {
                y: 200,
            });

        }
    }
</script>

<style lang="scss">
    .entry-video {
        position: relative;
        display: flex;
        height: 100vh;
        background: linear-gradient(270deg, #ff226e, #fcac27);
        background-size: 400% 400%;
        -webkit-animation: AnimationName 20s ease infinite;
        -moz-animation: AnimationName 20s ease infinite;
        animation: AnimationName 20s ease infinite;

        /*@media screen and (-webkit-min-device-pixel-ratio:0) {
            @media #{$lg-down} {
                height: calc(100vh - 100px);
            }
        }*/
    }
    .entry-logo {
        position: absolute;
        top: 16px;
        left: 0;
        right: 0;
        margin: auto;
        width: 140px;
        height: 90px;
        svg {
            width: 100%;
            height: 100%;
        }
        @media #{$xxs-down-height} {
            top: 5px;
            height: 45px;
        }
    }
    .btn-rocket {
        width: 140px;
        height: 90px;
        cursor: pointer;
        z-index: 10;
        position: absolute;
        bottom: -20px;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 70px;
    }
    .container-rocket {
        z-index: 1;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100px;
        svg {
            vertical-align: bottom;
        }
    }
    .ytplayer {
        margin: auto;
        width: 90%;
        height: 50.625vw;
        max-height: calc(100vh - 226px);

        @media #{$md-down} {
            width: 100%;
            height: 56.25vw;
        }

        @media #{$xxs-down-height} {
            height: 60vw;
            max-height: calc(100vh - 116px);
        }
    }

    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
</style>