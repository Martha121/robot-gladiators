var allQuestions = [];
allQuestions.push(["THis is for first question","op1","op2","op3","op4",2,0]);
allQuestions.push(["THis is for second question","xxop1","op2","op3","op4",2,0]);
allQuestions.push(["THis is for third question","yyop1","op2","op3","op4",2,0]);
allQuestions.push(["THis is for fourth question","zzop1","op2","op3","op4",2,0]);
allQuestions.push(["THis is for fifth question","ffop1","op2","op3","op4",2,0]);
var indexOfCurrentQuestion = 0;
var score=0;
// Handle button event
var firstButtonEl = document.querySelector("#answer-1");
firstButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 1;
    console.log(allQuestions[indexOfCurrentQuestion]);
    indexOfCurrentQuestion++;
    // Check if last question
    if (indexOfCurrentQuestion<allQuestions.length){
        updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);}
    else{
        endAndSaveHighScore();
    }
    
})
var secondButtonEl = document.querySelector("#answer-2");
secondButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 2;
    console.log(allQuestions[indexOfCurrentQuestion]);
    indexOfCurrentQuestion++;
    if (indexOfCurrentQuestion<allQuestions.length){
        updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);}
    else{
        endAndSaveHighScore();
    }
})
var thirdButtonEl = document.querySelector("#answer-3");
thirdButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 3;
    console.log(allQuestions[indexOfCurrentQuestion]);
    indexOfCurrentQuestion++;
    if (indexOfCurrentQuestion<allQuestions.length){
        updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);}
    else{
        endAndSaveHighScore();
    }
})
var fourthButtonEl = document.querySelector("#answer-4");
fourthButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 4;
    console.log(allQuestions[indexOfCurrentQuestion]);
    indexOfCurrentQuestion++;
    if (indexOfCurrentQuestion<allQuestions.length){
        updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);}
    else{
        endAndSaveHighScore();
    }
})
// Compare answers to calculate total score
function calculateScore(){
    var totalScore = 0;
    for(var i=0; i<allQuestions.length; i++)
    {
        if (allQuestions[i][5] == allQuestions[i][6])
        {
            totalScore++;
        }
    }
    return totalScore;
}
//Initialize Quiz after start button
function onloadFunction()
{
    var myDiv = document.getElementById("final-score");
    myDiv.style.display = "none";
    updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);
}
//Update Questions 
function updateCurrQuestion(currQuestion){
  var mainQuestionEl = document.querySelector("#question");
  mainQuestionEl.textContent = currQuestion[0];
  firstButtonEl.textContent = currQuestion[1];
  secondButtonEl.textContent = currQuestion[2];
  thirdButtonEl.textContent = currQuestion[3];
  fourthButtonEl.textContent = currQuestion[4];
}

function endAndSaveHighScore()
{
    var totalScore;
    // Calculate high score
    totalScore = calculateScore();
    // Hide all question related elements
    var myDiv = document.getElementById("question-div");
    myDiv.style.display = "none";
    // Show textbox and button to save high score to local storage
    var finalScoreText = document.getElementById("high-score");
    finalScoreText.textContent = "Your high score is " + totalScore;
    var finalScoreDiv = document.getElementById("final-score");
    finalScoreDiv.style.display = "block";
    // Save to local storage

}
