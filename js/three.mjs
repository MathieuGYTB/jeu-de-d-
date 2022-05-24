import * as THREE from "https://unpkg.com/three@0.140.2/build/three.module.js";

// function to create canvas


  //get element canvas
  const canvas1 = document.getElementsByClassName('number');

  //add scene, camera and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas1.width / canvas1.height, 0.1, 1000);
  camera.position.z = 100;
  const renderer = new THREE.WebGLRenderer(
    {
    canvas: canvas1   
    }
  );
  // add texture
  const texture = new THREE.TextureLoader().load('../images/dice.png');

  // add box object
  const boxGeometry = new THREE.BoxGeometry(50,50,50);
  const boxMaterial = new THREE.MeshStandardMaterial({map: texture});
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  scene.add(box);

  // add light
  const light = new THREE.PointLight( 0xFFFFFF, 1, 50 );
	  light.position.set(0, 0, 100);
	  scene.add(light);

  // function to animate the object
  const animate = () => {
    box.rotation.y += 0.01;
  
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();