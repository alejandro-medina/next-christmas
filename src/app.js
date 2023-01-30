const CHRISTMAS = {
  day: 25,
  month: 12,
  year: 2023,
};

let intervalId = null;
let timeLeft;

const christmas = new Date(CHRISTMAS.year, CHRISTMAS.month - 1, CHRISTMAS.day);

const calculateTimeLeft = function () {

  const today = new Date();
  const timeLeft = christmas.getTime() - today.getTime();

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
  const days = Math.floor((timeLeft / 1000 / 60 / 60 / 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    totalInSeconds: Math.floor(timeLeft / 1000),
  }
};

const updateDOM = function ({ days, hours, minutes, seconds }) {
  const daysEl = document.querySelector("span#days");
  const hoursEl = document.querySelector("span#hours");
  const minutesEl = document.querySelector("span#minutes");
  const secondsEl = document.querySelector("span#seconds");

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
};

const update = function () {
  timeLeft = calculateTimeLeft();

  /**
   * Validate that time is > 0 in order
   * to not to show negative numbers
   */
  if (timeLeft.totalInSeconds >= 0) {
    updateDOM(timeLeft);
    if (timeLeft.totalInSeconds == 0) {
      clearInterval(intervalId);
    }
  }
}

window.addEventListener('DOMContentLoaded', function () {
  update();
  intervalId = setInterval(function () {
    update();
  }, 1000)
});

