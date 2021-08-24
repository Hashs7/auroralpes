<template>
  <main>
    {{ template }}
    <component v-bind:is="template" v-if="template" :key="datas.sys.id" :datas="datas" />
  </main>
</template>
<script>
/* eslint-disable */
import client from '~/plugins/contentful';
import PageProjects from '~/components/page/projects/pageProjects';
import PageTeam from '~/components/page/team/pageTeam';
import PageFestival from '~/components/page/festival/pageFestival';
import locomotive from "~/mixins/locomotive.js";

export default {
  components: {
    // Header,
    PageProjects,
    PageTeam,
    PageFestival,
  },
  mixins: [locomotive],
  mounted() {
    console.log(this.template);
  },
  /**
   * SEO data with Contentful
   */
  head() {
    if (!this.datas.fields) return {};
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
  computed: {
    template() {
      // Return template to use
      console.log(this.datas.sys.contentType.sys.id);
      if (this.datas.sys) {
        return this.datas.sys.contentType.sys.id;
      }
      return false;
    },
    header() {
      return this.datas.fields.header;
    },
  },
  /**
   * Get the page data
   */
  async asyncData({ store, error, payload, params }) {
    // Generated route, use defined payload
    if (payload) {
      return { datas: payload };
    }

    const { pages } = store.state.global.settings.fields;
    const loadPage = pages.find((page) => page.fields.slug === params.slug);

    if (loadPage) {
      return {
        datas: loadPage,
      };
    }

    // Find page in Contentful with the slug
    const { items: [simplePage] } = await client.getEntries({
      content_type: 'page',
      'fields.slug': params.slug,
    });

    if (simplePage) {
      return {
        datas: simplePage,
      };
    }

    // Not found
    return error({ statusCode: 404, message: 'Not found' });
  },
};
</script>
