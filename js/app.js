var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

var alphabet;
var wordBank;
var attempt;
var gameStrings;
var correct;
var output;
var letters;
var lives = 10;
var word;
var numCorrect;

var guess;

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

  document.getElementById('lives').innerHTML = "You have " + lives + " lives"

  document.getElementById('a').disabled = false
  document.getElementById('b').disabled = false
  document.getElementById('c').disabled = false
  document.getElementById('d').disabled = false
  document.getElementById('e').disabled = false
  document.getElementById('f').disabled = false
  document.getElementById('g').disabled = false
  document.getElementById('h').disabled = false
  document.getElementById('i').disabled = false
  document.getElementById('j').disabled = false
  document.getElementById('k').disabled = false
  document.getElementById('l').disabled = false
  document.getElementById('m').disabled = false
  document.getElementById('n').disabled = false
  document.getElementById('o').disabled = false
  document.getElementById('p').disabled = false
  document.getElementById('q').disabled = false
  document.getElementById('r').disabled = false
  document.getElementById('s').disabled = false
  document.getElementById('t').disabled = false
  document.getElementById('u').disabled = false
  document.getElementById('v').disabled = false
  document.getElementById('w').disabled = false
  document.getElementById('x').disabled = false
  document.getElementById('y').disabled = false
  document.getElementById('z').disabled = false

  document.getElementById('a').style.backgroundColor = "#1E90FF"
  document.getElementById('b').style.backgroundColor = "#1E90FF"
  document.getElementById('c').style.backgroundColor = "#1E90FF"
  document.getElementById('d').style.backgroundColor = "#1E90FF"
  document.getElementById('e').style.backgroundColor = "#1E90FF"
  document.getElementById('f').style.backgroundColor = "#1E90FF"
  document.getElementById('g').style.backgroundColor = "#1E90FF"
  document.getElementById('h').style.backgroundColor = "#1E90FF"
  document.getElementById('i').style.backgroundColor = "#1E90FF"
  document.getElementById('j').style.backgroundColor = "#1E90FF"
  document.getElementById('k').style.backgroundColor = "#1E90FF"
  document.getElementById('l').style.backgroundColor = "#1E90FF"
  document.getElementById('m').style.backgroundColor = "#1E90FF"
  document.getElementById('n').style.backgroundColor = "#1E90FF"
  document.getElementById('o').style.backgroundColor = "#1E90FF"
  document.getElementById('p').style.backgroundColor = "g#1E90FF"
  document.getElementById('q').style.backgroundColor = "#1E90FF"
  document.getElementById('r').style.backgroundColor = "#1E90FF"
  document.getElementById('s').style.backgroundColor = "#1E90FF"
  document.getElementById('t').style.backgroundColor = "#1E90FF"
  document.getElementById('u').style.backgroundColor = "#1E90FF"
  document.getElementById('v').style.backgroundColor = "#1E90FF"
  document.getElementById('w').style.backgroundColor = "#1E90FF"
  document.getElementById('x').style.backgroundColor = "#1E90FF"
  document.getElementById('y').style.backgroundColor = "#1E90FF"
  document.getElementById('z').style.backgroundColor = "#1E90FF"

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
    document.getElementById('lives').innerHTML = "You're out of lives!"
  }
  guessInput.style.display = guessButton.style.display = 'none';
  guessInput.value = '';
}

window.onload = start();

document.getElementById("restart").onclick = start;

document.getElementById('lives').innerHTML = "You have " + lives + " lives"


function a() {
  array.push("a");
  guess1()
  document.getElementById('a').style.backgroundColor = "gold"
  document.getElementById('a').disabled = true
}

function b() {
  array.push("b");
  guess1()
  document.getElementById('b').style.backgroundColor = "gold"
  document.getElementById('b').disabled = true
}

function c() {
  array.push("c");
  guess1()
  document.getElementById('c').style.backgroundColor = "gold"
  document.getElementById('c').disabled = true
}

function d() {
  array.push("d");
  guess1()
  document.getElementById('d').style.backgroundColor = "gold"
  document.getElementById('d').disabled = true
}

function e() {
  array.push("e");
  guess1()
  document.getElementById('e').style.backgroundColor = "gold"
  document.getElementById('e').disabled = true
}

function f() {
  array.push("f");
  guess1()
  document.getElementById('f').style.backgroundColor = "gold"
  document.getElementById('f').disabled = true
}

function g() {
  array.push("g");
  guess1()
  document.getElementById('g').style.backgroundColor = "gold"
  document.getElementById('g').disabled = true
}

function h() {
  array.push("h");
  guess1()
  document.getElementById('h').style.backgroundColor = "gold"
  document.getElementById('h').disabled = true
}

function i() {
  array.push("i");
  guess1()
  document.getElementById('i').style.backgroundColor = "gold"
  document.getElementById('i').disabled = true
}

function j() {
  array.push("j");
  guess1()
  document.getElementById('j').style.backgroundColor = "gold"
  document.getElementById('j').disabled = true
}

function k() {
  array.push("k");
  guess1()
  document.getElementById('k').style.backgroundColor = "gold"
  document.getElementById('k').disabled = true
}

function l() {
  array.push("l");
  guess1()
  document.getElementById('l').style.backgroundColor = "gold"
  document.getElementById('l').disabled = true
}

function m() {
  array.push("m");
  guess1()
  document.getElementById('m').style.backgroundColor = "gold"
  document.getElementById('m').disabled = true
}

function n() {
  array.push("n");
  guess1()
  document.getElementById('n').style.backgroundColor = "gold"
  document.getElementById('n').disabled = true
}

function o() {
  array.push("o");
  guess1()
  document.getElementById('o').style.backgroundColor = "gold"
  document.getElementById('o').disabled = true
}

function p() {
  array.push("p");
  guess1()
  document.getElementById('p').style.backgroundColor = "gold"
  document.getElementById('p').disabled = true
}

function q() {
  array.push("q");
  guess1()
  document.getElementById('q').style.backgroundColor = "gold"
  document.getElementById('q').disabled = true
}

function r() {
  array.push("r");
  guess1()
  document.getElementById('r').style.backgroundColor = "gold"
  document.getElementById('r').disabled = true
}

function s() {
  array.push("s");
  guess1()
  document.getElementById('s').style.backgroundColor = "gold"
  document.getElementById('s').disabled = true
}

function t() {
  array.push("t");
  guess1()
  document.getElementById('t').style.backgroundColor = "gold"
  document.getElementById('t').disabled = true
}

function u() {
  array.push("u");
  guess1()
  document.getElementById('u').style.backgroundColor = "gold"
  document.getElementById('u').disabled = true
}

function v() {
  array.push("v");
  guess1()
  document.getElementById('v').style.backgroundColor = "gold"
  document.getElementById('v').disabled = true
}

function w() {
  array.push("w");
  guess1()
  document.getElementById('w').style.backgroundColor = "gold"
  document.getElementById('w').disabled = true
}

function x() {
  array.push("x");
  guess1()
  document.getElementById('x').style.backgroundColor = "gold"
  document.getElementById('x').disabled = true
}

function y() {
  array.push("y");
  guess1()
  document.getElementById('y').style.backgroundColor = "gold"
  document.getElementById('y').disabled = true
}

function z() {
  array.push("z");
  guess1()
  document.getElementById('z').style.backgroundColor = "gold"
  document.getElementById('z').disabled = true
}

output.innerHTML = '';

function guess1() {
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
        if (lives >= 1) {
          lives--;
          if (lives === 0) gameOver();
          document.getElementById('lives').innerHTML = "You have " + lives + " lives left"
        }
      }
    }
    // not a valid letter, error */
    else {
      output.classList.add('error');
      console.log(gameStrings.validLetter);
    }
  } else {
    console.log("mistake")
  }
}