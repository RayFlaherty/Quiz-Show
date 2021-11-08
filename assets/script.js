//var instructionsEl =document.querySelector ("#start-menu")
//var question1El = document.querySelector("#question1");
//var wrongAnswerQ1= document.querySelector ("#1A","#1B","1D");

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
    document.querySelector('#question1').classList.remove('hidden');
    document.getElementById('#instructions').classList.remove('start-menu')
    }


  
    
    var question1El

    

    

