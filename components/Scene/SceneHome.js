import * as THREE from 'three';
import { getRandomFloat } from "../../utils/helpers";

export default class {
  scene = new THREE.Scene();
  rayCast = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  resizeBoundFunction;
  mouseBoundFunction;
  camera;
  canvas;
  children;
  renderer;

  constructor(canvas, model) {
    this.canvas = canvas;
    if (window.innerWidth > 1200) {
      model.scene.scale.set(1.15, 1.15, 1.15)
    }
    if (window.innerWidth < 800) {
      model.scene.scale.set(0.8, 0.8, 0.8)
    }
    if (window.innerWidth < 425) {
      model.scene.scale.set(0.6, 0.6, 0.6)
    }
    this.scene.add(model.scene);
    this.children = model.scene.children[0].children.map(child => {
      const rotationX = getRandomFloat(0.004, 0.008);
      const rotationY = getRandomFloat(0.004, 0.008);
      console.log(rotationX, rotationY);
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
    this.resizeBoundFunction = this.resize.bind(this);
    this.mouseBoundFunction = (e) => this.mouseMove(e);
    window.addEventListener('resize', this.resizeBoundFunction);
    this.canvas.addEventListener('mousemove', this.mouseBoundFunction);
  }

  destroy() {
    console.log('destroyed');
    window.removeEventListener('resize', this.resizeBoundFunction);
    this.canvas.removeEventListener('mousemove', this.mouseBoundFunction);
  }

  mouseMove(e) {
    console.log('mousemove');
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