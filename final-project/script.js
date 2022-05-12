const shirt = document.querySelector(".shirt");
const head = document.querySelector(".head");
const Lleg = document.querySelector(".Lleg");
const Rleg = document.querySelector(".Rleg");
const spike = document.querySelector(".spike");
const scoreE = document.querySelector(".score");
const highScoreE = document.querySelector(".highSN");
const playAgain = document.querySelector(".playAgain");
let gameOn = true;
let checkSPM = true;
let levelSL = Math.trunc(Math.random() * 3) + 1;
let score = 0;
let highScore = 0;
const body = document.querySelector("body");
setInterval(spikeSM, 10);
spike.classList.remove("spikeMoveEZ");
if (levelSL === 1) {
  spike.classList.add("spikeMoveEZ");
} else if (levelSL === 2) {
  spike.classList.add("spikeMoveMD");
} else {
  spike.classList.add("spikeMoveAH");
}
function spikeSM() {
  if (checkSPM) {
    if (spike.getBoundingClientRect().left < 0) {
      levelSL = Math.trunc(Math.random() * 3) + 1;
      if (levelSL === 1) {
        spike.classList.remove("spikeMoveEZ");
        setTimeout(sSEZ, 10);
        console.log("ez");

        console.log(levelSL);
      } else if (levelSL === 2) {
        spike.classList.remove("spikeMoveMD");
        setTimeout(sSMD, 10);
      } else {
        spike.classList.remove("spikeMoveAH");
        setTimeout(sSAH, 10);
      }
      checkSPM = false;
    }
  }
}
function sSEZ() {
  spike.classList.add("spikeMoveEZ");
  console.log(levelSL);
  checkSPM = true;
}
function sSMD() {
  spike.classList.add("spikeMoveMD");
  console.log(levelSL);
  checkSPM = true;
}
function sSAH() {
  spike.classList.add("spikeMoveAH");
  console.log(levelSL);
  checkSPM = true;
}
if (gameOn) {
  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      shirt.classList.add("shirtJ");
      head.classList.add("headJ");
      Lleg.classList.add("LlegJ");
      Rleg.classList.add("RlegJ");
      setTimeout(endJump, 2000);
      console.log(spike.getBoundingClientRect().left);
    }
  });
}
setInterval(touchCheck, 10);
setInterval(scoreUp, 100);
function scoreUp() {
  if (gameOn) {
    score++;
    scoreE.textContent = score;
  }
}
function endJump() {
  shirt.classList.remove("shirtJ");
  head.classList.remove("headJ");
  Lleg.classList.remove("LlegJ");
  Rleg.classList.remove("RlegJ");
}
function touchCheck() {
  if (gameOn) {
    if (touches(Rleg, spike)) {
      gameOn = false;
      body.style.backgroundColor = "#FF0000";
      playAgain.classList.remove("hidden");
      if (score > highScore) {
        console.log("Ho");
        highScore = score;
        highScoreE.textContent = scoreE.textContent;
        setTimeout(resetScore, 100);
      } else {
        setTimeout(resetScore, 100);
      }
    }
  }
}
function playAG() {
  if (!gameOn) {
    body.addEventListener("click", startGame);
  }
}
function startGame() {
  console.log(levelSL);

  playAgain.classList.add("hidden");
  body.style.backgroundColor = "#00FFFF";
  gameOn = true;
  if (levelSL === 1) {
    spike.classList.add("spikeMoveEZ");
  } else if (levelSL === 2) {
    spike.classList.add("spikeMoveMD");
  } else {
    spike.classList.add("spikeMoveAH");
  }
}
function resetScore() {
  score = 0;
  scoreE.textContent = 0;
  spike.classList.remove("spikeMoveEZ");
  spike.classList.remove("spikeMoveMD");
  spike.classList.remove("spikeMoveAH");
  levelSL = Math.trunc(Math.random() * 3) + 1;
  setInterval(playAG, 10);
}
function touches(f, l) {
  let touch1 = f.getBoundingClientRect();
  let touch2 = l.getBoundingClientRect();
  if (
    touch1.x <= touch2.x &&
    touch2.x <= touch1.x + 10 &&
    touch1.y <= touch2.y + 20 &&
    touch1.y + 15 >= touch2.y
  ) {
    return true;
  }
}
