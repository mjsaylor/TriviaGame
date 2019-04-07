var questions = [
    "Who did this first lip sync?",
    "Who did this second lip sync?",
    "Is this the third question?",
    "Who is this fourth question for?",
    "Why isn't this fifth question last?",
    "Hey, a sixth question!",
    "Am I doing this right? Seventh?",
    "Eight is the last question?",
]

var question1Answers = ["This QueenA1", "This QueenB1", "This QueenC1", "This QueenD1"]
var question2Answers = ["This QueenA2", "This QueenB2", "This QueenC2", "This QueenD2"]
var question3Answers = ["This QueenA3", "This QueenB3", "This QueenC3", "This QueenD3"]
var question4Answers = ["This QueenA4", "This QueenB4", "This QueenC4", "This QueenD4"]
var question5Answers = ["This QueenA5", "This QueenB5", "This QueenC5", "This QueenD5"]
var question6Answers = ["This QueenA6", "This QueenB6", "This QueenC6", "This QueenD6"]
var question7Answers = ["This QueenA7", "This QueenB7", "This QueenC7", "This QueenD7"]
var question8Answers = ["This QueenA8", "This QueenB8", "This QueenC8", "This QueenD8"]

var answers = [
    question1Answers,
    question2Answers,
    question3Answers,
    question4Answers,
    question5Answers,
    question6Answers,
    question7Answers,
    question8Answers]

var count = 0;
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
console.log(answers)

function gameOver() {
    console.log("GAME OVER")
}

function askQuestion(question, answerArray) {
    $("#question1").html(question);
    $("#answer_a").html(answerArray[0]);
    $("#answer_b").html(answerArray[1]);
    $("#answer_c").html(answerArray[2]);
    $("#answer_d").html(answerArray[3]);
    console.log(question)
    console.log(answerArray)
}

function nextQuestion() {
    count++;
    console.log("Next Question: ", count)
    //this is where the you're right/wrong/gif of correct answer goes I THINK
    if (count == questions.length) {
        gameOver();
    }
}

function timesUp() {
    console.log("Time's Up!")
}

function startTimer() {
    console.log("timer started");
    setTimeout(timesUp, 10000);
}


$("#start-btn").on("click", function(event) {
    console.log("START GAME");
    $("#start-screen").hide();
        askQuestion(questions[count], answers[count]);
        startTimer(); 
});

$(".answer-btn").on("click", function(event){
    nextQuestion();
    askQuestion(questions[count], answers[count]);
})


