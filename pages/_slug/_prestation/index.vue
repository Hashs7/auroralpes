<template>
  <main>
    <Prestation :datas="datas" />
  </main>
</template>
<script>
/* -------- Services -------- */
import client from '~/plugins/contentful';
import Prestation from '~/components/page/prestations/Prestation';
import Header from '~/components/layout/Header';
import locomotive from "~/mixins/locomotive.js";

/* -------------------- Module -------------------- */
export default {
  components: {
    Header,
    Prestation,
  },
  mixins: [locomotive],
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
    header() {
      return {
        fields: {
          title: this.datas.fields.title,
          image: this.datas.fields.image,
        },
      };
    },
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

    // Find page in Contentful with the slug
    const { items: [simplePage] } = await client.getEntries({
      content_type: 'prestation',
      'fields.slug': params.prestation,
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
