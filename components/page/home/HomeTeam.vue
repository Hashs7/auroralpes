<template>
  <section class="o-section--white home-team">
    <div class="o-container">
      <div class="o-section__illu">
        <IlluResume data-scroll data-scroll-speed="2.2" />
      </div>
      <div class="o-section__content" data-scroll data-scroll-speed="2">
        <h2 class="o-section__title">L'équipe</h2>
        <RichText :content="resume" />
        <n-link :to="teamPage" class="o-section__link">
          <RippleButton name="Voir l'équipe"/>
        </n-link>
      </div>
    </div>
<!--    <Wave class="wave-bg"/>-->
    <Wave class="wave--up"/>
  </section>
</template>

<script>
  import IlluResume from '~/assets/icons/home/illu-resume.svg';
  import Wave from '~/assets/icons/home/wave-home--up.svg';
  // import Wave from '~/assets/icons/home/wave-home.svg';
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
    padding: 30px 0 50px 0;
    color: $black;
  }
  .o-section__link {
    display: inline-block;
    margin-top: 32px;
  }
  .wave-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    margin: auto;
  }

  .wave--up {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    transform: translateY(-99%);
  }

  .o-section__content {
    max-width: 600px;
  }

  .o-section__illu {
    position: relative;
    z-index: 1;
    max-width: 550px;
    width: 43%;
    transform: translateY(-110px);
  }
  @media screen and (max-width: 1130px) {
    .o-section__illu {
      top: 0px;
      right: 35px;
      position: absolute;
      width: 35%;
      min-width: 250px;
    }
    .home-team .o-container {
      text-align: left;
    }
  }

  @media #{$mobile-l-media} {
    .o-section__content {
      padding-top: 60px;
    }
  }
</style>