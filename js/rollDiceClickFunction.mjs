import './three.mjs'
import {box} from './three.mjs'
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

var number;
  
  // fonction to add random number between 1 and 6 after 5 sec
  function AddRandomNumber() {
       number = Number(Math.floor(Math.random()*6) + 1)
      console.log(number)
  };
  //function to move dice
  function MoveDice() {
    AddRandomNumber();
    if (number === 1) {
      //player 2
      // move dice on face 1
      setTimeout(() => {
        box.rotation.y -= 90;
      },4000);
      setTimeout(() => {
        box.rotation.y += 90
      }, 6000);
    } else if (number === 2) {
      //add temporary count
      // move dice on face 2
     setTimeout(()=> {
      box.rotation.y += 179;
     }, 4000);
     setTimeout(() => {
      box.rotation.y -= 179
    }, 6000);
    } else if (number === 3) {
      //add temporary count
      // move dice on face 3
     setTimeout(() => {
       box.rotation.x += 90;
     }, 4000);
     setTimeout(() => {
      box.rotation.x -= 90
    }, 6000); 
    } else if (number === 4) {
      //add temporary count
      //move dice on face 4
      setTimeout(() => {
        box.rotation.x -= 90;
      }, 4000);
      setTimeout(() => {
        box.rotation.x += 90
      }, 6000);
    } else if (number === 5) {
      //add temporary count
      //move dice on face 5
      box.rotation.x == 0;
    } else if (number === 6) {
      //add temprary count
      //move dice on face 6
     setTimeout(() => {
       box.rotation.y += 90;
     }, 4000);
     setTimeout(() => {
      box.rotation.y -= 90
    }, 6000);
    } else {
      console.log('error')
    }
  };

  // to add event on click on rollDice element
  rollDice.click(playSound).click(MoveDice);
  
  });