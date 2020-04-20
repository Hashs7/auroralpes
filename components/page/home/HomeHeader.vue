<template>
  <div class="header--home">
    <div data-scroll data-scroll-speed="4">
      <Logo class="header__logo" />
    </div>
    <canvas class="header__canvas" ref="canvas" width="300" :height="height" />
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
        scene: null,
        height: 600,
      }
    },
    mounted() {
      const factor = window.innerWidth > 425 ? 1.777 : 1;
      this.height = window.innerWidth / factor;

      if (process.server) return;
      import('three/examples/jsm/loaders/GLTFLoader').then(({ GLTFLoader }) => {
          const path = window.innerWidth > 425 ? '../models/asteroids-home.glb' : '../models/asteroids-mobile.glb';
          new GLTFLoader().load(path, (glb) => {
            this.scene = new SceneHome(this.$refs.canvas, glb, window.innerWidth > 425);
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
    min-height: calc(100vw / 1.7);
  }
  @media #{$tablet-l-media} {
    .header--home {
      margin-bottom: 20px;
    }
    .header__canvas {
      margin-top: 20px;
    }
  }
  @media #{$mobile-l-media} {
    .header__logo {
      padding-top: 190px;
    }
    .header__canvas {
      pointer-events: none;
    }
  }
</style>