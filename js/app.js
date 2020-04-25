var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
}

ctx.beginPath();
ctx.rect(0, 0, 1024, 400);
ctx.fillStyle = "white";
ctx.fill();


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




function start() {
        wordBank = ["cat", "cow", "run", "bat", "wow", "Code", "computer", "math", "phone", "letters", "morning", "special"];
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

        output = document.getElementById("output");
        guessInput = document.getElementById("letter");

        output.innerHTML = '';


       letters = document.getElementById("letters");
       letters.innerHTML = '<li class="current-word">Current word:</li>';

       var letter, i;
       for (i = 0; i < word.length; i++) {
           letter = '<li class="letter letter' + word.charAt(i).toUpperCase() + '">' + word.charAt(i).toUpperCase() + '</li>';
           letters.insertAdjacentHTML('beforeend', letter);
       }
      };

function gameOver(win) {
        if (win) {
            output.innerHTML = messages.win;
            output.classList.add('win');
         } else {
            output.innerHTML = messages.lose;
            output.classList.add('error');
         }
            guessInput.style.display = guessButton.style.display = 'none';
            guessInput.value = '';
         }

         window.onload = start();

         document.getElementById("restart").onclick = start;


      function drawLives() {
        ctx.font = "15px Lato";
        ctx.fillStyle = "#212427";
        ctx.fillText(`You have ${lives} lives left`, 6, 17);
      }

drawLives()
