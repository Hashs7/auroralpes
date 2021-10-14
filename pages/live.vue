<template>
  <main class="live-page">
    <div class="live-container">
      <iframe
          class="twitch-iframe"
          src="https://player.twitch.tv/?channel=auroralpes&parent=www.auroralpes.fr"
          allowfullscreen="true"
          :height="height"
          width="620">
      </iframe>
      <iframe
          class="twitch-chat"
          src="https://www.twitch.tv/embed/auroralpes/chat?darkpopout&parent=www.auroralpes.fr/live"
          allowfullscreen="true"
          :height="height"
          width="340">
      </iframe>
    </div>
  </main>
</template>
<script>
import RippleButton from '@/components/UI/RippleButton';

export default {
  components: {
    RippleButton,
  },
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
      datas: store.state.global.settings.fields.live,
    };
  },
  data() {
    return {
      height: 500,
    }
  },
  mounted() {
    this.resize();
    window.addEventListener('resize', this.resize);
  },
  methods: {
    resize() {
      const width = window.innerWidth > 1400 ?
          1400 - 320 : window.innerWidth > 874 ?
          window.innerWidth - 320 :
          window.innerWidth;
      this.height = width / 1.77
    }
  },
};
</script>

<style lang="scss">
  .live-page {
    min-height: 100vh;
    padding: 200px 0 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .live-container {
    max-width: 1400px;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .twitch-iframe {
    flex-grow: 1;
  }
  .btn-dl {
    display: inline-block;
    margin: 40px auto 0 auto;
  }
  @media #{$tablet-l-media} {
    .twitch-chat {
      display: none;
    }
  }
</style>
