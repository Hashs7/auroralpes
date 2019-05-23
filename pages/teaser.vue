<template>
    <section class="container" @touchmove.stop.prevent="touchEvent">
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
    import EventSection from '~/components/Teaser/EventSection.vue'
    import AssoSection from '~/components/Teaser/AssoSection.vue'
    import PartnersSection from '~/components/Teaser/PartnersSection.vue'
    import SocialFooter from '~/components/Teaser/SocialFooter.vue'
    import {createClient} from '~/plugins/contentful.js'

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
            console.log(this.patenaires, 'mounted');
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
