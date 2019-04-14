var possibleAnswerStates = {
    correct: "correct",
    incorrect: "incorrect",
    unanswered: "unanswered",
}
var quizzes = [
    {
        question: "Which Rupaul's Drag Race All Star is famously 'Here to make it clear'?",
        possibleAnswers: ["Alaska 5000", "Jinkx Monsoon", "Detox", "Roxxxy Andrews"],
        correctAnswerIndex: 3,
        answerState: possibleAnswerStates.unanswered,
        renderGif: true,
        gif: "assets/images/gifs/roxxxy.gif"
    }, {
        question: "Which queens simultaneously landed splits during Pink's 'Stupid Girl'?",
        possibleAnswers: ["Katya & Kennedy Davenport", "Joslyn Fox & LaGanja Estranja", "Eureka O'Hara & Kalorie Karbdashian", "Gia Gunn & Alyssa Edwards"],
        correctAnswerIndex: 1,
        answerState: possibleAnswerStates.unanswered,
        renderGif: true,
        gif: "assets/images/gifs/stupidgirl.gif"
    }, {
        question: "Which queen returned to the competition in All Star's 2 during the incomparable performance of Rihanna's 'Shut Up & Drive'?",
        possibleAnswers: ["No one; contestants remained eliminated", "Alyssa Edwards", "Tatianna", "Double Return - Alyssa & Tatianna"],
        correctAnswerIndex: 3,
        answerState: possibleAnswerStates.unanswered,
        renderGif: true,
        gif: "assets/images/gifs/alyssatatianna.gif"
    }, {
        question: "What notable trick kept Robbie Turner in the competition during the lip sync of 'Mesmerized' by Faith Evans?",
        possibleAnswers: ["Wig Reveal", "Death Drop", "Roller Skates", "Cracking a Bull Whip"],
        correctAnswerIndex: 2,
        answerState: possibleAnswerStates.unanswered,
        renderGif: true,
        gif: "assets/images/gifs/robbie.gif"
    }, {
        question: "What was under Sasha Velour's wig in her S9 finale performance of Whitney Houston's 'So Emotional'?",
        possibleAnswers: ["Rose Petals", "Another Wig", "Dollar Bills", "A Crown"],
        correctAnswerIndex: 0,
        answerState: possibleAnswerStates.unanswered,
        renderGif: true,
        gif: "assets/images/gifs/sasha.gif"
    }, {
        question: "During which song did Rupaul stop the music mid-lipsync for the first time in RPDR Herstory?",
        possibleAnswers: ["'Greedy' by Ariana Grande", "'Vibeology' by Paula Abdul", "'Stronger' by Britney Spears", "'Nasty' by Janet Jackson"],
        correctAnswerIndex: 0,
        answerState: possibleAnswerStates.unanswered,
        renderGif: true,
        gif: "assets/images/gifs/valentina.gif"
    }, {
        question: "Which queen did not participate in the lip sync of Jessie J's 'Bang Bang'?",
        possibleAnswers: ["Aquaria", "Asia O'Hara", "Eureka O'Hara", "Kameron Michaels"],
        correctAnswerIndex: 1,
        answerState: possibleAnswerStates.unanswered,
        renderGif: true,
        gif: "assets/images/gifs/asia.gif"
    }, {
        question: "Which Chicago drag queen made her mark in drag race herstory with her unforgettable lip sync of Natalie Cole's 'This Will Be'?",
        possibleAnswers: ["Trixie Mattel", "Shea Coulee", "Dida Ritz", "Naomi Smalls"],
        correctAnswerIndex: 2,
        answerState: possibleAnswerStates.unanswered,
        renderGif: true,
        gif: "assets/images/gifs/dida.gif"
    }
]

var possibleGameStates = {
    start: "Start",
    gameOver: "Game Over",
    askQuestion: "Ask Question",
    showAnswer: "Show Answer",
}

var gameState;
var currentQuizIndex = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var time = 20;
var intervalID;
// var clockRunning = false;
var timeoutID;

function renderApp() {
    console.log(`intervalID ${intervalID}`)
    var currentQuiz = quizzes[currentQuizIndex]

    if (gameState == possibleGameStates.start) {
        //show start screen
        $("#gameplay").hide();
        $("#gameover").hide();
        $("#answer-container").hide();
        $("#start-screen").show();
    }
    if (gameState == possibleGameStates.gameOver) {
        $("#gameplay").hide();
        $("#answer-container").hide();
        $("#correct").text(`Correct: ${correct}`)
        $("#incorrect").text(`Incorrect: ${incorrect}`)
        $("#unanswered").text(`Unanswered: ${unanswered}`)
        $("#gameover").show();

    }
    if (gameState == possibleGameStates.askQuestion) {
        $("#gameplay").show();
        $("#time-remaining").show();
        $("#start-screen").hide();
        $("#gameplay").show();
        $("#question1").html(currentQuiz.question);
        $("#answer_a").html(currentQuiz.possibleAnswers[0]);
        $("#answer_b").html(currentQuiz.possibleAnswers[1]);
        $("#answer_c").html(currentQuiz.possibleAnswers[2]);
        $("#answer_d").html(currentQuiz.possibleAnswers[3]);

        $("#quiz-display").show();
        $("#answer-container").hide();
        $("#time-remaining").text(`${time} Seconds Remain!`)
    }
    if (gameState == possibleGameStates.showAnswer) {
        var answer = currentQuiz.possibleAnswers[currentQuiz.correctAnswerIndex]
        $("#gameplay").hide();
        $("#time-remaining").hide();
        $("#quiz-display").hide();
        $("#answer-container").show();
        if (currentQuiz.answerState == possibleAnswerStates.correct) {
            $("#show-the-answer").text(`${answer} ...Shantay you STAY!`)
        } else if (currentQuiz.answerState == possibleAnswerStates.incorrect) {
            $("#show-the-answer").text(`Sashay Away... The correct answer was ${answer}!`)
        } else {
            $("#show-the-answer").text(`Has Rigga-Morris set in? You meant to say ${answer}`)
        }

        if (currentQuiz.renderGif) {
            $("#gif").html(`<img src="${currentQuiz.gif}">`)
            currentQuiz.renderGif = false;
        }

        console.log("THIS IS THE ANSWER SCREEN")
    }
    console.log(gameState)
    console.log(currentQuizIndex)
    console.log("CURRENT TIME: ", time)
    
}

function setUpGame() {
    gameState = possibleGameStates.start;
    currentQuizIndex = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0
    renderApp();
}

function askQuestion() {
    gameState = possibleGameStates.askQuestion;
    time = 20;
    startTimer();
    renderApp();
}

function showAnswer() {
    gameState = possibleGameStates.showAnswer;
    time = 5;
    startTimer();
    renderApp();
}
function answerQuestion(guess) {
    var currentQuiz = quizzes[currentQuizIndex]
    if (guess == null) {
        unanswered++;
    } else if (guess == currentQuiz.correctAnswerIndex) {
        correct++;
        currentQuiz.answerState = possibleAnswerStates.correct;
    } else {
        incorrect++;
        currentQuiz.answerState = possibleAnswerStates.incorrect;
    }
}

function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex == quizzes.length) {
        gameOver();
    } else {
        askQuestion();
    }
}

function gameOver() {
    gameState = possibleGameStates.gameOver;
    renderApp();
}

function countdownTimer() {
    time--;
    if (time <= -1) {
        clearInterval(intervalID)
        if (gameState == possibleGameStates.askQuestion) {
            showAnswer();
        } else if (gameState == possibleGameStates.showAnswer) {
            nextQuestion();
        }

    }
    renderApp();
}

function startTimer() {
    intervalID = setInterval(countdownTimer, 1000)

    renderApp();
}

//event handlers
$("#start-btn").on("click", askQuestion);
$(".answer-btn").on("click", function (event) {
    clearInterval(intervalID);
    var guess = Number($(this).attr("data-index"));
    console.log("Guess: " + guess)
    answerQuestion(guess);
    showAnswer();
})
$("#play-again").on("click", setUpGame)

//main

setUpGame();

// gameState = possibleGameStates.askQuestion;
// renderApp();