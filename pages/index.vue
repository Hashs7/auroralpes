<template>
  <main class="home-page">
    <HomeHeader />
    <HomeResume :resume="datas.fields.festivalResume" />
    <HomeTeam />
    <HomeProjects />
  </main>
</template>
<script>
import HomeHeader from '~/components/page/home/HomeHeader';
import HomeResume from '~/components/page/home/HomeResume';
import HomeTeam from '~/components/page/home/HomeTeam';
import HomeProjects from '~/components/page/home/HomeProjects';
import locomotive from "~/mixins/locomotive.js";

export default {
  components: {
    HomeHeader,
    HomeResume,
    HomeTeam,
    HomeProjects,
  },
  mixins: [locomotive],
  /**
   * SEO data with Contentful
   */
  head() {
    if (!this.datas.fields || !this.datas.fields.seo) return {};
    return {
      title: this.datas.fields.seo.fields.title,
      meta: [
        { hid: 'description',
          name: 'description',
          content: this.datas.fields.seo.fields.description },
        { hid: 'og:description',
          name: 'og:description',
          content: this.datas.fields.seo.fields.description },
        { hid: 'keywords',
          name: 'keywords',
          content: this.datas.fields.seo.fields.keywords ? this.datas.fields.seo.fields.keywords.join(', ') : '' },
        { hid: 'og:image',
          property: 'og:image',
          content: this.datas.fields.seo.fields.image ? this.datas.fields.seo.fields.image.fields.file.url : '' },
        { hid: 'og:image:width',
          property: 'og:image:width',
          content: this.datas.fields.seo.fields.image ? this.datas.fields.seo.fields.image.fields.file.details.image.width : '' },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: this.datas.fields.seo.fields.image ? this.datas.fields.seo.fields.image.fields.file.details.image.height : '',
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: this.datas.fields.seo.fields.image ? this.datas.fields.seo.fields.image.fields.file.contentType : '',
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: this.datas.fields.seo.fields.image ? this.datas.fields.seo.fields.image.fields.file.contentType : '',
        },
        { hid: 'og:url',
          property: 'og:url',
          content: process.env.HOSTNAME + this.$route.fullPath }, // Add HOSTNAME in .env for full URL
        { hid: 'og:title',
          property: 'og:title',
          content: this.datas.fields.seo.fields.title },
      ],
    };
  },
  /**
   * Get the page data
   */
  // eslint-disable-next-line no-unused-vars
  async asyncData({ store, error, payload, params }) {
    // Generated route, use defined payload
    if (payload) {
      return { datas: payload };
    }

    return {
      datas: store.state.global.settings.fields.homepage,
    };
  },
};
</script>
<style lang="scss">
</style>
