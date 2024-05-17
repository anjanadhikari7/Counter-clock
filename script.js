let output = document.getElementById("output");
let counter = 0;
let intervalId;

const timer = () => {
  output.innerText = counter++;
};

const startTimer = () => {
  if (!intervalId) {
    intervalId = setInterval(timer, 1000);
  }
};

const pauseTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
};

const stopTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
  counter = 0;
  output.innerText = counter;
};
