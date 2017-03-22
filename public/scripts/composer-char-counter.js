$(document).ready(function(){
  $('.new-tweet form textarea').keyup(function(ev){
    let cnt = 140 - $(this).val().length;
    console.log(cnt);
    $('.new-tweet form .counter').text(cnt);
    if(cnt > 140){
      $('.new-tweet form .counter').css("color", "red");
    }
  })
})
