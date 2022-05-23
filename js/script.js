$(document).ready(() => {
  console.log('jQuery est prêt à l\'utilisation')

  let rollDice = $('#rollDice').click(() => {
    let number = Number(Math.ceil(Math.random()*6))
    $(`<div class="number">${number}</div>`).appendTo('.newGame')
  });  

});

