<template>
  <div v-if="content" :class="{ 'richText--large': large}" v-html="renderedContent" class="richText" />
</template>
<script>
import { getRichTextHTML } from '~/utils/contentful';

export default {
  props: {
    content: {
      required: false,
      default: null,
      type: Object,
    },
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    renderedContent() {
      return getRichTextHTML(this.content);
    },
  },
  watch: {
    content: 'contentUpdated',
  },
  mounted() {
    if (process.browser) {
      this.links = [];
      this.$nextTick(this.addListeners);
    }
  },
  beforeDestroy() {
    this.removeListeners();
  },
  methods: {
    navigate(event) {
      event.preventDefault();
      let { target } = event;
      let i = 0;
      // Go throught 5 parents max to find a tag
      while (i < 5 && !(target instanceof HTMLAnchorElement) && target.parentNode) {
        target = target.parentNode;
        i += 1;
      }
      // If target is still not a link, ignore
      if (!(target instanceof HTMLAnchorElement)) return;
      const href = target.getAttribute('href');
      // Get link target, if local link, navigate with router link
      if (href && href[0] === '/') {
        this.$router.push(href);
        return;
      }
      window.open(href);
    },
    contentUpdated() {
      this.removeListeners();
      this.$nextTick(() => {
        this.addListeners();
      });
    },
    addListeners() {
      if (!this.$el.querySelectorAll) {
        return;
      }
      this.links = Array.from(this.$el.querySelectorAll('a:not([href^="mailto:"]):not([href^="tel:"])'));
      this.links.forEach((link) => {
        link.addEventListener('click', this.navigate, false);
      });
    },
    removeListeners() {
      this.links.forEach((link) => {
        link.removeEventListener('click', this.navigate, false);
      });
      this.links = [];
    },
  },
};
</script>
<style lang="scss">
  /* -------------------- Rich text -------------------- */
  .richText {
    white-space: pre-line;
  }
  .richText ul {
    margin: 25px 0;
    padding-left: 28px;
  }
  .richText li {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: -14px;
      top: 14px;
      width: 36px;
      height: 2px;
      border-radius: 2px;
      background-color: $primary;
      transform: translateX(-100%);
    }
  }
</style>
