var goBackBtnEl = document.querySelector("#go-back-btn");
var clearHighScoresBtnEl = document.querySelector("#clear-high-scores");
var highScoresListEl = document.getElementById("high-scores-unordered-list");
var initialDisplay = document.createElement("li");
var scoreDisplay = document.createElement("li");
var yourInitialsInputForm = document.createElement("input");
var timerStart = 60;    

// on click event for go back btn
goBackBtnEl.addEventListener("click", function() {
    window.location.href="file:///C:/Users/kkimbell/UCDMain/timed-coding-quiz/index.html"
})

clearHighScoresBtnEl.addEventListener("click", function() {
    localStorage.clear();
    highScoresListEl.innerHTML = "";
    //clear the list from the page
})

// took this from script.js
// but adding this, each time page is refreshed, new blank line is added ;/
var highScores = JSON.parse(localStorage.getItem("highscores"));
            if (highScores === null) {
                highScores = [ ]
            }
        /*var newHighScore = {initials: yourInitialsInputForm.value, score: timerStart}
        highScores.push (newHighScore)
        localStorage.setItem("highscores", JSON.stringify(highScores));*/

console.log(highScores);

// how to iterate through array and display on the screen??

for (var i = 0; i < highScores.length; i++) {
    console.log(highScores[i]);

    var li = document.createElement("li");
        li.innerText = highScores[i].initials + " - " + highScores[i].score;
        li.className = "list-of-high-scores";
        highScoresListEl.appendChild(li);
    //document.getElementById("high-scores-li").innerHTML = highScores[i].initials;

    /*initialDisplay.textContent = highScores.initials;
    //initialDisplay = highScores.initials;
    //scoreDisplay = highScores.score
    // setup class at some point
    highScoresListEl.appendChild(initialDisplay);*/

    /*highScores.forEach((item)=>{
        
    });*/
}
