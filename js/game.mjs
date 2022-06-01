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
  var currentScoreOne = Number(currentScore1.text());
  var currentScoreTwo = Number(currentScore2.text());
  const totalScore1 = $('#totalScore1');
  const totalScore2 = $('#totalScore2');
  const newGame = $('h1');
  const p = $('.p');
  let number = 0;
  var total1 = Number(totalScore1.text());
  var total2 = Number(totalScore2.text());
  const sectionP1 = $('#playerOne');
  const sectionP2 = $('#playerTwo');
  let player = true;
  const clickHold = hold.click(Hold);
  const myModal = $('.modal');
  const button = $('.yes');
  const modalTitle = $('.modal-title');
  const player_text_1 = $('#playerText1').text();
  const player_text_2 = $('#playerText2').text();
  const body = $('body');
  const restart = NewGame();

  // fonction to add random number between 1 and 6
  function AddRandomNumber() {
      number = Number(Math.floor(Math.random()*6) + 1)
      console.log(number)
    };

  // function to strat a new game
  function NewGame() {
    player = true;
    p.text(0);
    playerText1.css('opacity', '1');
    playerText2.css('opacity', '0.5');
    redPointOne.show();
    redPointTwo.hide();
    sectionP1.css('background-color', '#ebecec');
    sectionP2.css('background-color', '#f5f5f5');
    currentScoreOne = 0;
    currentScoreTwo = 0;
    total1 = 0;
    total2 = 0; 
    number = 0;
  };

  // function to add a modal message to the winner
  function winner(total, totalScore0, players) {
    if (total >= 100) {
      total == 100;
      totalScore0.text(100);
      modalTitle.text(`WINNER ${players} ! CONGRATULATION !`)
      myModal.modal('show');
      button.click(NewGame);
    };
  };
  // function to hold the Score
  function Hold() {
    if (player == true) {
      currentScoreOne = currentScoreOne + number;
      totalScore1.text(currentScoreOne + total1);
      total1 = currentScoreOne + total1;
      winner(total1, totalScore1, player_text_1);
      Zero();
      number = 0;
      playerText1.css('opacity', '0.5');
      playerText2.css('opacity', '1');
      redPointOne.hide();
      redPointTwo.show();
      sectionP1.css('background-color', '#f5f5f5');
      sectionP2.css('background-color', '#ebecec');
      player = false;
    } else if (player == false) {
      currentScoreTwo = currentScoreTwo + number;
      totalScore2.text(currentScoreTwo + total2);
      total2 = currentScoreTwo + total2;
      winner(total2, totalScore2, player_text_2);
      Zero();
      number = 0;
      playerText2.css('opacity', '0.5');
      playerText1.css('opacity', '1');
      redPointOne.show();
      redPointTwo.hide();
      sectionP2.css('background-color', '#f5f5f5');
      sectionP1.css('background-color', '#ebecec');
      player = true;
      
    };
  };


  // function to play dice sound
  function playSound() {
    const audio = new Audio();
    audio.src = "audio/diceSound.wav";
    audio.type = "audio/wav";
    audio.play();
  };
 
  // function to write 0 in current score when the random number is 1
  function Zero() {
    currentScore1.text(0);
    currentScore2.text(0);
    currentScoreOne = 0;
    currentScoreTwo = 0;
  };

  // function to write the add random number other than 1 in current score
  function otherNumber(currentScore, cSO) {
    currentScore.text(number + cSO);
    cSO = number + cSO;
  };
  
  // function to play when the number is between 2 and 6
  function Player(currentScore0, currentScoreZero) {
    if (number === 2) {
      //add current score
      setTimeout(otherNumber, 4000, currentScore0, currentScoreZero);
      // move dice on face 2
      setTimeout(()=> {
        boxTwo.rotation.y += 179;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.y -= 179
      }, 6000);
    } else if (number === 3) {
      //add temporary count
      setTimeout(otherNumber, 4000, currentScore0, currentScoreZero);
      // move dice on face 3
      setTimeout(() => {
        boxTwo.rotation.x += 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.x -= 90
      }, 6000); 
    } else if (number === 4) {
      //add temporary count
      setTimeout(otherNumber, 4000, currentScore0, currentScoreZero);
      //move dice on face 4
      setTimeout(() => {
        boxTwo.rotation.x -= 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.x += 90
      }, 6000);
    } else if (number === 5) {
      //add temporary count
      setTimeout(otherNumber, 4000, currentScore0, currentScoreZero);
      //move dice on face 5
      boxTwo.rotation.x == 0;
    } else if (number === 6) {
      //add temprary count
      setTimeout(otherNumber, 4000, currentScore0, currentScoreZero);
      //move dice on face 6
      setTimeout(() => {
        boxTwo.rotation.y += 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.y -= 90
      }, 6000);
    }  
  };

  // function to change player
  function ChangePlayer(boolean) {
    player = boolean;
    if (player == false) {
      setTimeout(() => {
        playerText1.css('opacity', '0.5');
        playerText2.css('opacity', '1');
        redPointOne.hide();
        redPointTwo.show();
        sectionP1.css('background-color', '#f5f5f5');
        sectionP2.css('background-color', '#ebecec');
      }, 4000);
      // current score zero
      setTimeout(Zero, 4000);
      number = 0;
      // move dice on face 1
      setTimeout(() => {
        boxTwo.rotation.y -= 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.y += 90
      }, 6000); 
    } else if (player == true) {
      setTimeout(() => {
        playerText2.css('opacity', '0.5');
        playerText1.css('opacity', '1');
        redPointTwo.hide();
        redPointOne.show();
        sectionP2.css('background-color', '#f5f5f5');
        sectionP1.css('background-color', '#ebecec');
      }, 4000);
      // current score zero
      setTimeout(Zero, 4000);
      number = 0;
      // move dice on face 1
      setTimeout(() => {
        boxTwo.rotation.y -= 90;
      }, 4000);
      setTimeout(() => {
        boxTwo.rotation.y += 90
      }, 6000);
    }
  };

  // function player 2
  function Player_2() {
    Player(currentScore2, currentScoreTwo);
    if (number == 1) {
      setTimeout(Zero, 4000);
      ChangePlayer(true);
    };
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
    if (player == true) {
      Player(currentScore1, currentScoreOne);
      if (number == 1) {
        setTimeout(Zero, 4000);
        ChangePlayer(false, currentScore2);
       };
    } else if (player == false) {
      Player_2();
    };
  };
  
  // to add event on click on rollDice and new game element
  newGame.click(NewGame);
  rollDice.click(MoveDice);
  
});