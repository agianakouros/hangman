var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var alphabet;
var wordBank;
var guessInput;
var guess;
var lettersGuessed;
var guessButton;
var gameStrings;
var lettersMatched;
var output;
var man;
var letters;
var lives;
var currentWord;
var numLettersMatched;


ctx.beginPath();
ctx.rect(0, 0, 1024, 400);
ctx.fillStyle = "white";
ctx.fill();



function start() {
        wordBank = ["cat", "dog", "cow", "run", "bat", "log", "wow", "fun", "rat", "bog", "how", "gun" "sat", "cap", "fog", "bun"];
        alphabet = "abcdefghijklmnopqrstuvwxyz";
        lives = 6;

        gameStrings = {
            win: 'You win!',
            lose: 'Game over!',
            repeat: ' already guessed, please try again...',
            invalid: 'Please enter a letter from A-Z'
        };
