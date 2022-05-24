$(document).ready(() => {
  console.log('jQuery est prêt à l\'utilisation')

  function playSound(){
    const audio = new Audio();
    audio.src = "audio/diceSound.wav";
    audio.type = "audio/wav";
    audio.play();
    
  };

  let rollDice = $('#rollDice');
  function addNumber() {
    setTimeout(() => {
      let number = Number(Math.ceil(Math.random()*6))
      $(`<div class="number">${number}</div>`).appendTo('.newGame')
    }, 5000);
  };
  rollDice.click(addNumber).click(playSound);
  
});

