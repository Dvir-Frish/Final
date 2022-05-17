const shirt = document.querySelector(".shirt");
const head = document.querySelector(".head");
const Lleg = document.querySelector(".Lleg");
const Rleg = document.querySelector(".Rleg");
const spike1 = document.querySelector("#S1");
const spike2 = document.querySelector("#S2");
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
spike1.classList.remove("spikeMoveEZ");
spike2.classList.remove("spikeMoveEZ");
if (levelSL === 1) {
  setInterval(scoreUp, 300);
  spike1.classList.add("spikeMoveEZ");
  spike2.classList.add("spikeMoveEZ");
} else if (levelSL === 2) {
  spike1.classList.add("spikeMoveMD");
  spike2.classList.add("spikeMoveMD");

  setInterval(scoreUp, 120);
} else {
  spike1.classList.add("spikeMoveAH");
  spike2.classList.add("spikeMoveAH");

  setInterval(scoreUp, 70);
}
function spikeSM() {
  if (checkSPM) {
    if (
      spike1.getBoundingClientRect().left < 0 ||
      spike2.getBoundingClientRect().left < 0
    ) {
      levelSL = Math.trunc(Math.random() * 3) + 1;
      if (levelSL === 1) {
        spike1.classList.remove("spikeMoveEZ");
        spike2.classList.remove("spikeMoveEZ");

        console.log("1");
        clearInterval(scoreUp, 300);
        setTimeout(sSEZ, 10);
        console.log("ez");

        console.log(levelSL);
      } else if (levelSL === 2) {
        spike1.classList.remove("spikeMoveMD");
        console.log("2");
        clearInterval(scoreUp, 60);
        setTimeout(sSMD, 10);
      } else {
        spike1.classList.remove("spikeMoveAH");
        spike2.classList.remove("spikeMoveAH");

        console.log("3");
        clearInterval(scoreUp, 12);
        setTimeout(sSAH, 10);
      }
      checkSPM = false;
    }
  }
}
function sSEZ() {
  spike1.classList.add("spikeMoveEZ");
  spike2.classList.add("spikeMoveEZ");

  console.log(levelSL);
  checkSPM = true;
}
function sSMD() {
  spike1.classList.add("spikeMoveMD");
  spike2.classList.add("spikeMoveMD");

  console.log(levelSL);
  checkSPM = true;
}
function sSAH() {
  spike1.classList.add("spikeMoveAH");
  spike2.classList.add("spikeMoveAH");

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
    if (touches(Rleg, spike1) || touches(Rleg, spike2)) {
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
    spike1.classList.add("spikeMoveEZ");
    spike2.classList.add("spikeMoveEZ");
  } else if (levelSL === 2) {
    spike1.classList.add("spikeMoveMD");
    spike2.classList.add("spikeMoveMD");
  } else {
    spike1.classList.add("spikeMoveAH");
    spike2.classList.add("spikeMoveAH");
  }
}
function resetScore() {
  console.log("resetScore");
  score = 0;
  scoreE.textContent = 0;
  spike1.classList.remove("spikeMoveEZ");
  spike1.classList.remove("spikeMoveMD");
  spike1.classList.remove("spikeMoveAH");
  spike2.classList.remove("spikeMoveEZ");
  spike2.classList.remove("spikeMoveMD");
  spike2.classList.remove("spikeMoveAH");
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
