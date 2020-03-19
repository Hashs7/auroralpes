<template>
  <section class="o-section--white">
    <Cloud class="cloud" />
    <div class="entry-content">
      <div class="o-container">
        <div class="entry-content__text">
          <h1 class="entry-content__title" data-scroll data-scroll-speed="2">{{ title }}</h1>
          <RichText class="entry-content__desc" :content="description" data-scroll data-scroll-speed="1.5" />
        </div>
        <canvas ref="canvas" class="canvas" width="800" height="500"/>
      </div>
    </div>
    <Cloud class="cloud--reversed" />
  </section>
</template>

<script>
  import gsap from 'gsap';
  import * as THREE from 'three';
  import Cloud from '@/assets/icons/festival/cloud-festival.svg';
  import RichText from '@/components/common/RichText.vue';

  export default {
    name: 'FestivalEntryContent',
    components: {
      RichText,
      Cloud ,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        width: null,
        height: null,
        scene: new THREE.Scene(),
        camera: null,
        renderer: null,
        canvasRef: null,
        controls: null,
        light: null,
        model: null,
      }
    },
    mounted() {
      if (process.server) return;
      this.$nextTick(() => {
        this.init();
        this.resize();
      });
      window.addEventListener('resize', this.resize)
    },
    methods: {
      init() {
        import('three/examples/jsm/loaders/GLTFLoader')
          .then(({ GLTFLoader }) => {
            const loader = new GLTFLoader();
            loader.load('../models/vaisseau2.glb', (gltf) => {
              this.scene.add(gltf.scene);
              this.camera.lookAt(gltf.scene.position);
              this.children = gltf.scene.children[0].children[0].children;

              gsap.timeline({ repeat: -1 })
                .to(gltf.scene.position, {
                  // y: 5,
                  z: 5,
                  duration: 2
                }, 'tag1')
                .to(gltf.scene.rotation, {
                  x: 0.3,
                  duration: 2
                }, 'tag1')
                .to(gltf.scene.position, {
                  // y: -5,
                  z: 0,
                  duration: 2
                }, 'tag2')
                .to(gltf.scene.rotation, {
                  x: 0,
                  duration: 2
                }, 'tag2')
                .to(gltf.scene.position, {
                  // y: 5,
                  z: -3,
                  duration: 2
                }, 'tag3')
                .to(gltf.scene.rotation, {
                  x: -0.2,
                  duration: 2
                }, 'tag3')
                .to(gltf.scene.position, {
                  // y: -5,
                  z: 0,
                  duration: 2
                }, 'end')
                .to(gltf.scene.rotation, {
                  x: 0,
                  duration: 2
                }, 'end')
            });
        });


        const ambiantLight = new THREE.AmbientLight(0xffffff, 2.5);
        this.scene.add(ambiantLight);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.set(12, 12, 10);

        this.renderer = new THREE.WebGLRenderer({ alpha: true, canvas: this.$refs.canvas, antialias: true  });
        this.mainLoop()
      },
      mainLoop() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.mainLoop);
      },
      resize() {
        this.width = this.$refs.canvas.clientWidth;
        this.height = this.$refs.canvas.clientHeight;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height, false);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .o-section--white {
    position: relative;
  }
  .cloud {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
  }
  .cloud--reversed {
    @extend .cloud;
    top: auto;
    bottom: 0;
    transform: translateY(50%) rotate(180deg);
  }
  .entry-content {
    padding: 350px 0;
    background: linear-gradient(-165deg, rgba(255,217,229,1) 0%, rgba(0,0,0,0) 50%);

    .o-container {
      position: relative;
    }
  }
  .entry-content__title {
    font-size: 60px;
    font-family: $font-accent;
    font-weight: bold;
    font-style: italic;
  }
  .entry-content__text {
    max-width: 530px;
  }
  .entry-content__desc {
    max-width: 380px;
  }
  .canvas {
    position: absolute;
    top: -100px;
    right: 80px;
  }
</style>