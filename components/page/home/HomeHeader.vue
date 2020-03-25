<template>
  <div class="header--home">
    <div data-scroll data-scroll-speed="2">
      <Logo class="header__logo" />
    </div>
    <canvas class="header__canvas" ref="canvas" width="300" height="300" />
  </div>
</template>

<script>
  import Logo from '~/assets/icons/aurorales-logo-white.svg';
  import SceneHome from '@/components/Scene/SceneHome';

  export default {
    name: 'HomeHeader',
    components: {
      Logo,
    },
    mounted() {
      if (process.server) return;
      import('three/examples/jsm/loaders/GLTFLoader').then(({ GLTFLoader }) => {
          new GLTFLoader().load('../models/asteroids-home.glb', (glb) => {
            new SceneHome(this.$refs.canvas, glb);
          });
        })
    }
  }
</script>

<style lang="scss" scoped>
  .header--home {
    position: relative;
    height: 100vh;
  }
  .header__logo {
    display: block;
    width: 335px;
    padding-top: 310px;
    margin: auto;
  }
  .header__canvas {
    z-index: 1000;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(30%);
  }
</style>