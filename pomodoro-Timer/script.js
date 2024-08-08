const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeleft = 1500;

function update() {
  let minutes = Math.floor(timeleft / 60);
  let seconds = timeleft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEl.innerHTML = formattedTime;
}
startEl.addEventListener("click", startTimer);
function startTimer() {
  interval = setInterval(() => {
    timeleft--;
    update();
    if (timeleft === 0) {
      clearInterval(interval);
      alert("Time's up!");
    }
  }, 1000);
}
stopEl.addEventListener("click", stopTimer);
function stopTimer() {
  clearInterval(interval);
}

resetEl.addEventListener("click", resetTimer);
function resetTimer() {
  clearInterval(interval);
  timeleft = 1500;
  update();
}
