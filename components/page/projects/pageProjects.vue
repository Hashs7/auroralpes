<template>
  <main class="project-page">
    <Header
        :title="datas.fields.header.fields.title"
        :description="datas.fields.header.fields.description"
        :image="datas.fields.header.fields.image"
    />
    <section class="projects-container o-section--white">
      <div class="o-container">
        <ProjectPreview
            v-for="(project, i) in datas.fields.projects"
            :key="i"
            :title="project.fields.title"
            :date="project.fields.date"
            :resume="project.fields.resume"
            :slug="project.fields.slug"
            :thumbnail="project.fields.thumbnail"
            :prefix="datas.fields.slug"
        />
      </div>
    </section>
  </main>
</template>

<script>
  import Header from '~/components/layout/Header';
  import ProjectPreview from '~/components/page/projects/ProjectPreview';

  export default {
    name: 'pageProjects',
    components: {
      Header,
      ProjectPreview,
    },
    props: {
      datas: {
        required: true,
        type: Object,
      },
    },
  }
</script>

<style lang="scss" scoped>
  .projects-container {
    padding: 80px 0 10px 0;
  }
  @media #{$mobile-l-media} {
    .projects-container {
      padding: 40px 0 1px 0;
    }
  }
</style>