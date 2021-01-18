var startTimer = document.querySelector("#startTimer");
var timerElement = document.querySelector("#countdown");

startTimer.addEventListener("click", function gameTimer() {
    var timeLeft = 60;
  console.log("startTimer");
    var timeInterval = setInterval(function() {
      timerElement.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerElement.textContent = "";
        clearInterval(timeInterval);
      }
  
    }, 1000);
  })


  