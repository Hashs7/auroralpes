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
    data() {
      return {
        scene: null
      }
    },
    mounted() {
      if (process.server) return;
      import('three/examples/jsm/loaders/GLTFLoader').then(({ GLTFLoader }) => {
          new GLTFLoader().load('../models/asteroids-home.glb', (glb) => {
            this.scene = new SceneHome(this.$refs.canvas, glb);
          });
        })
    },
    beforeDestroy() {
      this.scene.destroy();
    }
  }
</script>

<style lang="scss" scoped>
  .header--home {
    position: relative;
    z-index: 10;
    margin-bottom: -200px;
  }
  .header__logo {
    display: block;
    max-width: 335px;
    width: 65%;
    padding-top: 310px;
    margin: auto;
  }
  .header__canvas {
    position: relative;
    z-index: 5;
    margin-top: -100px;
  }
  @media #{$mobile-l-media} {
    .header__logo {
      padding-top: 190px;
    }
    .header--home {
      height: 85vh;
    }
    .header__canvas {
      pointer-events: none;
    }
    .header__canvas {
      bottom: 50px;
      transform: none;
    }
  }
</style>