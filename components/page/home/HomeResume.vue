<template>
  <section class="o-section--white home-resume">
    <WaveUp class="wave wave--up" />
    <div class="o-container">
      <div class="o-section__content">
        <h2>Présentation</h2>
        <RichText :content="resume" />
      </div>
      <div class="o-section__illu">
        <IlluResume />
      </div>
    </div>
    <WaveDown class="wave wave--down" />
  </section>
</template>

<script>
  import IlluResume from '~/assets/icons/home/illu-resume.svg';
  import WaveUp from '~/assets/icons/home/wave-home-up.svg';
  import WaveDown from '~/assets/icons/home/wave-home-down.svg';
  import RichText from '~/components/common/RichText';

  export default {
    name: 'HomeResume',
    components: {
      RichText,
      IlluResume,
      WaveUp,
      WaveDown,
    },
    props: {
      resume: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>
  .home-resume {
    position: relative;
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
  .wave {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    &--up {
      top: 0;
      transform: translateY(-99%);
    }
    &--down {
      bottom: 0;
      transform: translateY(99%);
    }
  }
</style>