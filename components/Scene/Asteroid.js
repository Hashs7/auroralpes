import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
let asteroid,
    renderer,
    camera,
    light,
    wWidth,
    wHeight;

const scene = new THREE.Scene();

let mouse = {
  x: 0,
  y: 0
};

const render = () => {
    renderer.autoClear = false;
    renderer.clear();
    renderer.render(scene, camera);
};

const animate = () => {
    requestAnimationFrame(animate);
    asteroid.children[0].rotation.x += 0.01;
    asteroid.children[0].rotation.y += 0.01;
    render()
};

const resizeRenderer = (e) => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    camera.aspect = wWidth / wHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( wWidth, wHeight );
};

function onMouseMove(event) {
    console.log(event, 'mousemove');

    // Update the mouse variable
    event.preventDefault();
    mouse.x = ((event.clientX / window.innerWidth) * 2 - 1) * 100;
    mouse.y = (- (event.clientY / window.innerHeight) * 2 + 1) * 100;
    console.log(mouse.x, mouse.y );

    // Make the sphere follow the mouse
    const vector = new THREE.Vector3(mouse.x, mouse.y, -5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    console.log(pos);
    pos.z = 50;
    light.position.copy(pos);
}

export default () => {
    wWidth  = window.innerWidth;
    wHeight = window.innerHeight;

    camera = new THREE.PerspectiveCamera( 5, wWidth/wHeight, 0.1, 1000 );
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize( wWidth, wHeight );

    const hemilLight = new THREE.HemisphereLight( 0x5A5A86, 0x5A5A86, 1 );
    // const hemilLight = new THREE.HemisphereLight( 0xE0E0FF, 0x5A5A86, 1 );
    scene.add( hemilLight );

    light = new THREE.PointLight(0xD9D9F9, 0.8, 0, 2);
    light.position.set(0, 0, 500);
    scene.add(light);

    // const mouseGeometry = new THREE.SphereGeometry(1, 0, 10);
    // const mouseMaterial = new THREE.MeshLambertMaterial({});
    // mouseMesh = new THREE.Mesh(mouseGeometry, mouseMaterial);

    // mouseMesh.position.set(0, 0, 0);
    // scene.add(mouseMesh);

    // When the mouse moves, call the given function
    document.addEventListener('mousemove', onMouseMove, false);

    const loader = new GLTFLoader();

    window.addEventListener("resize", resizeRenderer);

    loader.load( 'models/asteroidv2.glb', ( gltf ) => {
        console.log(gltf);
        asteroid = gltf.scene;
        scene.add( gltf.scene );
        animate()
    });
    renderer.render( scene, camera );

    const main = document.querySelector('#main');
    main.appendChild( renderer.domElement );
};