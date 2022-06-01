$(document).ready(() => {
  const help = $('.help');
  const rules = $('#rules');
  rules.hide();
  
  // function to show img
  function Show() {
    rules.show();
  };

  //function to hide img
  function hide() {
  rules.hide();
  };

  help.mouseover(Show);
  help.mouseout(hide);
});