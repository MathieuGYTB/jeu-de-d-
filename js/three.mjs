import * as THREE from "https://unpkg.com/three@0.140.2/build/three.module.js";

  //get element canvas
export const canvas1 = document.getElementsByTagName('canvas');

  //add context 
export const gl = canvas1[0].getContext('webgl');

  //add scene, camera and renderer
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75, canvas1[0].width / canvas1[0].height, 0.1, 1000);
camera.position.z= 3;
export const renderer = new THREE.WebGLRenderer(
  {
  canvas: canvas1[0],
  alpha: true
  }
);

  // add box object
export const boxGeometry = new THREE.BoxGeometry(2,2,2);
export const boxMaterial = 
  [
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load('../images/dice1.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load('../images/dice6.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load('../images/dice3.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load('../images/dice4.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load('../images/dice5.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load('../images/dice2.png'), side: THREE.DoubleSide })
  ];

export const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(0,0,0);
scene.add(box);

export const boxTwo = new THREE.Mesh(boxGeometry, boxMaterial);
boxTwo.position.set(0,0,0);
scene.add(boxTwo);

export function render() {
boxTwo.position.set(0,0,0);
renderer.setClearColor(0xffffff, 0);
renderer.render(scene,camera);
requestAnimationFrame(render);
};

render();
export var request;
// function to animate Dice
export function Animate() {
  box.rotation.x += 0.1;
  box.rotation.y += 0.1;
  box.rotation.z += 0.1;
  renderer.setClearColor(0xffffff, 0);
  renderer.render(scene, camera);
  request = requestAnimationFrame(Animate);
};

export function AddObject(obj) {
  scene.add(obj);
};

export function DeleteObject(obj) {
  scene.remove(obj);
};
// function to stop animation
export function stopAnimate() {
  cancelAnimationFrame(request);
};
