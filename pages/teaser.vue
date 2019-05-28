<template>
    <section class="container">
        <div class="intro" ref="logoContainer">
            <div class="intro-logo" ref="logoAnim"></div>
        </div>
        <EntryVideo link="https://www.youtube.com/embed/uaZHpTBqW0k" />

        <EventSection :eventDesc="eventDesc" :link="crowdfunding"/>

        <AssoSection :assoDesc="associationDesc" :link="joinUs"/>

        <PartnersSection :partners="patenaires"/>

        <SocialFooter
            :fb="facebook"
            :insta="instagram"
            :twitter="twitter"/>
    </section>
</template>

<script>
    import EntryVideo from '~/components/Teaser/EntryVideo'
    import EventSection from '~/components/Teaser/EventSection'
    import AssoSection from '~/components/Teaser/AssoSection'
    import PartnersSection from '~/components/Teaser/PartnersSection'
    import SocialFooter from '~/components/Teaser/SocialFooter'
    import {createClient} from '~/plugins/contentful.js'
    import bodymovin from 'lottie-web'
    import { TimelineMax } from 'gsap';


    const client = createClient();

    export default {
        components: {
            EntryVideo,
            EventSection,
            AssoSection,
            PartnersSection,
            SocialFooter
        },
        layout: 'teaser',
        data: () => ({
            wHeight: {
                height: null
            },
        }),
        async asyncData({env}) {
            const resSocial = await client.getEntries({
                content_type: 'socials'
            });
            const resTeaser  = await client.getEntries({
                content_type: 'teaser'
            });
            const {videoYT, eventDesc, crowdfunding, associationDesc, joinUs, patenaires} = resTeaser.items[0].fields;
            const {facebook, twitter, instagram} = resSocial.items[0].fields;

            return {videoYT, eventDesc, crowdfunding, associationDesc, joinUs, patenaires, facebook, twitter, instagram};
        },
        mounted() {
            const anim = bodymovin.loadAnimation({
                container: this.$refs.logoAnim,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: 'models/logo-intro.json'
            });
            setTimeout(() => {
                const tl = new TimelineMax();

                tl.to(this.$refs.logoContainer, 0.5, {
                    height: 100,
                    y: -210,
                    // backgroundColor: 'transparent'
                });
            }, 2700);
            console.log(this.patenaires, anim, 'mounted');
        },

        methods: {
            touchEvent(e) {},
        }
    }
</script>

<style lang="scss">
    body {
        background-color: $secondary-dark;
    }
    .intro {
        display: flex;
        position: fixed;
        z-index: 10;
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
