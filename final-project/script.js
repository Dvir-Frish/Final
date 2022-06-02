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
let score = 0;
let highScore = 0;
let stopSV = false;
const body = document.querySelector("body");
function middleHide() {
  for (const x of spike1.classList) {
    if (x == "spikeMoveEZ" || x == "spikeMoveMD" || x == "spikeMoveAH") {
      spike1.classList.remove("hidden");
    } else {
      spike1.classList.add("hidden");
    }
  }
  for (const y of spike2.classList) {
    if (y == "spikeMoveEZ" || y == "spikeMoveMD" || y == "spikeMoveAH") {
      spike2.classList.remove("hidden");
      console.log("1");
    } else {
      spike2.classList.add("hidden");
      console.log("2");
    }
  }
}
function stopS() {
  for (let i = 0; i < 100; i++) {
    spike1.classList.remove("spikeMoveEZ");
    spike1.classList.remove("spikeMoveMD");
    spike1.classList.remove("spikeMoveAH");
    spike2.classList.remove("spikeMoveEZ");
    spike2.classList.remove("spikeMoveMD");
    spike2.classList.remove("spikeMoveAH");
  }
}
function secondSpikeStart() {
  if (gameOn) {
    if (Math.trunc(Math.random() * 7) + 1 === 5) {
      clearInterval(secondSpikeStart, 500);
      start(spike2);
    }
  } else {
    // spike2.classList.add("hidden");
  }
}
function firstSpikeStart() {
  if (gameOn) {
    if (Math.trunc(Math.random() * 7) + 1 === 5) {
      clearInterval(firstSpikeStart, 500);
      start(spike1);
    }
  } else {
    // spike1.classList.add("hidden");
  }
}
function checkSSV() {
  if (stopSV) {
    stopS();
  }
}

setInterval(firstSpikeStart, 500);
setInterval(secondSpikeStart, 500);
setInterval(checkSSV, 10);
setInterval(middleHide, 1);
function start(spike) {
  console.log(spike.classList);
  let levelSL = Math.trunc(Math.random() * 3) + 1;

  let checkSPM = true;
  setInterval(spikeSM, 10);
  spike.classList.remove("spikeMoveEZ");
  if (levelSL === 1) {
    setInterval(scoreUp, 9000);
    spike.classList.add("spikeMoveEZ");
  } else if (levelSL === 2) {
    spike.classList.add("spikeMoveMD");
    setInterval(scoreUp, 3600);
  } else {
    spike.classList.add("spikeMoveAH");
    setInterval(scoreUp, 2100);
  }
  function spikeSM() {
    if (checkSPM) {
      if (spike.getBoundingClientRect().left < 0) {
        stopS();
        levelSL = Math.trunc(Math.random() * 3) + 1;
        if (levelSL === 1) {
          clearInterval(scoreUp);
          sSEZ();
        } else if (levelSL === 2) {
          clearInterval(scoreUp);
          sSMD();
        } else {
          clearInterval(scoreUp);
          sSAH();
        }
        checkSPM = false;
      }
    }
  }
  function sSEZ() {
    spike.classList.add("spikeMoveEZ");

    checkSPM = true;
  }
  function sSMD() {
    spike.classList.add("spikeMoveMD");

    checkSPM = true;
  }
  function sSAH() {
    spike.classList.add("spikeMoveAH");

    checkSPM = true;
  }
  if (gameOn) {
    document.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        shirt.classList.add("shirtJ");
        head.classList.add("headJ");
        Lleg.classList.add("LlegJ");
        Rleg.classList.add("RlegJ");
        setTimeout(endJump, 1000);
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
      if (touches(Rleg, spike)) {
        gameOn = false;
        body.style.backgroundColor = "#FF0000";

        playAgain.classList.remove("hidden");
        spike1.classList.add("hidden");
        spike2.classList.add("hidden");
        for (var i = 0; i < 1000; i++) {}
        if (score > highScore) {
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
    spike.classList.remove("hidden");
    stopSV = false;
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
    stopSV = true;
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
}
