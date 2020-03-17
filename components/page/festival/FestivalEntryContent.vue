<template>
  <section class="o-section--white">
    <div class="entry-content">
      <div class="o-container">
        <div class="entry-content__text">
          <h1>{{ title }}</h1>
          <RichText class="entry-content__desc" :content="description" />
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import RichText from '@/components/common/RichText.vue';

  export default {
    name: 'FestivalEntryContent',
    components: {
      RichText,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped>
  .entry-content {
    padding: 315px 0 440px 0;
    background: linear-gradient(-165deg, rgba(255,217,229,1) 0%, rgba(0,0,0,0) 50%);
  }
  .entry-content__text {
    max-width: 530px;
  }
  .entry-content__desc {
    max-width: 380px;
  }
</style>