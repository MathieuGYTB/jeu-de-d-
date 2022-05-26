import './three.mjs'
import {animate, stopAnime} from './three.mjs'
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
      console.log(number)
    }, 5000);
  };

  // to add event on click on rollDice element
  rollDice.click(addRandomNumber).click(playSound).click(animate).click(stopAnime);
  
  });