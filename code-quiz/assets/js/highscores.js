var loadHighScores = function(){
    var savedHighScores = localStorage.getItem("keyHighScores");
    if (!savedHighScores) {
        return false;
    }
    //Converts highscores from the string format back into an array of objects.
    allHighScores = JSON.parse(savedHighScores);
}

var allHighScores = [];

function onloadFunction(){
    loadHighScores();
    displayHighScores();
}

function displayHighScores()
{
  console.log(allHighScores); 
  for(var i=0; i<allHighScores.length; i++)
  {
    createScoreEl(allHighScores[i], allHighScores[i+1]);
    i++;
  }
}

function createScoreEl(scoreInitials, scoreValue) {
    // create div to hold score info and add to list item
    var scoreInfoEl = document.createElement("div");
    scoreInfoEl.className = "score-info";
    
    // add HTML content to div
    scoreInfoEl.innerHTML = "<h3 class='task-name'>" + scoreInitials + " " + scoreValue + "</h3>";

    var highScoresDiv = document.querySelector("#highscores-div");
    highScoresDiv.append(scoreInfoEl);
  
  }

  var goBackButton = document.querySelector("#go-back");
  goBackButton.addEventListener("click", function(){
    // Redirect to start page
    window.location.replace("index.html");
})

var clearScoresButton = document.querySelector("#clear-high-scores");
clearScoresButton.addEventListener("click", function(){
    localStorage.clear();
    // Reload page here
    window.location.reload();
})