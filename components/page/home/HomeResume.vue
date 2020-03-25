<template>
  <section class="o-section home-resume">
    <div class="o-container">
      <div class="o-section__content" data-scroll data-scroll-speed="2">
        <h2 class="o-section__title">Présentation</h2>
        <RichText :content="resume"/>
      </div>
    </div>
  </section>
</template>

<script>
  import RichText from '~/components/common/RichText';

  export default {
    name: 'HomeResume',
    components: {
      RichText,
    },
    props: {
      resume: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>
  .home-resume {
    position: relative;

    .o-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  .o-section__content {
    padding: 160px 0;
    width: calc(50% - 20px);
  }

  .o-section__title {
    color: $white;
  }
</style>