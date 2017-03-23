/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function(){
function renderTweets(atwt){
  let str = "";
  $("#tweets-container").html("");

  atwt.forEach(function(twt){

    str = `<article class="one-tweet">
              <div class="tweet-header">
                <div class="section left">
                  <img class="avatar" src=${twt.user.avatars.regular}>
                </div>
                <div class="section middle">
                  <h2 class="tweet-name">${twt.user.name}</h2>
                </div>
                <div class="section right">
                  <p class="username">${twt.user.handle}</p>
                </div>
              </div>
              <div class="body">
                <p class="tweet-text">${twt.content.text}</p>
              </div>
              <footer class="tweet-footer">
                <p class="posted-date">${twt.created_at}</p>
                <i class="fa fa-flag" aria-hidden="true"></i>
                <i class="fa fa-retweet" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
              </footer>
            </article>` + str

  });
  $("#tweets-container").append(str);
}

    $("#send-tweet").on('submit', function(ev){
      ev.preventDefault();
      var textarea = $(this).find("textarea");

      if(textarea.val().length > 140) {
        alert("your tweet should contain less than 140 charactors!");
      }else if(textarea.val() === "" || textarea.val() === null) {
        alert("we cant accept an empty tweet!")
      }else{
        let data = $(this).serialize();
        $.ajax({
          method: 'POST',
          url: `http://localhost:8080/tweets`,
          data: data,
          success: function() {
            loadTweets();
          }
        });
      }
    });

  function loadTweets(){
    $.ajax({
      method: 'GET',
      url: `http://localhost:8080/tweets`,
      success: renderTweets

    });
  }
  loadTweets();

  $("#nav-bar .right button").click(function(){
    $(".new-tweet").slideToggle(function(){
      $(".textarea-container textarea").focus();

    });

  });

});


