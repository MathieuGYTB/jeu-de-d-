$(document).ready(() => {
  const help = $('.help');
  const rules = $('.rules');
  rules.hide();
  // function to show img
  function Show() {
    rules.show()
  };

  //function to hide img
  function Hide() {
    rules.hide();
  };

  help.hover(Show);
  help.mouseout(Hide);
});