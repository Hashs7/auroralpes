<template>
    <section class="count-container" @touchmove.stop.prevent="touchEvent">
        <Intro :counter="true"/>

        <div class="aurore">
            <Aurore/>
        </div>
        <div class="character">
            <Character/>
        </div>
        <div class="ground">
            <Ground/>
        </div>

        <LogoContainer
                :logoAuro="logoAuroralpes.fields"
                :logoMondes="logoMondes.fields"/>

        <Countdown
                :endtime="date"
                day="j"
                hours="h"
                minutes="mn"
                seconds="s"
                :message="baseline"
        />

        <SocialContainer
                :fb="facebook"
                :insta="instagram"
                :twitter="twitter"/>
    </section>
</template>

<script>
    import Aurore from '~/assets/icons/aurore.svg'
    import Character from '~/assets/icons/character.svg'
    import Ground from '~/assets/icons/ground.svg'
    import Countdown from '~/components/CountdownPage/Countdown'
    import SocialContainer from '~/components/CountdownPage/SocialContainer'
    import LogoContainer from '~/components/CountdownPage/LogoContainer'
    import Intro from '~/components/Intro'
    import client from '~/plugins/contentful.js'

    export default {
        components: {
            Aurore,
            Character,
            Ground,
            Countdown,
            SocialContainer,
            LogoContainer,
            Intro
        },
        layout: 'countdown',
        data: () => ({
            wHeight: {
                height: null
            }
        }),
        async asyncData({env}) {
            const resSocial = await client.getEntries({
                content_type: 'socials'
            });
            const resCount  = await client.getEntries({
                content_type: 'countdown'
            });

            const {date, baseline, logoAuroralpes, logoMondes} = resCount.items[0].fields;
            const {facebook, twitter, instagram}               = resSocial.items[0].fields;

            return {date, baseline, logoAuroralpes, logoMondes, facebook, twitter, instagram};
        },
        mounted() {
            this.wHeight.height = window.innerHeight + 'px';
        },
        methods: {
            touchEvent(e) {},
        }
    }
</script>

<style lang="scss">
    .count-container {
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        @supports (-webkit-overflow-scrolling: touch) {
            height: calc(100vh - 129px);
        }
    }
    body {
        background-color: white !important;
    }

    .aurore {
        position: absolute;
        top: -40px;
        left: -145px;
        width: 64vw;
        max-width: 1220px;
        min-width: 312px;
        max-height: 840px;
        @media #{$lg-down} {
            left: -75px;
        }
        @media #{$md-down} {
            transform: rotate(-6deg);
            width: 70vw;
            top: 0;
            left: -25px;
        }
    }

    .character {
        display: flex;
        align-items: flex-end;
        position: fixed;
        bottom: -52px;
        right: 63px;
        width: 23vw;
        height: 42.6vh;
        max-width: 442px;
        min-width: 158px;
        max-height: 460px;
        @media #{$md-down} {
            width: 30vw;
            bottom: -22px;
        }

        svg {
            width: 100%;
            vertical-align: bottom;
        }
    }

    .ground {
        display: flex;
        align-items: flex-end;
        z-index: -1;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 36vw;
        height: 22vh;
        max-width: 712px;
        min-width: 256px;
        max-height: 235px;
        @media #{$md-down} {
            width: 51vw;
        }

        svg {
            width: 100%;
            vertical-align: bottom;
        }
    }
</style>
