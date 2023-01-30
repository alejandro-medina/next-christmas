const CHRISTMAS = {
  day: 25,
  month: 12,
  year: 2023,
};

const calculateTimeLeft = function () {

  const today = new Date();
  const christmas = new Date(CHRISTMAS.year, CHRISTMAS.month - 1, CHRISTMAS.day);
  const timeLeft = christmas.getTime() - today.getTime();


  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
  const days = Math.floor((timeLeft / 1000 / 60 / 60 / 24));

  return {
    days,
    hours,
    minutes,
    seconds
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

window.addEventListener('DOMContentLoaded', function () {
  const timeLeft = calculateTimeLeft();
  console.log(timeLeft.days);
  updateDOM(timeLeft);
});

