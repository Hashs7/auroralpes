<template>
  <main class="home-page">
    <div class="stars-wrapper" ref="wrapper">
      <HomeHeader />
      <HomeResume :resume="datas.fields.introResume" />
      <canvas ref="stars" class="stars-canvas"/>
    </div>
    <HomeTeam :resume="datas.fields.teamResume" />
    <HomeProjects />
<!--    <HomeFestival :resume="datas.fields.festivalResume" />-->
  </main>
</template>
<script>
import HomeHeader from '~/components/page/home/HomeHeader';
import HomeResume from '~/components/page/home/HomeResume';
import HomeTeam from '~/components/page/home/HomeTeam';
import HomeProjects from '~/components/page/home/HomeProjects';
import locomotive from "~/mixins/locomotive.js";
import StarsHome from "../components/Scene/StarsHome";

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
  mounted() {
    this.$nextTick(() => {
      // TODO remove
      setTimeout(() => {
        new StarsHome(this.$refs.stars, this.$refs.wrapper);
      }, 500)
    })
  }
};
</script>

<style lang="scss">
  .stars-wrapper {
    position: relative;
  }
  .stars-canvas {
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
