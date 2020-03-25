import * as THREE from 'three';
import { randomBetween } from "../../utils/helpers";

export default class {
  scene = new THREE.Scene();
  rayCast = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  camera;
  canvas;
  children;
  renderer;

  constructor(canvas, model) {
    console.log('construc');
    this.canvas = canvas;
    this.scene.add(model.scene);
    this.children = model.scene.children[0].children.map(child => {
      const rotationX = randomBetween(0.004, 0.008);
      const rotationY = randomBetween(0.004, 0.008);
      return { item: child, rotationX, rotationY }
    });
    this.camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.renderer = new THREE.WebGLRenderer({ alpha: true, canvas, antialias: true  });
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.camera.position.set(575, -140, 80);
    const hemilLight = new THREE.HemisphereLight( 0xF4F4FD, 0x42426E, 1.8 );
    this.scene.add(hemilLight);
    /*import('three/examples/jsm/controls/OrbitControls').then(({ OrbitControls }) => {
      new OrbitControls( this.camera, this.canvas);
    });*/
    this.camera.lookAt(this.scene.position);
    this.resize();
    this.mainLoop();
    window.addEventListener('resize', () => this.resize());
    this.canvas.addEventListener('mousemove', (e) => this.mouseMove(e));
  }

  mouseMove(e) {
    const { top } = this.canvas.getBoundingClientRect();
    this.mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      - ((e.clientY - top) / window.innerHeight) * 2 + 1
    );
  }

  resize() {
    console.log(this.camera);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  mainLoop() {
    this.children.forEach(child => {
      child.item.rotation.x -= child.rotationX;
      child.item.rotation.y -= child.rotationY;
    });
    const objs = this.children.map(obj => obj.item);
    this.rayCast.setFromCamera(this.mouse, this.camera);
    let intersects = this.rayCast.intersectObjects(objs, true);
    intersects.forEach(obj => {
      obj.object.rotation.x -= 0.02;
      obj.object.rotation.y -= 0.02;
      console.log(obj);
    });
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.mainLoop());
  }
}