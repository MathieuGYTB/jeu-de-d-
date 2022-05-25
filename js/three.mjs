import * as THREE from "https://unpkg.com/three@0.140.2/build/three.module.js";

//function to create canvas whith scene, object and animate
export function createCanvas() {

  //get element canvas
  const canvas1 = document.getElementsByTagName('canvas');

  //add context 
  const gl = canvas1[0].getContext('webgl');
  //add scene, camera and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas1.width / canvas1.height, 0.1, 1000);
  camera.position.z = 100;
  const renderer = new THREE.WebGLRenderer(
    {
    canvas: canvas1[0],
    alpha: true  
    }
  );
 

  // add box object
  const boxGeometry = new THREE.BoxGeometry(50,50,50);
  const boxMaterial = 
  [
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../images/dice1.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../images/dice2.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../images/dice3.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../images/dice4.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../images/dice5.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../images/dice6.png'), side: THREE.DoubleSide })
  ];

  const material = new THREE.MeshFaceMaterial( boxMaterial)
  const box = new THREE.Mesh(boxGeometry, material);
  scene.add(box);

  // add light
  const light = new THREE.PointLight( 0xFFFFFF, 1, 50 );
	light.position.set(0, 0, 100);
	scene.add(light);

  // function to animate the object
  function animate() {
    
    box.rotation.y += 0.01;
    renderer.setClearColor( 0xffffff, 0 )
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
animate();
};