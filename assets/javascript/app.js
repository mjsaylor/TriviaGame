//Screen loads with Title, instructions, and start button
//When start button is clicked,
//button disappears
//render question and four answers
//render countdown timer for 30 seconds

//Player clicks answer
//Check if answer is correct
//If answer is correct
//render: YES!, The correct answer was " " + gif
//If answer is incorrect
//render: No!, The correct answer was "" + gif
//Show right/wrong answer with gif for set time (~5secs?)
//Render next question
//After all questions, display end game stats
//quesitons right
//questions wrong
//unanswered
//Start Over button
//When start over button is clicked, 
//Return to startScreen

var quizzes = [
    {
        question: "Which Rupaul's Drag Race All Star is famously 'Here to make it clear'?",
        possibleAnswers: ["Alaska 5000", "Jinkx Monsoon", "Detox", "Roxxxy Andrews"],
        correctAnswerIndex: 4,
        userCorrect: false
    }, {
        question: "Which queens simultaneously landed splits during Pink's 'Stupid Girl'?",
        possibleAnswers: ["Katya & Kennedy Davenport", "Joslyn Fox & LaGanja Estranja", "Eureka O'Hara & Kalorie Karbdashian", "Gia Gunn & Alyssa Edwards"],
        correctAnswerIndex: 2,
        userCorrect: false
    }, {
        question: "Which queen returned to the competition in All Star's 2 during the incomparable performance of Rihanna's 'Shut Up & Drive'?",
        possibleAnswers: ["No one; contestants remained eliminated", "Alyssa Edwards", "Tatianna", "Double Return - Alyssa & Tatianna"],
        correctAnswerIndex: 4,
        userCorrect: false
    }, {
        question: "What notable trick kept Robbie Turner in the competition during the lip sync of 'Mesmerized' by Faith Evans?",
        possibleAnswers: ["Wig Reveal", "Death Drop", "Roller Skates", "Cracking a Bull Whip"],
        correctAnswerIndex: 3,
        userCorrect: false
    }, {
        question: "What was under Sasha Velour's wig in her S9 finale performance of Whitney Houston's 'So Emotional'?",
        possibleAnswers: ["Rose Petals", "Another Wig", "Dollar Bills", "A Crown"],
        correctAnswerIndex: 1,
        userCorrect: false
    }, {
        question: "During which song did Rupaul stop the music mid-lipsync for the first time in RPDR Herstory?",
        possibleAnswers: ["'Greedy' by Ariana Grande", "'Vibeology' by Paula Abdul", "'Stronger' by Britney Spears", "'Nasty' by Janet Jackson"],
        correctAnswerIndex: 1,
        userCorrect: false
    }, {
        question: "Which queen did not participate in the lip sync of Jessie J's 'Bang Bang'?",
        possibleAnswers: ["Aquaria", "Asia O'Hara", "Eureka O'Hara", "Kameron Michaels"],
        correctAnswerIndex: 2,
        userCorrect: false
    }, {
        question: "Which Chicago drag queen made her mark in drag race herstory with her unforgettable lip sync of Natalie Cole's 'This Will Be'?",
        possibleAnswers: ["Trixie Mattel", "Shea Coulee", "Dida Ritz", "Naomi Smalls"],
        correctAnswerIndex: 3,
        userCorrect: false
    }
]


var questionCount = 0;

var time = 10;
var intervalID;
var clockRunning = false;
var timeoutID;

var answerDisplay;

var correct = 0;
var incorrect = 0;
var unanswered = 0;

function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

function timer() {
    time--;
    var currentTime = timeConverter(time);
    console.log("CURRENT TIME: ", currentTime)
    $("#time-remaining").text(currentTime)
    if (currentTime <= 0) {
        // clockRunning = false;
        clearInterval(intervalID)
    }
}

function startTimer() {
    $("#time-remaining").text("00:10")
    console.log("timer started");
    if (!clockRunning) {
        clockRunning = true;
        intervalID = setInterval(timer, 1000)
    }
}

function timesUp() {
    console.log("Times UP")
    //set a timeout after 10 seconds
}

function gameOver() {
    console.log("GAME OVER")
}

function showAnswer() {
    $("#quiz-display").hide();
    $("#show-the-answer").text("CORRECT!");
    $("#show-the-answer").text("WRONG!");
    // append gifdiv to #show-the-answer
    nextQuestion();
}
function isAnswerCorrect(guess) {
    timeoutID = setTimeout(nextQuestion, 5000);
    
}

function askQuestion() {
    clearTimeout(timeoutID)
    var currentQuiz = quizzes[questionCount]
    console.log(currentQuiz)
    setTimeout(showAnswer, 10000)

    $("#question1").html(currentQuiz.question);
    $("#answer_a").html(currentQuiz.possibleAnswers[0]);
    $("#answer_b").html(currentQuiz.possibleAnswers[1]);
    $("#answer_c").html(currentQuiz.possibleAnswers[2]);
    $("#answer_d").html(currentQuiz.possibleAnswers[3]);
    startTimer();


}

function nextQuestion() {
    $("#quiz-display").show();
    $("#show-the-answer").hide();
    time = 10;
    questionCount++;
    console.log("Next Question: ", questionCount)
    askQuestion();
    //this is where the you're right/wrong/gif of correct answer goes I THINK
    if (questionCount > quizzes.length) {
        gameOver();
    }
}



$("#start-btn").on("click", function (event) {
    console.log("START GAME");
    $("#start-screen").hide();
    // var currentQuiz = quizzes[questionCount]
    // askQuestion(currentQuiz.question, currentQuiz.possibleAnswers)
    askQuestion();
});


$(".answer-btn").on("click", function (event) {
    nextQuestion();
    var playerGuess = $(this).attr;
    console.log("GUESS: ", playerGuess);
    isAnswerCorrect(playerGuess);
})
//if answer is correct, correct++
//if answer is incorrect, correct++
//if no answer is clicked, unanswered++
// $(".answer-btn").click(nextQuestion);