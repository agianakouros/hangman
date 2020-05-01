/////////////////////// Window Onload Function //////////////////////////////////////////

window.onload = start();

////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Variable Declarations /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

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

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Onclick Elements//////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

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

document.getElementById("restart").onclick = start;

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Game Setup ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function start() {
  wordBank = ["cat", "cow", "run", "bat", "wow", "computer", "math", "phone", "letters", "morning", "special"];
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
  document.getElementById('p').style.backgroundColor = "#1E90FF"
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

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// Canvas Functions /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

setUpCanvas()

function hangLine() {
  ctx.moveTo(355, 75);
  ctx.lineTo(355, 95);
  ctx.lineWidth = .8;
  ctx.stroke();
}

function setUpCanvas() {

  ctx.beginPath();
  ctx.rect(0, 0, 1024, 400);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.moveTo(250, 250);
  ctx.lineTo(425, 250);
  ctx.stroke();
  ctx.moveTo(285, 250);
  ctx.lineTo(285, 75);
  ctx.stroke();
  ctx.moveTo(285, 75);
  ctx.lineTo(370, 75);
  ctx.stroke();
  ctx.moveTo(265, 250);
  ctx.lineTo(285, 225);
  ctx.stroke();
  ctx.moveTo(305, 250);
  ctx.lineTo(285, 225);
  ctx.stroke();
  ctx.moveTo(285, 105);
  ctx.lineTo(315, 75);
  ctx.lineWidth = 2.2;
  ctx.stroke();

  hangLine()
}

function drawHead() {
  ctx.beginPath();
  ctx.arc(355, 110, 15, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawTorso() {
  ctx.moveTo(355, 125);
  ctx.lineTo(355, 160);
  ctx.lineWidth = 2.2;
  ctx.stroke();
}

function drawLeftArm() {
  ctx.moveTo(355, 130);
  ctx.lineTo(345, 155);
  ctx.lineWidth = 2.2;
  ctx.stroke();
}

function drawRightArm() {
  ctx.moveTo(355, 130);
  ctx.lineTo(365, 155);
  ctx.lineWidth = 2.2;
  ctx.stroke();
}

function drawLeftLeg() {
  ctx.moveTo(355, 155);
  ctx.lineTo(345, 190);
  ctx.lineWidth = 2.2;
  ctx.stroke();
}

function drawRightLeg() {
  ctx.moveTo(355, 155);
  ctx.lineTo(365, 190);
  ctx.lineWidth = 2.2;
  ctx.stroke();
}

function drawLeftEye() {
  ctx.moveTo(360, 105);
  ctx.lineTo(365, 110);
  ctx.lineWidth = 2.2;
  ctx.stroke();
  ctx.moveTo(365, 105);
  ctx.lineTo(360, 110);
  ctx.lineWidth = 2.2;
  ctx.stroke();
}

function drawRightEye() {
  ctx.moveTo(346, 105);
  ctx.lineTo(352, 110);
  ctx.lineWidth = 2.2;
  ctx.stroke();
  ctx.moveTo(352, 105);
  ctx.lineTo(346, 110);
  ctx.lineWidth = 2.2;
  ctx.stroke();
}

function drawFrown() {
  // ctx.beginPath();
  // ctx.arc(345, 110, 35, 0, Math.PI, false);
  // ctx.closePath();
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Game Mechanic Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

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

document.getElementById('lives').innerHTML = "You have " + lives + " lives"

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

          if (lives == 9) {
            drawHead()
          }

          if (lives == 8) {
            drawTorso()
          }

          if (lives == 7) {
            drawLeftArm()
          }

          if (lives == 6) {
            drawRightArm()
          }

          if (lives == 5) {
            drawRightLeg()
          }

          if (lives == 4) {
            drawLeftLeg()
          }

          if (lives == 3) {
            drawRightEye()
          }

          if (lives == 2) {
            drawLeftEye()
          }

          if (lives == 1) {
            drawFrown()
          }

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

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// Keyboard Functions /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function a() {
  array.push("a");
  document.getElementById('a').style.backgroundColor = "gold"
  document.getElementById('a').disabled = true
  guess1()
}

function b() {
  array.push("b");
  document.getElementById('b').style.backgroundColor = "gold"
  document.getElementById('b').disabled = true
  guess1()
}

function c() {
  array.push("c");
  document.getElementById('c').style.backgroundColor = "gold"
  document.getElementById('c').disabled = true
  guess1()
}

function d() {
  array.push("d");
  document.getElementById('d').style.backgroundColor = "gold"
  document.getElementById('d').disabled = true
  guess1()
}

function e() {
  array.push("e");
  document.getElementById('e').style.backgroundColor = "gold"
  document.getElementById('e').disabled = true
  guess1()
}

function f() {
  array.push("f");
  document.getElementById('f').style.backgroundColor = "gold"
  document.getElementById('f').disabled = true
  guess1()
}

function g() {
  array.push("g");
  document.getElementById('g').style.backgroundColor = "gold"
  document.getElementById('g').disabled = true
  guess1()
}

function h() {
  array.push("h");
  document.getElementById('h').style.backgroundColor = "gold"
  document.getElementById('h').disabled = true
  guess1()
}

function i() {
  array.push("i");
  document.getElementById('i').style.backgroundColor = "gold"
  document.getElementById('i').disabled = true
  guess1()
}

function j() {
  array.push("j");
  document.getElementById('j').style.backgroundColor = "gold"
  document.getElementById('j').disabled = true
  guess1()
}

function k() {
  array.push("k");
  document.getElementById('k').style.backgroundColor = "gold"
  document.getElementById('k').disabled = true
  guess1()
}

function l() {
  array.push("l");
  document.getElementById('l').style.backgroundColor = "gold"
  document.getElementById('l').disabled = true
  guess1()
}

function m() {
  array.push("m");
  document.getElementById('m').style.backgroundColor = "gold"
  document.getElementById('m').disabled = true
  guess1()
}

function n() {
  array.push("n");
  document.getElementById('n').style.backgroundColor = "gold"
  document.getElementById('n').disabled = true
  guess1()
}

function o() {
  array.push("o");
  document.getElementById('o').style.backgroundColor = "gold"
  document.getElementById('o').disabled = true
  guess1()
}

function p() {
  array.push("p");
  document.getElementById('p').style.backgroundColor = "gold"
  document.getElementById('p').disabled = true
  guess1()
}

function q() {
  array.push("q");
  document.getElementById('q').style.backgroundColor = "gold"
  document.getElementById('q').disabled = true
  guess1()
}

function r() {
  array.push("r");
  document.getElementById('r').style.backgroundColor = "gold"
  document.getElementById('r').disabled = true
  guess1()
}

function s() {
  array.push("s");
  document.getElementById('s').style.backgroundColor = "gold"
  document.getElementById('s').disabled = true
  guess1()
}

function t() {
  array.push("t");
  document.getElementById('t').style.backgroundColor = "gold"
  document.getElementById('t').disabled = true
  guess1()
}

function u() {
  array.push("u");
  document.getElementById('u').style.backgroundColor = "gold"
  document.getElementById('u').disabled = true
  guess1()
}

function v() {
  array.push("v");
  document.getElementById('v').style.backgroundColor = "gold"
  document.getElementById('v').disabled = true
  guess1()
}

function w() {
  array.push("w");
  document.getElementById('w').style.backgroundColor = "gold"
  document.getElementById('w').disabled = true
  guess1()
}

function x() {
  array.push("x");
  document.getElementById('x').style.backgroundColor = "gold"
  document.getElementById('x').disabled = true
  guess1()
}

function y() {
  array.push("y");
  document.getElementById('y').style.backgroundColor = "gold"
  document.getElementById('y').disabled = true
  guess1()
}

function z() {
  array.push("z");
  document.getElementById('z').style.backgroundColor = "gold"
  document.getElementById('z').disabled = true
  guess1()
}

output.innerHTML = '';