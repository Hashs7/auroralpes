<template>
    <section class="container">
        <!--<div class="intro">
            <div ref="logoAnim"></div>
        </div>-->
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
            /*const anim = bodymovin.loadAnimation({
                container: this.$refs.logoAnim,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'models/logo-animation.json'
                // path: 'models/avion-enter.json'
            });*/
            // console.log(this.patenaires, anim, 'mounted');
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
        position: fixed;
        z-index: 10;
        width: 100%;
        height: 100vh;
        background-color: white;
    }

</style>
