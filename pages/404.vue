<template>
  <main class="page page--error">
    <h1 class="page__title">
      <rich-text :content="datas" />
    </h1>
  </main>
</template>
<script>
import RichText from '../components/common/RichText';

export default {
  head() {
    return {
      title: '',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' },
      ],
    };
  },
  layout: 'empty',
  components: { RichText },
  async asyncData({ store, payload }) {
    // Generated route, use defined payload
    if (payload) {
      return { datas: payload };
    }
    return {
      datas: store.state.global.settings.fields.error,
    };
  },
  mounted() {
    setTimeout(() => {
      if (!this) return;
      this.$router.push({ path: '/' });
    }, 3000);
  },
};
</script>
<style lang="scss">
  .page--error {
    height: 100vh;
    display: flex;
  }
  .page__title {
    max-width: 860px;
    margin: auto;
    color: $white;
    text-align: center;

    a {
      color: $primary;
      transition: color .2s ease-in-out;
      @include hover {
        //color: $secondary-dark;
      }
    }
  }
</style>
