<template>
  <nav class="navigation o-container">
    <div class="navigation__container">
      <div class="navigation__links">
        <LinkTranslate
            title="Auroralpes"
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
      </div>
    </div>
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
  },
  mounted() {
    console.log(this.settings);
  },
};
</script>

<style lang="scss">
.navigation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding-top: 40px;
  color: $primary;
}

.navigation__container {
  width: 100%;
  text-align: right;
}

.navigation__link {
  font-weight: 500;
  font-size: 1rem;

  &.nuxt-link-exact-active {
    opacity: .4;
  }

  &:not(:last-child) {
    margin-right: 26px;
  }
}

/* -------- Responsive -------- */

</style>
