import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
let asteroid,
    renderer,
    camera,
    light,
    scrollWidth,
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
    asteroid.children[0].children.forEach((el, i) => {
        el.rotation.x += 0.005;
        el.rotation.y += 0.01;
    });
    render()
};
function getScrollbarWidth() {
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    const inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

const resizeRenderer = (e) => {
    wWidth = window.innerWidth - getScrollbarWidth();
    wHeight = window.innerHeight;
    camera.aspect = wWidth / wHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( wWidth, wHeight );
};

function onMouseMove(event) {
    // console.log(event, 'mousemove');

    // Update the mouse variable
    event.preventDefault();
    mouse.x = ((event.clientX / window.innerWidth) * 2 - 1) * 100;
    mouse.y = (- (event.clientY / window.innerHeight) * 2 + 1) * 100;
    // console.log(mouse.x, mouse.y );

    // Make the sphere follow the mouse
    const vector = new THREE.Vector3(mouse.x, mouse.y, -5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    // console.log(pos);
    pos.z = 5000;
    light.position.copy(pos);
}

export default () => {
    scrollWidth = getScrollbarWidth();
    wWidth  = window.innerWidth - scrollWidth;
    wHeight = window.innerHeight;

    camera = new THREE.PerspectiveCamera( 5, wWidth/wHeight, 0.1, 1000 );
    camera.position.z = 500;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    // renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( wWidth, wHeight );

    const hemilLight = new THREE.HemisphereLight( 0x5E5E91, 0x5E5E91, 1 );
    // const hemilLight = new THREE.HemisphereLight( 0xA5A5D9, 0xA5A5D9, 1 );
    // const hemilLight = new THREE.HemisphereLight( 0xE0E0FF, 0x5A5A86, 1 );
    scene.add( hemilLight );

    light = new THREE.PointLight(0xD9D9F9, 1, 0, 2);
    // light = new THREE.PointLight(0xA5A5D9, 0.8, 0, 2);
    light.position.set(0, 0, 100);
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
    if(wWidth < 992) {
        camera.position.x = 0;
        if(wHeight < 550) {
            renderer.setSize( wWidth, wHeight*1.7 );
        } else {
            renderer.setSize( wWidth, wHeight*1.5 );

        }

        loader.load('../models/asteroids-desktop.glb', ( gltf ) => {
            console.log(gltf);
            asteroid = gltf.scene;
            const scale = 3;
            asteroid.scale.x = scale;
            asteroid.scale.y = scale;
            asteroid.scale.z = scale;

            asteroid.children[0].children.forEach((el, i) => {
                console.log(i);
                switch(i) {
                    case 0:
                        el.position.x += 1;
                        el.position.y += 3;
                        break;

                    case 1:
                        el.position.x -= 2;
                        el.position.y += 2;
                        break;

                    case 2:
                        el.position.y -= 1;
                        el.position.x -= 7;
                        break;

                    case 3:
                        const scale = 0.007;
                        el.scale.x = scale;
                        el.scale.y = scale;
                        el.scale.z = scale;
                        el.position.x += 2;
                        el.position.y -= 1;
                        break;
                }
            });

            scene.add( asteroid );
            animate();
            renderer.render( scene, camera );
        });
    } else {
        camera.position.x = 10;

        loader.load('../models/asteroids-desktop.glb', ( gltf ) => {
            console.log(gltf);
            asteroid = gltf.scene;
            const scale = 3;
            asteroid.scale.x = scale;
            asteroid.scale.y = scale;
            asteroid.scale.z = scale;
            scene.add( asteroid );
            animate();
            renderer.render( scene, camera );
        });
    }





    // renderer.render( scene, camera );
/*
    const main = document.querySelector('#main');
    main.appendChild( renderer.domElement );*/
    const main = document.querySelector('#asteroid');
    main.replaceChild( renderer.domElement,  main.childNodes[0]);
};