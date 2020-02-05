<template>
  <section class="o-section home-team">
    <div class="o-container">
      <div class="o-section__content">
        <h2>L'équipe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna purus, varius vel consequat vitae, molestie vitae risus. Praesent tincidunt nulla vitae vulputate feugiat. Donec in varius tellus, sit amet vulputate orci. Mauris euismod tellus et euismod euismod.

          Mauris euismod odio id aliquet porttitor. Aliquam facilisis sapien at tristique tincidunt. In hac habitasse platea dictumst. Quisque ac purus risus. Ut commodo ligula quis est mollis lacinia. In eget faucibus diam, ut facilisis turpis.
        </p>
        <n-link :to="teamPage">
          <RippleButton name="Voir l'équipe"/>
        </n-link>
      </div>
    </div>
  </section>
</template>

<script>
  import RippleButton from '~/components/UI/RippleButton';

  export default {
    name: 'HomeResume',
    components: {
      RippleButton,
    },
    computed: {
      teamPage() {
        return this.$store.state.global.settings.fields.pages.find(page => page.sys.contentType.sys.id === 'pageTeam').fields.slug;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-team {
    color: $white;
  }
  .o-section__content {
    padding: 170px 0 140px;
  }
</style>