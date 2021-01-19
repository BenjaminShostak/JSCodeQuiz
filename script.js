var startTimer = document.querySelector("#startTimer");
var timerElement = document.querySelector("#countdown");

//questions
var questions = [
    { q: "Are JavaScript and Java the same thing?", a: "f" },
    { q: "JavaScript is one of the three pillars of web developement.", a: "t" },
    { q: "Javascript has to do with front end development entirely", a: "f" },
    { q: "A function will run even if it wasn't called.", a: "f" },
    { q: "w2 Schoolz website is the awesome for learning webd development", a: "f" },
];

startTimer.addEventListener("click", function () {
    timerStart();
    questionConfirm();
// The array of questions for our quiz game.


//separate into seperate functions
//timer

});

//event.preventDefault();

function timerStart(){
    

var timeLeft = 60;
console.log("startTimer");
var timeInterval = setInterval(function() {
  timerElement.textContent = timeLeft + " seconds remaining";
  timeLeft--;

  if (timeLeft === 0) {
    timerElement.textContent = "GAME OVER!";
    clearInterval(timeInterval);
  }
}, 1000);

};


function questionConfirm(){
  //window.localStorage.setItem  ---how to save score via local storage 
      // We start the game with a score of 0.
      var score = 0;

      //needto use JSon.stringify toconvert a regular object (store initals and score inside object) to a JSON object
    //JSON.parse is used to bring local storage JSON back as a Object


      // Loop over every question object
      for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        var answer = confirm(questions[i].q);
  
        // Compare answers
        if ((answer === true && questions[i].a === "t") ||
          (answer === false && questions[i].a === "f")) {
          // Increase score
          score++;
        //   alert("Correct!");
        }
        else {
        //   alert("Wrong!");
        }
      }
  
      // Show total at end
    //   alert("You got " + score + "/" + questions.length);
  
    //
};

  


  