var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 4000);

$(document).ready(function(){
  $('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
  });

});