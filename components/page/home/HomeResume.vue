<template>
  <section class="o-section--white home-resume">
    <div class="o-container">
      <div class="o-section__content">
        <h2>Présentation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna purus, varius vel consequat vitae, molestie vitae risus. Praesent tincidunt nulla vitae vulputate feugiat. Donec in varius tellus, sit amet vulputate orci. Mauris euismod tellus et euismod euismod.

          Mauris euismod odio id aliquet porttitor. Aliquam facilisis sapien at tristique tincidunt. In hac habitasse platea dictumst. Quisque ac purus risus. Ut commodo ligula quis est mollis lacinia. In eget faucibus diam, ut facilisis turpis.
        </p>
      </div>
      <div class="o-section__illu">
        <IlluResume />
      </div>
    </div>
  </section>
</template>

<script>
  import IlluResume from '~/assets/icons/home/illu-resume.svg';

  export default {
    name: 'HomeResume',
    components: { IlluResume },
  }
</script>

<style lang="scss" scoped>
  .home-resume {
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
  .o-section__illu {
    width: 550px;
  }
</style>