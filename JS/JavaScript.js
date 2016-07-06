
var correctAnswer = ["one", "Two", "three", "four"];
var questionNum = 1;
var wrongGuesses = 0;
var correctGuesses = 0;
function getanswer()
{
    var answer = document.getElementById("submitBox");
    window.alert("here");
    if (answer == correctAnswer[questionNum]) {
        questionNum = questionNum + 1;
        correctGuesses = correctGuesses + 1;
        replacePicture(questionNum);
        correctGuess();

    }
    else {
        wrongGuesses = wrongGuesses + 1;
        wrongGuess();
    }
}

function replacePicture()
{
    var newSrc = "img/{0}.png".format(qustionNum);
    document.getElementById("Picture").src = newSrc;
}

function correctGuess(correctGuesses) {
    document.getElementById("CorrectGuesses").innerHTML = "{0}".format(correctGuesses);
}

function wrongGuess(wrongGuesses) {
    document.getElementById("WrongGuesses").innerHTML = "{0}".format(wrongGuesses);
}