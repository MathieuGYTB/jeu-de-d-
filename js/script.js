import * as THREE from "https://unpkg.com/three@0.140.2/build/three.module.js";

// function to create canvas
function createCanvas(){

  //get element canvas
  const canvas = document.getElementsByClassName('number');

  // add context
  const gl = canvas.getContext('webgl');

  //add scene, camera and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 100;
  const renderer = new THREE.WebGLRenderer({
    canvas : canvas   
  });
  // add texture
  const texture = new THREE.TextureLoader().load('images/dice.png');

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
};

// jquery
$(document).ready(() => {
  console.log('jQuery est prêt à l\'utilisation')

  // function to play dice sound
  function playSound(){
    const audio = new Audio();
    audio.src = "audio/diceSound.wav";
    audio.type = "audio/wav";
    audio.play();
  };

  //const to add #rollDice element
  const rollDice = $('#rollDice');

  // fonction to add random number between 1 and 6 after 5 sec
  function addRandomNumber() {
    setTimeout(() => {
      let number = Number(Math.ceil(Math.random()*6))
    }, 5000);
  };
  
  // to add event on click on rollDice element
  rollDice.click(addRandomNumber).click(playSound).click(createCanvas);
  
});

