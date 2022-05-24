import * as THREE from "https://unpkg.com/three@0.140.2/build/three.module.js";
import { PerspectiveCamera } from "three";

function createCanvas(){
  const canvas = document.getElementsByClassName('number');
  const gl = canvas.getContext('webgl');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 30 / 30, 0.1, 1000);
  camera.position.z = -20;
  const renderer = new THREE.WebGLRenderer({
    canvas : canvas   
  });

  const boxGeometry = new THREE.BoxGeometry(5,5,5);
  const boxMaterial = new THREE.MeshBasicMaterial({color: "blue"});
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  scene.add(box);

  const animate = () => {
    box.rotation.y += 0.01;
  
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate(); 
};