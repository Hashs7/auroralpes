<template>
  <div class="asset">
    <span :style="{ backgroundColor, transform: `translateX(${x})` }" class="asset__underlay" />
    <img
      ref="asset"
      v-if="isImage"
      v-lazy="{src: url}"
      :alt="alt"
      class="asset__asset"
    >
    <video
      ref="asset"
      v-else
      :src="url"
      muted
      loop
      autoplay
      playsinline
      class="asset__asset"
    />
  </div>
</template>
<script>
/* -------------------- Module -------------------- */
export default {
  props: {
    datas: {
      required: true,
      type: Object,
    },
    x: {
      required: false,
      type: String,
      default: '0',
    },
  },
  data() {
    return {
      loaded: false,
      backgroundColor: '#E5F0FB',
    };
  },
  computed: {
    isImage() {
      return this.datas.fields.file.contentType.split('/')[0] === 'image';
    },
    url() {
      return this.datas.fields.file.url;
    },
    alt() {
      return this.datas.fields.description;
    },
    preview() {
      if (!this.isImage) {
        return null;
      }
      return `${this.datas.fields.file.url}?w=10`;
    },
  },
  async mounted() {
    if (process.browser) {
      this.$Lazyload.$on('loaded', (e) => this.open(e));
      if (this.isImage) {
        this.backgroundColor = await this.$color(this.preview);
      }
    }
  },
  methods: {
    open(e) {
      if (e.src === this.url) {
        this.loaded = true;
        if (!this.$refs.asset) return;
        this.backgroundColor = 'transparent';
        this.sendSize();
      }
    },
    sendSize() {
      if (this.$refs.asset.offsetWidth < 10 || this.$refs.asset.offsetHeight < 10) {
        setTimeout(() => this.sendSize(), 100);
        return;
      }
      this.$emit('loaded', {
        width: this.$refs.asset.offsetWidth,
        height: this.$refs.asset.offsetHeight,
      });
    },
  },
};
</script>
<style lang="scss">
  /* -------------------- Asset -------------------- */
  .asset {
    position: relative;
    line-height: 0;
    height: 100%;
  }

  .asset__asset {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 2;
    text-indent: -10000px;

    &[lazy='shown'] {
      opacity: 1;
    }

    &[lazy='loaded'] {
      opacity: 0;
      animation: fadein 0.7s cubic-bezier(0.77, 0, 0.175, 1) forwards;
      @keyframes fadein {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }

  video.asset__asset{
    background: black;
  }

  /* -------------------- Underlay -------------------- */
  .asset__underlay{
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: transparentize($primary, 0.9);
    transition: background-color 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  }

  /* -------------------- Video -------------------- */
  @supports (object-fit: cover) and (-ms-ime-align:auto) {
    video.asset__asset {
      height: auto;
    }
  }
</style>
