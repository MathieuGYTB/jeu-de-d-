import {createCanvas} from "./three";

$(document).ready(() => {
  console.log('jQuery est prêt à l\'utilisation')

  function playSound(){
    const audio = new Audio();
    audio.src = "audio/diceSound.wav";
    audio.type = "audio/wav";
    audio.play();
    
  };

  const rollDice = $('#rollDice');
  function addNumber() {
    setTimeout(() => {
      let number = Number(Math.ceil(Math.random()*6))
    }, 5000);
  };
  rollDice.click(addNumber).click(playSound).click(createCanvas);
  
});

