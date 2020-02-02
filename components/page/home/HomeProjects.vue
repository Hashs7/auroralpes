<template>
  <section class="o-section--white">
    <div class="o-container">
      <div class="o-section__content">
        <h2>Nos projets</h2>
        <div class="project-container">
          <n-link
            v-for="(proj, i) in projects"
            :to="url(proj)"
            :key="i"
            class="project"
          >
            <div class="project__img">
              <img src="" alt="">
            </div>
            <h4 class="project__title">{{ proj.fields.title }}</h4>
          </n-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomeResume',
    computed: {
      slug() {
        return this.$store.state.global.projects.pageSlug;
      },
      projects() {
        return this.$store.state.global.projects.items;
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
    padding: 160px 0;
  }
  .project-container {
    display: flex;
    justify-content: space-between;
  }
  .project {
    display: inline-block;
    text-align: center;
  }
  .project__img {
    width: 320px;
    height: 320px;
    background-color: $gray;
  }
</style>