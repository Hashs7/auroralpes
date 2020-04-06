<template>
  <section class="o-section--white">
    <div class="o-container">
      <div class="o-section__content">
        <h2
            data-scroll
            data-scroll-speed="3"
            class="o-section__title">
          {{ projectPage.title }}
        </h2>
        <div class="project-container">
          <n-link
            v-for="(proj, i) in projects"
            :to="url(proj)"
            :key="i"
            class="project-home"
            data-scroll
            data-scroll-speed="4"
            :data-scroll-delay="0.1 * (i + 1)"
          >
            <div class="project-home__img">
              <Asset v-if="proj.fields.thumbnail" :datas="proj.fields.thumbnail" />
            </div>
            <h4 class="project-home__title">{{ proj.fields.title }}</h4>
          </n-link>
        </div>
        <n-link :to="projectPage.slug">
          <RippleButton
              name="Voir tous nos projets"
              data-scroll
              data-scroll-delay="0.1"
              data-scroll-speed="3" />
        </n-link>
      </div>
    </div>
  </section>
</template>

<script>
  import Asset from '~/components/common/Asset';
  import RippleButton from '~/components/UI/RippleButton';

  export default {
    name: 'HomeProjects',
    components: {
      Asset,
      RippleButton,
    },
    computed: {
      slug() {
        return this.$store.state.global.projects.pageSlug;
      },
      projects() {
        let sortedProjects = [...this.$store.state.global.projects.items].sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
        return sortedProjects.slice(0, 4);
      },
      projectPage() {
        return this.$store.state.global.settings.fields.pages.find(page => page.sys.contentType.sys.id === 'pageProjects').fields;
      }
    },
    created() {
      this.$store.dispatch('global/getProjects');
    },
    methods: {
      url(project) {
        return this.slug + '/' + project.fields.slug;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .home-team {
    color: $white;
  }
  .o-section__content {
    padding: 120px 0;
    text-align: center;
  }
  .o-section__title {
    text-align: left;
  }
  .project-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0;
  }
  .project-home {
    display: inline-block;
    /*margin-bottom: 50px;*/

    &:not(:last-child) {
      margin-right: 55px;
    }
  }
  .project-home__img {
    width: 300px;
    height: 300px;
    background-color: $gray;
  }
  .project-home__title {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: $weight-medium;
  }
   @media screen and (max-width: 1525px) {
     .project-home__img {
       width: 250px;
       height: 250px;
    }
     .project-home:not(:last-child) {
       margin-right: 30px;
     }
   }
  
  @media #{$desktop-m-media} {
    .project-container {
      justify-content: space-between;
    }
    .project-home {
      width: calc(50% - 20px);
    }
    .project-home:not(:last-child) {
      margin-right: 0;
    }
    .project-home__img {
      width: 100%;
      height: 300px;
      margin: 0 auto;
    }
  }
  @media #{$tablet-m-media} {
    .project-home__img {
      height: 200px;
    }
    .o-section__content {
      padding: 80px 0;
    }
  }
  @media #{$tablet-s-media} {
    .project-home {
      width: 100%;
    }
    .project-home__img {
      height: 250px;
    }
  }
  @media #{$mobile-l-media} {
    .o-section__content {
      padding: 20px 0 40px 0;
    }
  }
</style>