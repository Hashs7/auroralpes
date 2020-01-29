<template>
  <main class="page page--ie">
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
      datas: store.state.global.settings.fields.oldbrowsers,
    };
  },
};
</script>
<style lang="scss">
.page--ie {
  height: 100vh;
  display: flex;
}
.page__title {
  max-width: 860px;
  margin: auto;
  color: $white;
  text-align: center;
}
</style>
