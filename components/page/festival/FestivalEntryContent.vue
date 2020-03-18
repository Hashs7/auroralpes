<template>
  <section class="o-section--white">
    <Cloud class="cloud" />
    <div class="entry-content">
      <div class="o-container">
        <div class="entry-content__text">
          <h1 class="entry-content__title">{{ title }}</h1>
          <RichText class="entry-content__desc" :content="description" />
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
  let dat
  if (process.client) {
    dat = require("dat.gui")
  }
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
        spotLight: null,
        lightHelper: null,
        spotLightHelper: null,
        ADD: -0.1,
        children: null
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
        import('three/examples/jsm/controls/OrbitControls')
          .then(({ OrbitControls }) => {
          this.controls = new OrbitControls( this.camera, this.$refs.canvas);
          this.controls.update();
        });
        import('three/examples/jsm/loaders/GLTFLoader')
          .then(({ GLTFLoader }) => {
            const loader = new GLTFLoader();
            loader.load('../models/vaisseau.glb', (gltf) => {
              this.scene.add(gltf.scene);
              this.children = gltf.scene.children[0].children[0].children;
              const gui = new dat.GUI();
              this.children.color3 = { h: .68, s: 0.6, v: 0.4 };
              const setColor = (color) => {
                this.children.forEach(child => {
                  console.log(child.material);
                  // child.material = new THREE.MeshPhongMaterial();
                  child.material = new THREE.MeshToonMaterial({
                    bumpScale: 1,
                    color: new THREE.Color().setHSL( color.h / 360, color.s, color.v),
                    // color: new THREE.Color().setHSL( alpha, 0.34, 0.4).multiplyScalar( 1 - beta * 0.2 ),
                    specular: 0.3,
                    shininess: 0.3,
                  })
                  // child.material.metalness = 0
                  // child.material.metalness = 0.2
                });
              }
              setColor(this.children.color3)
              const controller = gui.addColor(this.children, 'color3');
              controller.onChange((value) => {
                // Fires on every change, drag, keypress, etc.
                setColor(value)
              });



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

              // light = new THREE.AmbientLight(0x63b8ff);
            });
        });


        this.light = new THREE.DirectionalLight(0xffffff);
        const ambiantLight =new THREE.AmbientLight(0xffffff);
        this.light = new THREE.DirectionalLight(0xffffff);
        this.light.position.set(30, 10, 0)
        // const light = new THREE.HemisphereLight(0x00ff00, 0x0000ff);
        // this.lightHelper = new THREE.DirectionalLightHelper(this.light, 5, 0xffffff);


        this.scene.add(ambiantLight);
        this.scene.add(this.light);
        // this.scene.add(this.lightHelper);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.set(13, 13, 10);

        this.renderer = new THREE.WebGLRenderer({ alpha: true, canvas: this.$refs.canvas });
        this.mainLoop()
      },
      mainLoop() {
        // this.lightHelper.update();
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
    padding: 315px 0 440px 0;
    background: linear-gradient(-165deg, rgba(255,217,229,1) 0%, rgba(0,0,0,0) 50%);
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
    top: 315px;
    right: 0;
  }
</style>