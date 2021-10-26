var timerEl = document.getElementById("timer");
var startQuizBtnEl = document.querySelector("#start-quiz-btn");

var countdown = function() {
    var timerStart = 90;

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timerStart;
        timerStart--;
    },1000)
}

startQuizBtnEl.addEventListener("click", function() {
    // start the timer
    countdown();
});
