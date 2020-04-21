var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var alphabet;
var wordBank;
var guessInput;
var guess;
var attempt;
var guessButton;
var gameStrings;
var correct;
var output;
var man;
var letters;
var lives = 10;
var word;
var numCorrect;


ctx.beginPath();
ctx.rect(0, 0, 1024, 400);
ctx.fillStyle = "white";
ctx.fill();


function start() {
        wordBank = ["cat", "dog", "cow", "run", "bat", "log", "wow", "fun", "rat", "bog", "how", "gun", "sat", "cap", "fog", "bun"];
        alphabet = "abcdefghijklmnopqrstuvwxyz";
        lives = 10;

        gameStrings = {
            win: 'You win!',
            lose: 'Game over!',
            repeat: ' already guessed, please try again...',
            invalid: 'Please enter a letter from A-Z'
        }

        attempt = correct = '';
        numCorrect = 0;

        word = wordBank[Math.floor(Math.random() * wordBank.length)];

      };

      function drawLives() {
        ctx.font = "20px Lato";
        ctx.fillStyle = "#212427";
        ctx.fillText(`You have ${lives} lives left`, 8, 23);
      }


drawLives()
