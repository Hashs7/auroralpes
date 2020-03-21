import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

export default class {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 5, window.innerWidth / window.innerHeight, 0.1, 1000 );
  canvas;
  renderer;

  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ alpha: false, canvas, antialias: true  });
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    new GLTFLoader().load('~/assets/models/asteroids-home.glb', (glb) => {
      console.log(glb);
      this.scene.add(glb.scene);
      const hemilLight = new THREE.HemisphereLight( 0x5E5E91, 0x5E5E91, 1 );
      this.scene.add(hemilLight);
      this.camera.position.z = 500;
      this.mainLoop();
      window.addEventListener('resize', this.resize);
    });

  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  mainLoop() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.mainLoop());
  }
}