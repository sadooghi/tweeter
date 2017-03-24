let passedTime = Date.now() - twt.created_at;
let created_time = "";
//less than a day
if ( passedTime < 86400000){
  //less than two hour : in mins
  if(passedTime < 7200000){
    created_time = `${passedTime / 60000} minutes ago`;
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