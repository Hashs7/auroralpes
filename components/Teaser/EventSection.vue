<template>
    <section class="event-section">
        <div class="event-content o-container">
            <div class="event-description">
                <div class="title-container" @mouseover="hoverTitle(true)" @mouseleave="hoverTitle(false)">
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
                <a :href="link" class="btn btn-primary">Soutenir le festival</a>
                <span class="ulule">
                    <Ulule />
                </span>
            </div>
        </div>
    </section>
</template>

<script>
    import Ulule from '~/assets/icons/ulule.svg'
    import {TimelineMax} from "gsap";

    const tl = new TimelineMax({
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.05 //delay the repeat by 0.05 seconds so that it's a total of 1 second long (last stagger is delayed 0.45 seconds, and the tween is 0.5 seconds long = 0.95 seconds total)
    });



    export default {
        name: "EventSection",
        props: ['eventDesc', 'link'],
        components: { Ulule },
        computed: {
            title() {
                const title = this.eventDesc.content.find(el => el.nodeType.includes('heading-'));
                return title.content[0].value;
            },
            content() {
                return this.eventDesc.content.filter(el => el.nodeType.includes('paragraph'));
            }
        },
        methods: {
          hoverTitle(isIn) {
              if(isIn) {
                  tl.play()
                  return
              }
              tl.pause();
              tl.startTime(0)
              console.log(isIn);
          }
        },
        mounted() {
            console.log(this.eventDesc.content);
            tl.staggerFromTo(
                this.$refs.child,   //target (all span tags)
                0.5,     //duration (0.5 seconds)
                {x:0},   //"from" values
                {x:1000},  //"to" values
                -0.15    //stagger amount (seconds between each start time)
            );
        }
    }
</script>

<style scoped lang="scss">
    .event-section {
        font-size: 18px;
        font-weight: $weight-medium;
        padding-top: 80px;
        color: white;
        background-color: $secondary-dark;
    }
    .title-container {
        position: relative;
        display: inline-block;
        margin-bottom: 40px;
        overflow: hidden;
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
    }
    .btn {
        vertical-align: middle;
    }
    .ulule {
        display: inline-block;
        width: 174px;
        height: 54px;
        margin-left: 64px;
        vertical-align: middle;

        svg {
            width: 100%;
            height: 100%;
        }
    }
</style>