<template>
    <section class="entry-video">
        <div class="entry-logo">
            <Logo ref="logo" />
        </div>
        <iframe title="Vidéo teaser du festival AurorAlpes" class="ytplayer" type="text/html" width="720" height="405"
                :src="ytLink"
                frameborder="0" allowfullscreen></iframe>

        <div class="btn-rocket"
             ref="rocket"
             @mouseover="rocketOver"
             @mouseleave="rocketLeave"
             v-scroll-to="{
                 el: '#EventSection',
                 duration: 700,
                 easing: 'ease-in-out',
                 force: true,
                 cancelable: true,
                 // onStart: onStart,
                 // onDone: onDone,
                 // onCancel: onCancel,
                 x: false,
                 y: true
             }">
            <Rocket />
        </div>
    </section>
</template>

<script>
    import Rocket from '~/assets/icons/rocket.svg'
    import Logo from '~/assets/icons/aurorales-logo-white.svg'
    import {TimelineMax, default as TweenMax} from "gsap";

    const rocket = new TimelineMax({pause: true});


    export default {
        name: "EntryVideo",
        components: { Rocket, Logo },
        props: ['link'],
        computed: {
            ytLink() {
                const link = this.link.split('watch?v=');
                // console.log('?autoplay=1loop=1&rel=0');
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

            tl.from(this.$refs.logo, .5, {
                y: -200,
                // backgroundColor: 'transparent'
            });
            tl.delay(6);
            tl.from(this.$refs.rocket, .7, {
                y: 200,
                // backgroundColor: 'transparent'
            });

            rocket.add(
                TweenMax.to(eventSection, .3, {
                    y: 20,
                })
            );
            rocket.add(
                TweenMax.to(this.$refs.rocket, .3, {
                    y: 20,
                })
            );
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
        @media #{$lg-down} {
            height: calc(100vh - 100px);
        }
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
    }
    .btn-rocket {
        cursor: pointer;
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