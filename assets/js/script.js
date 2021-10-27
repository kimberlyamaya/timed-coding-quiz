// Global Variables
var timerEl = document.getElementById("timer");
var startQuizBtnEl = document.querySelector("#start-quiz-btn");
var question1El = document.getElementById("main-header1");
var mainPEl = document.getElementById("main-p");
var buttonDivEl = document.querySelector("#start-quiz-btn-container");


// countdown function
var countdown = function() {
    var timerStart = 90;

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timerStart;
        timerStart--;
    },1000)
}

// remove start quiz button function 
var removeStartQuizButton = function() {
    startQuizBtnEl.remove();
}

// remove p underneath h1
var emptyPEl  = function() {
    mainPEl.remove();
}

// append options function to question1
var appendOptionButtonsQuestion1 = function() {
    
    // question 1 button option1
    var question1option1buttonEl = document.createElement("button");
    question1option1buttonEl.innerHTML = "Number";
    question1option1buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option1buttonEl);
    
    // question 1 button option2
    var question1option2buttonEl = document.createElement("button");
    question1option2buttonEl.innerHTML = "String";
    question1option2buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option2buttonEl);

    // question 1 button option3
    var question1option3buttonEl = document.createElement("button");
    question1option3buttonEl.innerHTML = "Line";
    question1option3buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option3buttonEl);

    // question 1 button option4
    var question1option4buttonEl = document.createElement("button");
    question1option4buttonEl.innerHTML = "Boolean";
    question1option4buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option4buttonEl);
};




// onclick event for the start quiz button
startQuizBtnEl.addEventListener("click", function() {
    // start the timer
    countdown();
    // dynamically change the HTML for var question1El
    question1El.innerHTML = "Which of the following is <u>NOT</u> considered a JavaScript Data Type?";
    // remove main p element
    emptyPEl();
    // remove start button from quiz by running the function
    removeStartQuizButton();
    // appending my button options
    appendOptionButtonsQuestion1();
});





