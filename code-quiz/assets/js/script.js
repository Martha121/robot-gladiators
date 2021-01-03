var allQuestions = [];
allQuestions.push(["Commonly used data types DO Not include?","strings","booleans","alerts","numbers",3,0]);
allQuestions.push(["The condition in an if/else statement is enclosed with?","quotes","curly brackets","parenthesis","square brackets",3,0]);
allQuestions.push(["Arrays in JavaScript can be used to store?","numbers and strings","other arrays","booleans","all of the above",4,0]);
allQuestions.push(["String values must be enclosed within ___ when being assigned to variables","comas","curly brackets","quotes","parenthesis",3,0]);
allQuestions.push(["A very useful tool used during development and debbuging for printing content to the debugger is:","Javascript","terminal/bash","for loops","console.log",4,0]);

var indexOfCurrentQuestion = 0;
var allHighScores = [];
var totalScore = 0;
var timer = 75;
var timePenalty = 10;

// Handle button event during answers on quiz
var firstButtonEl = document.querySelector("#answer-1");
firstButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 1;
    evaluateAnswer();
})


var secondButtonEl = document.querySelector("#answer-2");
secondButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 2;
    evaluateAnswer();
})
var thirdButtonEl = document.querySelector("#answer-3");
thirdButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 3;
    evaluateAnswer();
})
var fourthButtonEl = document.querySelector("#answer-4");
fourthButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 4;
    evaluateAnswer();
})

function evaluateAnswer(){
    var myDiv = document.querySelector("#result-status");
    if(allQuestions[indexOfCurrentQuestion][6] == allQuestions[indexOfCurrentQuestion][5]){
        // Answer is correct, increase score and update message
        totalScore++;
        myDiv.textContent = "Correct!";
    }else{
        // Answer is incorrect, aply time penalty and update message
        timer = timer - timePenalty;
        myDiv.textContent = "Wrong!";
    }
    // increase counter
    indexOfCurrentQuestion++;
    // Confirm if we still have questions to answer and there is time left
    if ((indexOfCurrentQuestion<allQuestions.length)&&(timer>0)){
        updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);}
    else{
        ShowHighScore();
    }  
}
// When the user presses submit, we load the local stored high scores
// and add the new one to it, and save it back to localStorage
var submitScore = document.querySelector("#submit-high-score");
submitScore.addEventListener("click", function(){
    // Save to local storage
    loadHighScores();
    var initials = document.getElementById("user-initials");
    allHighScores.push(initials.value, totalScore);
    saveHighScores();
    window.location.replace("highscores.html");
})

//This fucntion initialize Quiz after start button is click
function onloadFunction()
{
    var myDiv = document.getElementById("final-score");
    myDiv.style.display = "none";
    updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);
    setInterval(quizTimer, 1000);
    updateTimerDisplay();
}

function quizTimer(){
    timer = timer-1;
    if(timer<0){
        timer = 0;
    }
    updateTimerDisplay();
}

function updateTimerDisplay(){
    var timerDiplay = document.querySelector("#timer-display");
    timerDiplay.textContent = "Time: " + timer;
}

//Update Questions 
function updateCurrQuestion(currQuestion){
  var mainQuestionEl = document.querySelector("#question");
  mainQuestionEl.textContent = currQuestion[0];
  firstButtonEl.textContent = "1. " + currQuestion[1];
  secondButtonEl.textContent ="2. " + currQuestion[2];
  thirdButtonEl.textContent ="3. " + currQuestion[3];
  fourthButtonEl.textContent ="4. " + currQuestion[4];
}

// We will hide the quiz question and show the
// final score and allow user to save their score
function ShowHighScore()
{
    // Hide all question related elements
    var myDiv = document.getElementById("question-div");
    myDiv.style.display = "none";
    // Show textbox and button to save high score to local storage
    var finalScoreText = document.getElementById("high-score");
    finalScoreText.textContent = "Your high score is " + totalScore;
    var finalScoreDiv = document.getElementById("final-score");
    finalScoreDiv.style.display = "block";
}

var saveHighScores = function() {
    localStorage.setItem("keyHighScores", JSON.stringify(allHighScores));
}

var loadHighScores = function(){
    var savedHighScores = localStorage.getItem("keyHighScores");
    if (!savedHighScores) {
        return false;
    }
    //Converts highscores from the string format back into an array of objects.
    allHighScores = JSON.parse(savedHighScores);
}