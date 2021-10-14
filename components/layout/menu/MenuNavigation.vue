<template>
  <nav class="navigation">
    <LinkTranslate
        title="Accueil"
        link="/"
        class="navigation__link u-link"
    />
    <LinkTranslate
      v-for="(page, i) in pages"
      :key="i"
      :title="page.fields.title"
      :link="'/'+page.fields.slug"
      class="navigation__link u-link"
    />
    <LinkTranslate
        title="Live"
        link="/live"
        class="navigation__link u-link"
        :is-live="pageLive.fields.isLive"
    />
  </nav>
</template>

<script>
import LinkTranslate from '../../common/LinkTranslate';

export default {
  components: {
    LinkTranslate,
  },
  computed: {
    settings() {
      return this.$store.state.global.settings;
    },
    pages() {
      return this.settings.fields.pages;
    },
    pageLive() {
      return this.settings.fields.live;
    },
  },
};
</script>

<style lang="scss">
.navigation {
  .link-translate {
    vertical-align: middle;
    color: $white !important;

    &.exact-active-link {
      opacity: .4;
    }
  }
}

.navigation__container {
  text-align: right;
}

.navigation__link {
  font-weight: 500;
  font-size: 1rem;


  &:not(:last-child) {
    margin-right: 36px;
  }
}

@media #{$desktop-s-media} {
  .navigation {
    display: none;
  }
}

/* -------- Responsive -------- */

</style>
