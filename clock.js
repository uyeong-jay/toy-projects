const clock = document.querySelector(".clock"),
  clockHours = clock.querySelector(".hour"),
  clockMinutes = clock.querySelector(".minute"),
  clockSeconds = clock.querySelector(".second");

const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();

function getHour() {
  clockHours.textContent = `${hours < 10 ? `0${hours}` : hours}`;
}

function getMin() {
  clockMinutes.textContent = `${minutes < 10 ? `0${minutes}` : minutes}`;
}

function getSec() {
  const time = new Date();
  const seconds = time.getSeconds();
  clockSeconds.textContent = `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init1() {
  getHour();
  getMin();
  getSec();
  setInterval(getSec, 1000);
}
init1();