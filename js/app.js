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

document.getElementById("a").onclick = a;
document.getElementById("b").onclick = b;
document.getElementById("c").onclick = c;
document.getElementById("d").onclick = d;
document.getElementById("e").onclick = e;
document.getElementById("f").onclick = f;
document.getElementById("g").onclick = g;
document.getElementById("h").onclick = h;
document.getElementById("i").onclick = i;
document.getElementById("j").onclick = j;
document.getElementById("k").onclick = k;
document.getElementById("l").onclick = l;
document.getElementById("m").onclick = m;
document.getElementById("n").onclick = n;
document.getElementById("o").onclick = o;
document.getElementById("p").onclick = p;
document.getElementById("q").onclick = q;
document.getElementById("r").onclick = r;
document.getElementById("s").onclick = s;
document.getElementById("t").onclick = t;
document.getElementById("u").onclick = u;
document.getElementById("v").onclick = v;
document.getElementById("w").onclick = w;
document.getElementById("x").onclick = x;
document.getElementById("y").onclick = y;
document.getElementById("z").onclick = z;


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
