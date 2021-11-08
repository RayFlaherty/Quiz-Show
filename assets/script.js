
const startbtn=document.querySelector("#start");
    // ON CLICK TIMER START
    startbtn.onclick = () =>{
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
    
    document.querySelector('#start-menu').classList.toggle('hidden');
    
  const q1RightAnswer=document.getElementById("1C");
    //question one right answer
    q1RightAnswer.onclick = () =>{ 
      document.querySelector('#question1').classList.toggle('hidden');
      document.querySelector('#question2').classList.remove('hidden');
      document.getElementById('true').classList.toggle('hidden')
    }
  
    }
    

