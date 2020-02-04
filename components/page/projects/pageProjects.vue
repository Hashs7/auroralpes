<template>
  <main class="project-page">
    <Header
        :title="datas.fields.header.fields.title"
        :description="datas.fields.header.fields.description"
        :image="datas.fields.header.fields.image"
    />
    <section class="projects-container o-section--white">
      <div class="o-container">

      </div>
    </section>
  </main>
</template>

<script>
  import Header from '~/components/layout/Header';
  export default {
    name: 'pageProjects',
    components: {
      Header,
    },
    props: {
      datas: {
        required: true,
        type: Object,
      },
    },
  }
</script>

<style scoped>

</style>