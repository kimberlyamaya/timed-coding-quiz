// Global Variables
var timerEl = document.getElementById("timer");
var startQuizBtnEl = document.querySelector("#start-quiz-btn");
var questionEl = document.getElementById("main-header1");
var mainPEl = document.getElementById("main-p");
var buttonDivEl = document.querySelector("#start-quiz-btn-container");
var timerStart = 90;


// countdown function
var countdown = function() {

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timerStart;
        timerStart--;
    },1000)

    console.log(timerStart--);
}

// remove start quiz button function 
var removeStartQuizButton = function() {
    startQuizBtnEl.remove();
}

// remove p underneath h1
var emptyPEl  = function() {
    mainPEl.remove();
}

// incorrect answer function
var incorrectAnswer = function() {
    var incorrectAnswerEl = document.createElement("p");
    // create this class in CSS
    // make text red and italized
    incorrectAnswerEl.className = "incorrect-answer-p"
    incorrectAnswerEl.textContent = "Incorrect"
    buttonDivEl.appendChild(incorrectAnswerEl);
}

// correct answer function
var correctAnswer = function() {
    var correctAnswerEl = document.createElement("p");
    //create this class in CSS
    // make it green
    correctAnswerEl.className = "correct-answer-p"
    correctAnswerEl.textContent = "Correct"
    buttonDivEl.append(correctAnswerEl);
}

// append options function to question1
var appendOptionButtonsQuestion1 = function() {
    
    // question 1 button option1
    var question1option1buttonEl = document.createElement("button");
    question1option1buttonEl.textContent = "Number";
    question1option1buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option1buttonEl);
    
    // question 1 button option2
    var question1option2buttonEl = document.createElement("button");
    question1option2buttonEl.textContent = "String";
    question1option2buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option2buttonEl);

    // question 1 button option3
    var question1option3buttonEl = document.createElement("button");
    question1option3buttonEl.textContent = "Line";
    question1option3buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option3buttonEl);

    // question 1 button option4
    var question1option4buttonEl = document.createElement("button");
    question1option4buttonEl.textContent = "Boolean";
    question1option4buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option4buttonEl);

    // onclick event for question 1 option3
    question1option3buttonEl.addEventListener("click", function() {
    // minus 10 seconds from the timer
    // how to get current time?? then -10 seconds
    
    timerStart = timerStart - 10;
    questionEl.innerHTML = "Which of the following would be used to ensure string value is converted to lower case?";
    // display a message in red text, incorrect
    // I need this to show up on the next question!!
    incorrectAnswer();
    })

    // onclick event for question 1 option1
    question1option1buttonEl.addEventListener("click", function() {
        // I need this to show up on the next question!!
        correctAnswer();
        
    })
    
    // onclick event for question 1 option2
    question1option2buttonEl.addEventListener("click", function() {
        // I need this to show up on the next question!!
        correctAnswer();
        
    })

    // onclick event for question 1 option4
    question1option4buttonEl.addEventListener("click", function() {
        // I need this to show up on the next question!!
        correctAnswer();
        
    })

};




// onclick event for the start quiz button
startQuizBtnEl.addEventListener("click", function() {
    // start the timer
    countdown();
    // dynamically change the HTML for var questionEl
    questionEl.innerHTML = "Which of the following is <u>NOT</u> considered a JavaScript Data Type?";
    // remove main p element
    emptyPEl();
    // remove start button from quiz by running the function
    removeStartQuizButton();
    // appending my button options
    appendOptionButtonsQuestion1();

});





