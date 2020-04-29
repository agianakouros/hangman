var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var alphabet;
var wordBank;
var guess;
var attempt;
var gameStrings;
var correct;
var output;
var letters;
var lives = 10;
var word;
var numCorrect;

var array = [];

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

        array = [];

        gameStrings = {
            win: 'You win!',
            lose: 'Game over!',
            validLetter: 'Invalid Letter'
        }

        attempt = correct = '';
        numCorrect = 0;

        word = wordBank[Math.floor(Math.random() * wordBank.length)];

        output = document.getElementById("output");


        output.innerHTML = '';


       letters = document.getElementById("letters");
       letters.innerHTML = '<li class="current-word"></li>';

       var letter, i;
       for (i = 0; i < word.length; i++) {
           letter = '<li class="letter letter' + word.charAt(i).toUpperCase() + '">' + word.charAt(i).toUpperCase() + '</li>';
           letters.insertAdjacentHTML('beforeend', letter);
       }
      };

      setUpCanvas()

function setUpCanvas() {

  ctx.beginPath();
  ctx.rect(0, 0, 1024, 400);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.moveTo(100, 140);
  ctx.lineTo(180, 140);
  ctx.stroke();
  ctx.moveTo(125, 140);
  ctx.lineTo(125, 50);
  ctx.stroke();
  ctx.moveTo(125, 50);
  ctx.lineTo(165, 50);
  ctx.stroke();
  ctx.moveTo(159, 50);
  ctx.lineTo(159, 65);
  ctx.lineWidth = 0.7;
  ctx.stroke();
  ctx.moveTo(125, 120);
  ctx.lineTo(140, 140);
  ctx.stroke();
  ctx.moveTo(125, 120);
  ctx.lineTo(110, 140);
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.moveTo(125, 70);
  ctx.lineTo(140, 50);
  ctx.lineWidth = 1.5;
  ctx.stroke();

}

function gameOver(win) {
        if (win) {
            output.innerHTML = gameStrings.win;
            output.classList.add('win');
         } else {
            output.innerHTML = gameStrings.lose;
            output.classList.add('error');
         }
            guessInput.style.display = guessButton.style.display = 'none';
            guessInput.value = '';
         }

         window.onload = start();

         document.getElementById("restart").onclick = start;


      function drawLives() {
        ctx.font = "10px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(`You have ${lives} lives left`, 6, 13);
      }

drawLives()

function a() {
  array.push("a");
}

function b() {
  array.push("b");
}

function c() {
  array.push("c");
}

function d() {
  array.push("d");
}

function e() {
  array.push("e");
}

function f() {
  array.push("f");
}

function g() {
  array.push("g");
}

function h() {
  array.push("h");
}

function i() {
  array.push("i");
}

function j() {
  array.push("j");
}

function k() {
  array.push("k");
}

function l() {
  array.push("l");
}

function m() {
  array.push("m");
}

function n() {
  array.push("n");
}

function o() {
  array.push("o");
}

function p() {
  array.push("p");
}

function q() {
  array.push("q");
}

function r() {
  array.push("r");
}

function s() {
  array.push("s");
}

function t() {
  array.push("t");
}

function u() {
  array.push("u");
}

function v() {
  array.push("v");
}

function w() {
  array.push("w");
}

function x() {
  array.push("x");
}

function y() {
  array.push("y");
}

function z() {
  array.push("z");
}

output.innerHTML = '';
guess = array[array.length - 1]

if (guess) {
            /* is guess a valid letter? if so carry on, else error */
            if (alphabet.indexOf(guess) > -1) {
                /* has it been guessed (missed or matched) already? if so, abandon & add notice */
                if ((correct && correct.indexOf(guess) > -1) || (attempt && attempt.indexOf(guess) > -1)) {
                    output.innerHTML = '"' + guess.toUpperCase() + '"' + gameStrings.guessed;
                    output.classList.add("warning");
                }
                /* does guess exist in current word? if so, add to letters already matched, if final letter added, game over with win message */
                else if (word.indexOf(guess) > -1) {
                    var lettersToShow;
                    lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

                    for (var i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add("correct");
                    }

                    /* check to see if letter appears multiple times */
                    for (var j = 0; j < word.length; j++) {
                        if (word.charAt(j) === guess) {
                            numCorrect += 1;
                        }
                    }

                    correct += guess;
                    if (numCorrect === word.length) {
                        gameOver(true);
                    }
                }
                /* guess doesn't exist in current word and hasn't been guessed before, add to attempt, reduce lives & update user */
                else {
                    attempt += guess;
                    lives--;
                    drawLives()
                    if (lives === 0) gameOver();
                }
            }
            /* not a valid letter, error */
            else {
                output.classList.add('error');
                output.innerHTML = gameStrings.validLetter;
            }
        }
        /* no letter entered, error */
        else {
            output.classList.add('error');
            output.innerHTML = gameStrings.validLetter;
        }
