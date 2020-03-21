<template>
  <section class="o-section home-team">
    <div class="o-container">
      <div class="o-section__illu">
        <IlluResume/>
      </div>
      <div class="o-section__content">
        <h2 class="o-section__title">L'équipe</h2>
        <RichText :content="resume"/>
        <n-link :to="teamPage">
          <RippleButton name="Voir l'équipe"/>
        </n-link>
      </div>
    </div>
    <Wave class="wave-bg"/>
  </section>
</template>

<script>
  import IlluResume from '~/assets/icons/home/illu-resume.svg';
  import Wave from '~/assets/icons/home/wave-home.svg';
  import RippleButton from '~/components/UI/RippleButton';
  import RichText from '~/components/common/RichText';

  export default {
    name: 'HomeResume',
    components: {
      IlluResume,
      Wave,
      RippleButton,
      RichText,
    },
    props: {
      resume: {
        type: Object,
        required: true,
      },
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
    position: relative;
    color: $white;

    .o-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      text-align: right;
    }
  }

  .o-section__content {
    position: relative;
    z-index: 2;
    padding: 170px 0 130px 0;
    color: $black;
  }
  .wave-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    margin: auto;
  }

  .o-section__content {
    max-width: 600px;
  }

  .o-section__illu {
    position: relative;
    z-index: 1;
    width: 550px;
  }
</style>