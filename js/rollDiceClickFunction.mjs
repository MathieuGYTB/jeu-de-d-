import './three.mjs'
import {Animate, boxTwo, AddBox, DeleteBox, AddBoxTwo, DeleteBoxTwo} from './three.mjs'
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

var number = 0;
  
  // fonction to add random number between 1 and 6 after 5 sec
  function AddRandomNumber() {
      number = Number(Math.floor(Math.random()*6) + 1)
      console.log(number)
  };
  
  
  //function to move dice
  function MoveDice() {
    DeleteBoxTwo();
    AddBox();
    setTimeout(AddBoxTwo, 4000);
    setTimeout(DeleteBox, 4000); 
    playSound();
    Animate();
    AddRandomNumber();
    var currentScore = $('.currentScore');
    if (number === 1) {
      //player 2
      // current score zero
      currentScore.text(0)
      // move dice on face 1
      setTimeout(() => {
        boxTwo.rotation.y -= 90;
      },4000);
      setTimeout(() => {
        boxTwo.rotation.y += 90
      }, 6000);
    } else if (number === 2) {
      //add temporary count
      currentScore.text(number); 
      // move dice on face 2
      setTimeout(()=> {
        boxTwo.rotation.y += 179;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.y -= 179
      }, 6000);
    } else if (number === 3) {
      //add temporary count
      currentScore.text(number);
      // move dice on face 3
      setTimeout(() => {
        boxTwo.rotation.x += 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.x -= 90
      }, 6000); 
    } else if (number === 4) {
      //add temporary count
      currentScore.text(number);
      //move dice on face 4
      setTimeout(() => {
        boxTwo.rotation.x -= 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.x += 90
      }, 6000);
    } else if (number === 5) {
      //add temporary count
      currentScore.text(number);
      
      //move dice on face 5
      boxTwo.rotation.x == 0;
    } else if (number === 6) {
      //add temprary count
      currentScore.text(number);
      //move dice on face 6
      setTimeout(() => {
        boxTwo.rotation.y += 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.y -= 90
      }, 6000);
    } else {
      console.log('error')
    };
    number = number + number;
  };

  // to add event on click on rollDice element
  rollDice.click(MoveDice);
  
  });