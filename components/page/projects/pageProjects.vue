<template>
  <main class="project-page">
    <Header
        :title="datas.fields.header.fields.title"
        :description="datas.fields.header.fields.description"
        :image="datas.fields.header.fields.image"
    />
    <section class="projects-container o-section--white">
      <div class="o-container">
        <div class="own-projects">
          <h2 class="projects-container__title" data-scroll data-scroll-speed="3">Nos projets</h2>
          <ProjectPreview
              v-for="(project, i) in ownProjects"
              :key="i"
              :title="project.fields.title"
              :date="project.fields.date"
              :resume="project.fields.resume"
              :slug="project.fields.slug"
              :thumbnail="project.fields.thumbnail"
              :prefix="datas.fields.slug"
          />
        </div>
        <div class="participate-projects">
          <h2 class="projects-container__title" data-scroll data-scroll-speed="3">Nos participations</h2>
          <ProjectPreview
              v-for="(project, i) in participateProjects"
              :key="i"
              :title="project.fields.title"
              :date="project.fields.date"
              :dateLabel="project.fields.dateLabel"
              :resume="project.fields.resume"
              :slug="project.fields.slug"
              :thumbnail="project.fields.thumbnail"
              :prefix="datas.fields.slug"
          />
        </div>
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
    computed: {
      ownProjects() {
        return this.datas.fields.projects.filter(pro => pro.fields.isOwn);
      },
      participateProjects() {
        return this.datas.fields.projects.filter(pro => !pro.fields.isOwn);
      },
    },
  }
</script>

<style lang="scss">
  .projects-container {
    padding: 80px 0 10px 0;
  }
  .projects-container__title {
    margin-bottom: 18px;
  }
  .own-projects {
  }
  .participate-projects {
    .projects-container__title {
      color: $secondary;
    }
    .project__title {
      color: $secondary;
    }
  }
  @media #{$mobile-l-media} {
    .projects-container {
      padding: 40px 0 1px 0;
    }
  }
</style>