<template>
  <div class="project-page">
    <Header
      :title="datas.fields.title"
      :date="datas.fields.date"
      :image="datas.fields.thumbnail"
      project
    />
    <section class="project-container o-section--white">
      <div class="o-container">
        <RichText :content="datas.fields.description" />
      </div>
    </section>
  </div>
</template>

<script>
  import Header from '~/components/layout/Header';
  import RichText from '~/components/common/RichText';

  export default {
    name: 'Project',
    components: {
      Header,
      RichText,
    },
    props: {
      datas: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss">
.project-container {
  padding: 40px 0 80px 0;

  h2, h3, h4, h5, h6 {
    color: #535353;
  }
}
</style>