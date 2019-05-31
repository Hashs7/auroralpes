<template>
    <section class="container">
<!--        <Intro />-->

        <EntryVideo :link="videoYT" />

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
    import Intro from '~/components/Intro'
    import EntryVideo from '~/components/Teaser/EntryVideo'
    import EventSection from '~/components/Teaser/EventSection'
    import AssoSection from '~/components/Teaser/AssoSection'
    import PartnersSection from '~/components/Teaser/PartnersSection'
    import SocialFooter from '~/components/Teaser/SocialFooter'
    import {createClient} from '~/plugins/contentful.js'

    const client = createClient();

    export default {
        components: {
            EntryVideo,
            EventSection,
            AssoSection,
            PartnersSection,
            SocialFooter,
            Intro
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

        methods: {
            touchEvent(e) {},
        }
    }
</script>

<style lang="scss">
    body {
        background-color: $secondary-dark;
    }
</style>
