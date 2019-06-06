<template>
    <section class="event-section"
             id="EventSection"
             v-infocus="'enter'"
             >
        <div class="lmdh-logo"  >
            <img src="~/assets/img/lmdh-logo.png" alt="">
<!--            <LMDH />-->
        </div>

        <div class="stars-container stars-back" v-parallax="0.1">
            <StarBack ></StarBack>
        </div>
        <div class="stars-container stars-mid" v-parallax="0.15">
            <StarMid ></StarMid>
        </div>
        <div class="stars-container stars-front" v-parallax="0.2">
            <StarFront ></StarFront>
        </div>

        <div class="event-content o-container">
            <div class="trail" ref="trail">
                <Trail />
            </div>

            <div class="event-description">
                <div class="title-container" v-infocus="'showTitle'">
                    <h2 class="title">{{title}}</h2>
                    <div class="circle-container">
                        <span class="circle" v-for="i in 4" :key="i" ref="child"></span>
                    </div>
                </div>

                <p v-for="(p, i) in content" :key="i" >
                    <span v-for="(pa, j) in p.content" :key="j">
                        <strong v-if="pa.marks.length">{{pa.value}}</strong>
                        <template v-else>{{pa.value}}</template>
                    </span>
                </p>
            </div>
            <div class="event-support">
                <a :href="link" class="btn-event">
                    <RippleButton name="Soutenir le festival" :bgDark="true"/>
                </a>
                <span class="Kkbb">
                    <Kkbb />
                </span>
            </div>
        </div>
        <span class="wave wave-up">
            <WaveUp />
        </span>
    </section>
</template>

<script>
    import Kkbb from '~/assets/icons/kkbb.svg'
    import LMDH from '~/assets/icons/lmdh.svg'
    import StarBack from '~/assets/icons/stars-back.svg'
    import StarMid from '~/assets/icons/stars-mid.svg'
    import StarFront from '~/assets/icons/stars-front.svg'
    import WaveUp from '~/assets/icons/wave-up.svg'
    import Trail from '~/assets/icons/trail.svg'
    import {TimelineMax, default as TweenMax} from "gsap";
    import RippleButton from '@/components/UI/RippleButton';


    const tl = new TimelineMax({
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.05
    });

    export default {
        name: "EventSection",
        props: ['eventDesc', 'link'],
        components: { Kkbb, LMDH, RippleButton, WaveUp, Trail, StarBack, StarMid, StarFront },
        computed: {
            title() {
                const title = this.eventDesc.content.find(el => el.nodeType.includes('heading-'));
                return title.content[0].value;
            },
            content() {
                return this.eventDesc.content.filter(el => el.nodeType.includes('paragraph'));
            },
            background() {
                return 'background-image: url(../img/stars.svg)';
            }
        },
        methods: {
          hoverTitle(isIn) {
              if(isIn) {
                  tl.play();
                  return
              }
              tl.pause();
              tl.startTime(0);
              console.log(isIn);
          }
        },
        mounted() {
            console.log(this.eventDesc.content);
            tl.staggerFromTo(
                this.$refs.child,   //target (all span tags)
                0.5,     //duration (0.5 seconds)
                {x:0},
                {x:1000},
                -0.15    //stagger amount (seconds between each start time)
            );
            TweenMax.from(this.$refs.trail, 1, {
                y: 1000,
            })
        }
    }
</script>

<style lang="scss">
    .event-section {
        position: relative;
        font-size: 20px;
        font-weight: $weight-medium;
        padding: 80px 0 0 0;
        color: white;
        background-color: $secondary-dark;
        overflow: hidden;
        background-size: cover;
        background-position: center;

        @media #{$md-down} {
            @include fluid-type(16px, 20px);
            padding: 120px 0 0 0;
        }
    }
    .event-content {
        z-index: 10;
    }
    .stars-container {
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        svg {
            height: 100%;
        }
    }
    .event-description {
        width: calc(100% - 490px);
        margin: 0 auto 0 0;

        p { margin-top: 0 }

        @media #{$xll-down} {
            width: 70%;
        }
        @media #{$md-down} {
            width: 100%;
        }
    }
    .lmdh-logo {
        z-index: 10;
        position: absolute;
        top: 30px;
        right: 0;
        max-width: 784px;
        min-width: 260px;
        min-height: 230px;
        width: 55vw;
        height: auto;
        img { width: 100%}

        @media #{$xll-down} {
            right: -10vw;
        }

        @media #{$md-down} {
            top: -9vw;
            right: -62px;
        }
    }
    .title-container {
        position: relative;
        display: inline-block;
        margin-bottom: 40px;
        overflow: hidden;
        @media #{$md-down} {
            margin-bottom: 26px;
        }
        .circle-container {
            transition: opacity .3s ease;
            opacity: 0;
        }
        &.showTitle .circle-container{
            opacity: 1;
        }
    }
    .title {
        display: inline-block;
        color: $teal;
    }
    .circle-container {
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100vw;
        transform: translateX(-50%);

        @media #{$md-down} {
            width: 200vw;
            bottom: -8px;
        }
    }
    .circle{
        display: inline-block;
        width: 100px;
        height: 4px;
        background-color: $teal;
        margin-right: 10px;
    }
    .event-support {
        margin-top: 68px;
        @media #{$md-down} {
            text-align: center;
            margin-top: 40px;
        }
    }
    .btn-event {
        display: inline-block;
        vertical-align: middle;
        position: relative;
        z-index: 40;
    }
    .Kkbb {
        display: inline-block;
        height: 54px;
        margin-left: 64px;
        vertical-align: middle;

        @media #{$md-down} {
            display: block;
            width: auto;
            height: 36px;
            margin: 20px 0 0 0;
        }

        @media #{$sm-down} {
            height: 26px;
        }

        svg {
            height: 100%;
        }
    }
    .trail {
        position: absolute;
        top: 116px;
        left: -64px;
        width: 22px;
    }
    /*.enter #lmdh-circle-container {
        transform: scale(1);
        opacity: 1;
    }*/
    #lmdh-circle-container {
        /*opacity: 0;*/
        transform-origin: right;
        /*transform: scale(.7);*/
        transition: transform .5s ease, opacity .3s ease;
        @media #{$md-down} {
            opacity: 0 !important;
        }
    }
    strong {
        font-weight: $weight-black;
    }
</style>