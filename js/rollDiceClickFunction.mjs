import './three.mjs'
import {Animate, stopAnimate, box, DeleteObject, boxTwo, AddObject} from './three.mjs'

// jquery
$(document).ready(() => {
  console.log('jQuery est prêt à l\'utilisation')

  // add variable
  const rollDice = $('#rollDice');
  const redPointOne = $('#redPointOne');
  const redPointTwo = $('#redPointTwo');
  const playerText1 = $('#playerText1');
  const playerText2 = $('#playerText2');
  const hold = $('#hold');
  const currentScore1 = $('#currentScore1');
  const currentScore2 = $('#currentScore2');
  var currentScoreOne = Number($('#currentScore1').text());
  var currentScoreTwo = Number($('#currentScore2').text());
  const totalScore1 = $('#totalScore1');
  const totalScore2 = $('#totalScore2');
  const newGame = $('h1');
  const p = $('p');
  let number = 0;

  // function to strat a new game
  function NewGame() {
    p.text(0);
    playerText1.css('opacity', '1');
    playerText2.css('opacity', '0.5');
    redPointOne.show();
    redPointTwo.hide();
  };

  // function to hold the Score
  function Hold() {
    totalScore1.text(currentScoreOne + number);
    Zero(currentScore1);
    playerText1.css('opacity', '0.5');
    playerText2.css('opacity', '1');
    redPointOne.hide();
    redPointTwo.show();
  };

  // function to play dice sound
  function playSound() {
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
  function otherNumber(currentScore, cSO) {
    currentScore.text(number + cSO);
  };

  // game function 
  function MoveDice() {
    currentScoreOne = currentScoreOne + number;
    currentScoreTwo = currentScoreTwo + number;
    setTimeout(AddObject, 4000, boxTwo);
    setTimeout(DeleteObject, 4000, box);
    playSound();
    DeleteObject(boxTwo);
    AddObject(box);
    Animate();
    setTimeout(stopAnimate, 4000);
    AddRandomNumber();
    if (number === 2) {
      //add temporary count
      setTimeout(otherNumber, 4000, currentScore1);
      // move dice on face 2
      setTimeout(()=> {
        boxTwo.rotation.y += 179;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.y -= 179
      }, 6000);
    } else if (number === 3) {
      //add temporary count
      setTimeout(otherNumber, 4000, currentScore1);
      // move dice on face 3
      setTimeout(() => {
        boxTwo.rotation.x += 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.x -= 90
      }, 6000); 
    } else if (number === 4) {
      //add temporary count
      setTimeout(otherNumber, 4000, currentScore1);
      //move dice on face 4
      setTimeout(() => {
        boxTwo.rotation.x -= 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.x += 90
      }, 6000);
    } else if (number === 5) {
      //add temporary count
      setTimeout(otherNumber, 4000, currentScore1);
      //move dice on face 5
      boxTwo.rotation.x == 0;
    } else if (number === 6) {
      //add temprary count
      setTimeout(otherNumber, 4000, currentScore1);
      //move dice on face 6
      setTimeout(() => {
        boxTwo.rotation.y += 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.y -= 90
      }, 6000);
    } else { 
        //player 2
        setTimeout(() => {
          playerText1.css('opacity', '0.5');
          playerText2.css('opacity', '1');
          redPointOne.hide();
          redPointTwo.show();
        }, 4000);
        // current score zero
        setTimeout(Zero, 4000, currentScore1);
        // move dice on face 1
        setTimeout(() => {
          boxTwo.rotation.y -= 90;
        }, 4000);
        setTimeout(() => {
          boxTwo.rotation.y += 90
        }, 6000); 
    };
    
  };
  
  // to add event on click on rollDice element
  newGame.click(NewGame);
  rollDice.click(MoveDice);
  hold.click(Hold);
  
  });