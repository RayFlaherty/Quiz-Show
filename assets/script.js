var instructions =document.querySelector ("#instructions")
var question1El = document.querySelector("#question1");

const buttonEl=document.querySelector("#start");
    // ON CLICK TIMER START
    buttonEl.onclick = () =>{
      var timeleft = 60;
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "TIMES UP!";
    } else {
      document.getElementById("countdown").innerHTML = ":" + timeleft;
    }
    timeleft -= 1;
  }, 1000);
    //ON CLICK DISPLAY REPLACE INSTRUCTION WITH QUESTION ONE
    if (instructions== 'block'){
      instructions.style.display ="none"
    }
    
    var question1El

    }

    

