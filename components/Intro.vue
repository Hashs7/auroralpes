<template>
  <div class="intro" ref="logoContainer">
    <div class="intro-logo" ref="logoAnim"></div>
  </div>
</template>

<script>
  import bodymovin from 'lottie-web'
  import gsap from 'gsap';

  export default {
    name: "Intro",
    data: () => ({
      loading: false
    }),
    mounted() {
      this.start();
    },
    methods: {
      start() {
        this.loading = true;
        console.log('start');
        bodymovin.loadAnimation({
          container: this.$refs.logoAnim,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: window.origin + '/models/logo-intro-for-back.json'
        });

        // TODO debug
        this.finish()
      },
      finish() {
        this.loading = false;
        this.removeLayer(true);
      },
      removeLayer(delay = false) {
        gsap.to(this.$refs.logoContainer, {
          height: 0,
          duration: 0.8,
          delay: delay ? 3.4 : 0,
          // backgroundColor: 'transparent'
        });
      },
    },
  }
</script>

<style scoped>
  .intro {
    display: flex;
    position: fixed;
    top: 0;
    z-index: 15000;
    width: 100%;
    height: 100vh;
    background-color: white;
    color: #2e317a
  }

  .intro-logo {
    max-width: 300px;
    width: 35%;
    height: 100%;
    margin: auto;
  }
</style>