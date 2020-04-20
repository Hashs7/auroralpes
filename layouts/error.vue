<template>
  <div class="error-page">
    <Page404 />
  </div>
</template>

<script>
  import Page404 from '~/pages/404';

  export default {
    head() {
      return {
        title: 'Auroralpes',
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex' },
        ],
      };
    },
    components: { Page404 },
    props: {
      error: {
        required: true,
        type: Object,
      },
    },
    layout: 'empty',
  };
</script>

<style lang="scss">
  .error-page {
    color: #FFF;
  }
</style>
