import './three.mjs'
import {Animate, boxTwo, box, DeleteObject, AddObject} from './three.mjs'
// jquery
$(document).ready(() => {
  console.log('jQuery est prêt à l\'utilisation')

  //const to add #rollDice element
  const rollDice = $('#rollDice');
  const redPointOne = $('#redPointOne');
  const redPointTwo = $('#redPointTwo');
  const playerText1 = $('#playerText1');
  const playerText2 = $('#playerText2');
  const hold = $('#hold');
  const currentScore1 = $('#currentScore1');
  const currentScore2 = $('#currentScore2');
  let number = 0;
  
  // function to play dice sound
  function playSound(){
    const audio = new Audio();
    audio.src = "audio/diceSound.wav";
    audio.type = "audio/wav";
    audio.play();
  };

  // fonction to add random number between 1 and 6
  function AddRandomNumber() {
      number = Number(Math.floor(Math.random()*6) + 1)
      console.log(number)
    };
    
  // function to write 0 in current score when the random number is 1
  
  function Zero(currentScore) {
    currentScore.text(0);
  };

  // function to write the add random number other than 1 in current score
  function otherNumber(currentScore) {
    currentScore.text(number);
  };

  // game function 
  function MoveDice() {
    DeleteObject(boxTwo);
    AddObject(box);
    setTimeout(AddObject(boxTwo), 4000);
    setTimeout(DeleteObject(box), 4000); 
    playSound();
    Animate();
    AddRandomNumber();
    if (number === 1) {
      //player 2
      playerText1.css('opacity', '0.5');
      playerText2.css('opacity', '1');
      redPointOne.hide();
      redPointTwo.show();
      // current score zero
      setTimeout(Zero(currentScore1), 4000);
      // move dice on face 1
      setTimeout(() => {
        boxTwo.rotation.y -= 90;
      },4000);
      setTimeout(() => {
        boxTwo.rotation.y += 90
      }, 6000);
    } else if (number === 2) {
      //add temporary count
      setTimeout(otherNumber(currentScore1), 4000);
      // move dice on face 2
      setTimeout(()=> {
        boxTwo.rotation.y += 179;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.y -= 179
      }, 6000);
    } else if (number === 3) {
      //add temporary count
      setTimeout(otherNumber(currentScore1), 4000);
      // move dice on face 3
      setTimeout(() => {
        boxTwo.rotation.x += 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.x -= 90
      }, 6000); 
    } else if (number === 4) {
      //add temporary count
      setTimeout(otherNumber(currentScore1), 4000);
      //move dice on face 4
      setTimeout(() => {
        boxTwo.rotation.x -= 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.x += 90
      }, 6000);
    } else if (number === 5) {
      //add temporary count
      setTimeout(otherNumber(currentScore1), 4000);
      //move dice on face 5
      boxTwo.rotation.x == 0;
    } else if (number === 6) {
      //add temprary count
      setTimeout(otherNumber(currentScore1), 4000);
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
    
  };

  // to add event on click on rollDice element
  rollDice.click(MoveDice);
  
  });