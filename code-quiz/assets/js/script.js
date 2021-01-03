var allQuestions = [];
allQuestions.push(["THis is for first question","op1","op2","op3","op4",2,0]);
allQuestions.push(["THis is for second question","xxop1","op2","op3","op4",2,0]);
allQuestions.push(["THis is for third question","yyop1","op2","op3","op4",2,0]);
allQuestions.push(["THis is for fourth question","zzop1","op2","op3","op4",2,0]);
var indexOfCurrentQuestion = 0;

var firstButtonEl = document.querySelector("#answer-1");
firstButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 1;
    console.log(allQuestions[indexOfCurrentQuestion]);
    indexOfCurrentQuestion++;
    updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);
})
var secondButtonEl = document.querySelector("#answer-2");
secondButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 2;
    console.log(allQuestions[indexOfCurrentQuestion]);
    indexOfCurrentQuestion++;
    updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);
})
var thirdButtonEl = document.querySelector("#answer-3");
thirdButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 3;
    console.log(allQuestions[indexOfCurrentQuestion]);
    indexOfCurrentQuestion++;
    updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);
})
var fourthButtonEl = document.querySelector("#answer-4");
fourthButtonEl.addEventListener("click", function(){
    allQuestions[indexOfCurrentQuestion][6] = 4;
    console.log(allQuestions[indexOfCurrentQuestion]);
    indexOfCurrentQuestion++;
    updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);
})

function onloadFunction()
{
    updateCurrQuestion(allQuestions[indexOfCurrentQuestion]);
}

function updateCurrQuestion(currQuestion){
  var mainQuestionEl = document.querySelector("#question");
  mainQuestionEl.textContent = currQuestion[0];
  firstButtonEl.textContent = currQuestion[1];
  secondButtonEl.textContent = currQuestion[2];
  thirdButtonEl.textContent = currQuestion[3];
  fourthButtonEl.textContent = currQuestion[4];
}
