// Global Variables
var timerEl = document.getElementById("timer");
var startQuizBtnEl = document.querySelector("#start-quiz-btn");
var questionEl = document.getElementById("main-header1");
var mainPEl = document.getElementById("main-p");
var buttonDivEl = document.querySelector("#start-quiz-btn-container");
var timerStart = 60;
var question1option1buttonEl = document.createElement("button");
var question1option2buttonEl = document.createElement("button");
var question1option3buttonEl = document.createElement("button");
var question1option4buttonEl = document.createElement("button");
var question2option1buttonEl = document.createElement("button");
var question2option2buttonEl = document.createElement("button");
var question2option3buttonEl = document.createElement("button");
var question2option4buttonEl = document.createElement("button");
var question3option1buttonEl = document.createElement("button");
var question3option2buttonEl = document.createElement("button");
var question3option3buttonEl = document.createElement("button");
var question3option4buttonEl = document.createElement("button");
var question4option1buttonEl = document.createElement("button");
var question4option2buttonEl = document.createElement("button");
var question4option3buttonEl = document.createElement("button");
var question4option4buttonEl = document.createElement("button");    
var yourFinalScoreP = document.createElement("p");
var yourInitials = document.createElement("p");
var yourInitialsInputForm = document.createElement("input");
var submitScoreButtonEl = document.createElement("submit");


// countdown function
var countdown = function() {

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timerStart;
        timerStart--;
    },1000)

    // need timer to stop at 0
    if (--timer < 0) {
        timer = 60;

        clearInterval(timeInterval);
    }

    return timeInterval;

    // need to return a value to pass to final score
    
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
    timerStart = timerStart - 10;
    var incorrectAnswerEl = document.createElement("p");  
    // create this class in CSS
    // make text red and italized
    incorrectAnswerEl.className = "incorrect-answer-p"
    incorrectAnswerEl.textContent = "Incorrect"
    buttonDivEl.appendChild(incorrectAnswerEl);
    setTimeout(function () {
        incorrectAnswerEl.style.display="none"
    },2000);  
}

// correct answer function
var correctAnswer = function() {
    var correctAnswerEl = document.createElement("p");
    //create this class in CSS
    // make it green
    correctAnswerEl.className = "correct-answer-p"
    correctAnswerEl.textContent = "Correct"
    buttonDivEl.append(correctAnswerEl);
    setTimeout(function () {
        correctAnswerEl.style.display="none"
    },2000);
}

// append options function to question1
var appendOptionButtonsQuestion1 = function() {
    
    // question 1 button option1
    question1option1buttonEl.textContent = "Number";
    question1option1buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option1buttonEl);
    
    // question 1 button option2
    question1option2buttonEl.textContent = "String";
    question1option2buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option2buttonEl);

    // question 1 button option3
    question1option3buttonEl.textContent = "Line";
    question1option3buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option3buttonEl);

    // question 1 button option4
    question1option4buttonEl.textContent = "Boolean";
    question1option4buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question1option4buttonEl);

 
    // onclick event for question 1 option1
    question1option1buttonEl.addEventListener("click", function() {
        updateOptionButtonsQuestion2();
        incorrectAnswer();
})

    // onclick event for question 1 option2
    question1option2buttonEl.addEventListener("click", function() {
        updateOptionButtonsQuestion2();
        incorrectAnswer();
    
})

    // onclick event for question 1 option3
    question1option3buttonEl.addEventListener("click", function() {
        // display a message in red text, incorrect
        // I need this to show up on the next question!!
        updateOptionButtonsQuestion2();
        correctAnswer();
})

    // onclick event for question 1 option4
    question1option4buttonEl.addEventListener("click", function() {
        updateOptionButtonsQuestion2();
        incorrectAnswer();
    
})


};


// question 2 and options dynamically change function
var updateOptionButtonsQuestion2 = function() {

    // dynamically change Question
    questionEl.innerHTML = "Which of the following would be used to convert a string to lower case?";

    // question 2 button option1
    question2option1buttonEl.textContent = "toLowerCase";
    question2option1buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question2option1buttonEl);
    // remove question1 option1 button el
    question1option1buttonEl.remove();

    // question 2 button option2
    question2option2buttonEl.textContent = "toUpperCase";
    question2option2buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question2option2buttonEl);
    // remove question1 option2 button el
    question1option2buttonEl.remove();

    // question 2 button option3
    question2option3buttonEl.textContent = "toString";
    question2option3buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question2option3buttonEl);
    // remove question1 option3 button el
    question1option3buttonEl.remove();

    // question 2 button option4
    question2option4buttonEl.textContent = "startsWith";
    question2option4buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question2option4buttonEl);
    // remove question1 option4 button el
    question1option4buttonEl.remove();


    // onclick event for question 2 option1
    question2option1buttonEl.addEventListener("click", function() {
        // display a message in red text, incorrect
        // I need this to show up on the next question!!
        updateOptionButtonsQuestion3();
        correctAnswer();
    })


    // onclick event for question 2 option2
    question2option2buttonEl.addEventListener("click", function() {
        updateOptionButtonsQuestion3();
        incorrectAnswer();
    })

    // onclick event for question 2 option3
    question2option3buttonEl.addEventListener("click", function() {
        updateOptionButtonsQuestion3();
        incorrectAnswer();
    })

    // onclick event for question 2 option4
    question2option4buttonEl.addEventListener("click", function() {
        updateOptionButtonsQuestion3();
        incorrectAnswer();
            
    })
}; 


// question 3 and options dynamically change function
var updateOptionButtonsQuestion3 = function() {

    // dynamically change Question
    questionEl.innerHTML = "How would you call or run the function named timerCountdown?";

    // question 3 button option1
    question3option1buttonEl.textContent = "run timerCountdown";
    question3option1buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question3option1buttonEl);
    // remove question2 option1 button el
    question2option1buttonEl.remove();

    // question 3 button option2
    question3option2buttonEl.textContent = "call timerCountdown";
    question3option2buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question3option2buttonEl);
    // remove question2 option2 button el
    question2option2buttonEl.remove();

    // question 3 button option3
    question3option3buttonEl.textContent = "run timerCountdown()";
    question3option3buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question3option3buttonEl);
    // remove question2 option3 button el
    question2option3buttonEl.remove();

    // question 3 button option4
    question3option4buttonEl.textContent = "timerCountdown()";
    question3option4buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question3option4buttonEl);
    // remove question2 option4 button el
    question2option4buttonEl.remove();


    // onclick event for question 3 option1
    question3option1buttonEl.addEventListener("click", function() {
        // display a message in red text, incorrect
        // I need this to show up on the next question!!
        updateOptionButtonsQuestion4();
        incorrectAnswer();
    })


    // onclick event for question 3 option2
    question3option2buttonEl.addEventListener("click", function() {
        updateOptionButtonsQuestion4();
        incorrectAnswer();
    })

    // onclick event for question 3 option3
    question3option3buttonEl.addEventListener("click", function() {
        updateOptionButtonsQuestion4();
        incorrectAnswer();
    })

    // onclick event for question 3 option4
    question3option4buttonEl.addEventListener("click", function() {
        updateOptionButtonsQuestion4();
        correctAnswer();    
            
    })
}; 


// question 4 and options dynamically change function
var updateOptionButtonsQuestion4 = function() {

    // dynamically change Question
    questionEl.innerHTML = "When iteratng through an array, what number is the first value?";

    // question 4 button option1
    question4option1buttonEl.textContent = "0";
    question4option1buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question4option1buttonEl);
    // remove question2 option1 button el
    question3option1buttonEl.remove();

    // question 4 button option2
    question4option2buttonEl.textContent = "1";
    question4option2buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question4option2buttonEl);
    // remove question3 option2 button el
    question3option2buttonEl.remove();

    // question 4 button option3
    question4option3buttonEl.textContent = "2";
    question4option3buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question4option3buttonEl);
    // remove question3 option3 button el
    question3option3buttonEl.remove();

    // question 4 button option4
    question4option4buttonEl.textContent = "3";
    question4option4buttonEl.className = "option-btn";
    buttonDivEl.appendChild(question4option4buttonEl);
    // remove question3 option4 button el
    question3option4buttonEl.remove();


    // onclick event for question 4 option1
    question4option1buttonEl.addEventListener("click", function() {
        // display a message in red text, incorrect
        // I need this to show up on the next question!!
        allDonePage();
        correctAnswer();
    })


    // onclick event for question 4 option2
    question4option2buttonEl.addEventListener("click", function() {
        allDonePage();
        incorrectAnswer();
    })

    // onclick event for question 4 option3
    question4option3buttonEl.addEventListener("click", function() {
        allDonePage();
        incorrectAnswer();
    })

    // onclick event for question 4 option4
    question4option4buttonEl.addEventListener("click", function() {
        allDonePage();
        incorrectAnswer();
            
    })
}; 

// all done page function
var allDonePage = function() {
    questionEl.innerHTML = "All done!";
    // remove all buttons
    question4option1buttonEl.remove();
    question4option2buttonEl.remove();
    question4option3buttonEl.remove();
    question4option4buttonEl.remove();

    //assign the classs
    //yourFinalScoreP.className="";
    yourFinalScoreP.textContent = "your final score is: " // + returned value from timer 
    buttonDivEl.appendChild(yourFinalScoreP);

    //asign the class
    //yourinitials.className="";
    yourInitials.textContent = "Enter intials:"
    buttonDivEl.append(yourInitials, yourInitialsInputForm);

    //assign the class
    submitScoreButtonEl.className="option-btn";
    submitScoreButtonEl.textContent="Submit"
    buttonDivEl.appendChild(submitScoreButtonEl);

    submitScores();


}

// submit scores function
var submitScores = function() {
    submitScoreButtonEl.addEventListener("click", function() {
        // trying to save my initials
        localStorage.setItem("initials", yourInitials);
        // will need to save current score too

        // call the high score page
        // in the high score page is where I will call the saved local storage info

    })
}

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





