$(document).ready(function(){
  $('.new-tweet form textarea').keyup(function(ev){
    let cnt = 140 - $(this).val().length;
    console.log(cnt);
    $('.new-tweet .counter').text(cnt);
    if(cnt < 0){
      $('.new-tweet .counter').css("color", "red");
    }
  })
})
