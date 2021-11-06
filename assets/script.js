var buttonEl = document.querySelector("#start");
var question1El = document.querySelector("#question1");



var startgame = function timer() {
  var timeleft = 60;
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "TIMES UP!";
    } else {
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
  }, 1000);
 

buttonEl.addEventListener("click",startgame);