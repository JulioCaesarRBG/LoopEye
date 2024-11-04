let count = 0;
let countingInterval;
let isCounting = false;

const countDisplay = document.getElementById("countDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

// Start counting
startBtn.addEventListener("click", () => {
  if (!isCounting) {
    isCounting = true;
    countingInterval = setInterval(() => {
      count++;
      countDisplay.innerText = `Count: ${count}`;
    }, 1000);
  }
});

// Pause counting
pauseBtn.addEventListener("click", () => {
  if (isCounting) {
    clearInterval(countingInterval);
    isCounting = false;
  }
});

// Stop counting
stopBtn.addEventListener("click", () => {
  clearInterval(countingInterval);
  isCounting = false;
  count = 0;
  countDisplay.innerText = `Count: ${count}`;
});
