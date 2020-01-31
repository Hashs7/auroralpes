<template>
  <section class="o-section--white">
    <div class="o-container">
      <div class="o-section__content">
        <h2>Nos projets</h2>
        <div class="project-container">
          <div
            class="project"
            v-for="(proj, i) in 4"
          >
            <div class="project__img">
              <img src="" alt="">
            </div>
            <h4 class="project__title">Festival d'astronomie</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "HomeResume"
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