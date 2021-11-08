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
          <h2 class="projects-container__title">Nos prestations</h2>
          <ProjectPreview
              v-for="(project, i) in prestations"
              :key="i"
              :title="project.fields.title"
              :date="project.fields.date"
              :resume="project.fields.resume"
              :slug="project.fields.slug"
              :thumbnail="project.fields.thumbnail"
              :prefix="datas.fields.slug"
          />
        </div>
        <section v-if="datas.fields.sponsorsLogos.length" class="sponsors-section">
          <h2 v-if="datas.fields.sponsorsText" class="projects-container__title">{{ datas.fields.sponsorsText }}</h2>
          <div class="sponsors-logos">
            <Asset v-for="(img, i) in datas.fields.sponsorsLogos" :key="i" :datas="img" />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
  import Asset from '../../common/Asset.vue';
  import Header from '~/components/layout/Header';
  import ProjectPreview from '~/components/page/prestations/ProjectPreview';

  export default {
    name: 'pagePrestations',
    components: {
      Header,
      Asset,
      ProjectPreview,
    },
    props: {
      datas: {
        required: true,
        type: Object,
      },
    },
    computed: {
      prestations() {
        return this.datas.fields.projects;
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
  .sponsors-section {
    margin-top: 32px;
  }
  .sponsors-logos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 100px;
    max-width: 1080px;
    margin: auto;

    .asset__asset {
      object-fit: contain;
    }
    .asset__underlay {
      display: none;
    }
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
  @media #{$desktop-s-media} {
    .sponsors-logos {
      grid-column-gap: 40px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media #{$tablet-s-media} {
    .sponsors-logos {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media #{$mobile-l-media} {
    .sponsors-logos {
      grid-column-gap: 20px;
    }
  }
</style>