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
        question: "Is this the third question?",
        possibleAnswers: ["This QueenA3", "This QueenB3", "This QueenC3", "This QueenD3"],
        correctAnswerIndex: 4,
        userCorrect: false
    }, {
        question: "Who is this fourth question for?",
        possibleAnswers: ["This QueenA4", "This QueenB4", "This QueenC4", "This QueenD4"],
        correctAnswerIndex: 3,
        userCorrect: false
    }, {
        question: "Why isn't this fifth question last?",
        possibleAnswers: ["This QueenA5", "This QueenB5", "This QueenC5", "This QueenD5"],
        correctAnswerIndex: 1,
        userCorrect: false
    }, {
        question: "Hey, a sixth question!",
        possibleAnswers: ["This QueenA6", "This QueenB6", "This QueenC6", "This QueenD6"],
        correctAnswerIndex: 1,
        userCorrect: false
    }, {
        question: "Am I doing this right? Seventh?",
        possibleAnswers: ["This QueenA7", "This QueenB7", "This QueenC7", "This QueenD7"],
        correctAnswerIndex: 2,
        userCorrect: false
    }, {
        question: "Eight is the last question?",
        possibleAnswers: ["This QueenA8", "This QueenB8", "This QueenC8", "This QueenD8"],
        correctAnswerIndex: 3,
        userCorrect: false
    }
]


var questionCount = 0;

var time = 10;
var intervalID;
var clockRunning = false;

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
}

function gameOver() {
    console.log("GAME OVER")
}
function timesUp() {
    clockRunning = false;
}

function askQuestion() {
    var currentQuiz = quizzes[questionCount]
    console.log(currentQuiz)

    $("#question1").html(currentQuiz.question);
    $("#answer_a").html(currentQuiz.possibleAnswers[0]);
    $("#answer_b").html(currentQuiz.possibleAnswers[1]);
    $("#answer_c").html(currentQuiz.possibleAnswers[2]);
    $("#answer_d").html(currentQuiz.possibleAnswers[3]);
    startTimer();
    console.log(time);

}

function nextQuestion() {
    time = 10;
    questionCount++;
    console.log("Next Question: ", questionCount)
    askQuestion();
    //this is where the you're right/wrong/gif of correct answer goes I THINK
    if (questionCount == quizzes.length) {
        gameOver();
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


$("#start-btn").on("click", function (event) {
    console.log("START GAME");
    $("#start-screen").hide();
    // var currentQuiz = quizzes[questionCount]
    // askQuestion(currentQuiz.question, currentQuiz.possibleAnswers)
    askQuestion();
});

$(".answer-btn").on("click", function (event) {
    nextQuestion();
})