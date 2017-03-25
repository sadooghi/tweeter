/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



function createdTime(time){
  let passedTime = Date.now() - time;
  let created_time = "";
  //less than a day
  if ( passedTime < 86400000){
    //less than two hour : in mins
    if(passedTime < 7200000){
      created_time = `${Math.floor(passedTime / 60000)} minutes ago`;
    } else{
      //more than two hour : hrs
    created_time = `${Math.floor(passedTime / 3600000)} hours ago`;
    }
  }
  //more than a day and less than a month
  else if (passedTime > 86400000 && passedTime <= 2592000) {
    created_time = `${Math.floor(passedTime / 86400000)} days ago`;
  }
  //more than a month and less than a year
  else if(passedTime > 2592000 && passedTime <= 31540000000){
   created_time = `${Math.floor(passedTime / 2592000000)} months ago`;
  }
  //more than a year
  else{
    created_time = `${Math.floor(passedTime / 31540000000)} years ago`;
  }
  return created_time;
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

$(document).ready(function(){
function renderTweets(res){
  const timeDiff = Date.now() - res.currentTime;
  let str = "";
  $("#tweets-container").html("");


  res.tweets.forEach(function(twt){

    if(twt){
      if(twt.user){
        if(twt.user.avatars){
          if(twt.user.avatars.regular){
            if(twt.user.name){
              if(twt.user.handle){
                if(twt.content){
                  if(twt.content.text){
                    if(twt.created_at){
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
                                  <p class="tweet-text">${(`${escape(twt.content.text)}`)}</p>
                                </div>
                                <footer class="tweet-footer">
                                  <p class="posted-date">${createdTime(twt.created_at + timeDiff)}</p>
                                  <i class="fa fa-flag" aria-hidden="true"></i>
                                  <i class="fa fa-retweet" aria-hidden="true"></i>
                                  <button data-id="${twt._id}"><i class="fa fa-heart" aria-hidden="true"></i></button>
                                </footer>
                              </article>` + str
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  $("#tweets-container").append(str);
}

    $("#send-tweet").on('submit', function(ev){
      ev.preventDefault();
      var textarea = $(this).find("textarea");
      var counter = $(this).find("span");

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
            textarea.val("");
            counter.html(140);
            loadTweets();
          }
        });
      }
    });

  function loadTweets(){
    $.ajax({
      method: 'GET',
      url: `http://localhost:8080/tweets`,
      success: renderTweets,
      error: function( error ) {
        console.error( "load tweets failed: " + error.responseText );
      }


    });
    console.log('Porty='+PORT);
  }
  loadTweets();

  $("#nav-bar .right button").click(function(){
    $(".new-tweet").slideToggle(function(){
      $(".textarea-container textarea").focus();

    });

  });

  $('#nav-bar .right button').css('cursor', 'pointer');

  $("#tweets-container").on("click", ".tweet-footer button", function(){

    countLikes($(this));
  });

  let like = 0;
  function countLikes(button){

    console.log("id", button.data("id"));
    $.ajax({
      method: 'POST',
      url: `/tweets/likes`,
      data: {id: button.data("id")},
      success: loadTweets

    });

    like ++;
    console.log(like);
    return like;
  }

});


