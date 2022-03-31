//Global Constants
const cluePauseTime = 333; //How longto pause in between clues
const nextClueWaitTime = 1000; //How long to wait before playing sequence

//Global Variables
var clueHoldTime = 1000; //How long to hold each clue's light/sound
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 1 //Must be between 0.0 and 1.0
var guessCounter = 0; 


function generateRandomPattern() {
  var pattern = Array(10);
  for (var i = 0; i < pattern.length; i++) {
    pattern[i] = getRandomInt(1, 5);
  }
  return pattern;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}


function startGame() {
  //Initialize game variables
  progress = 0;
  gamePlaying = true;
  //Swap the Start and Stop buttons
  document.getElementById("StartBtn").classList.add("hidden");
  document.getElementById("StopBtn").classList.remove("hidden");
  pattern = generateRandomPattern();
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("StartBtn").classList.remove("hidden");
  document.getElementById("StopBtn").classList.add("hidden");
}

//Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function(){
    stopTone()
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone(btn) {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
//Initialize Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //Set delay to initial wait time
  //For each clue revealed so far
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); //Set a timeout to play the song
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 50;
}

function loseGame() {
  stopGame();
  alert("Game Over. You Lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You Won!.")
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  } 
  
  //If guess is correct
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.lenght - 1) {
        winGame(); //GAME OVER: WIN!
      }
      //Pattern correct. Add next segment
      else {
        progress++;
        playClueSequence();
      }
    }
    //So far so good... Check next guess
    else {
      guessCounter++;
    }
  }
  //Guess is incorrect
  //GAME OVER: LOSE!
  else {
    loseGame();
  }
}

