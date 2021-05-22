import {
  formGreeeting,
  USER_LS,
  saveName,
  handleGreetingSumit,
  askForName,
  welcome,
  loadname,
  initName
} from './greeting.js';

import {
  formToDoList,
  TODOS_LS,
  toDos,
  saveToDos,
  delToDo,
  createToDo,
  handleToDosSubmit,
  loadToDos,
  initToDos
} from './todo-list.js';

import {
  weather,
  COORDS_LS,
  getWeather,
  saveCoords,
  handleGeoSucces,
  handleGeoError,
  askForCoords,
  loadCoords,
  initCoords
} from './weather.js'

import {
  container,
  IMG_NUM,
  images,
  number,
  initImg
} from './background.js'

const calender = document.querySelector(".calender"),
  calenderDate = calender.querySelector(".date");

const clock = document.querySelector(".clock"),
  clockHour = clock.querySelector(".hour"),
  clockMinute = clock.querySelector(".minute"),
  clockSecond = clock.querySelector(".second");


function getCurrentDate() {
  const currentDate = new Date(),
    year = currentDate.getFullYear(),
    month = currentDate.getMonth() + 1,
    date = currentDate.getDate();
  calenderDate.textContent = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`
}

function getHour() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  clockHour.textContent = `${hours < 10 ? `0${hours}` : hours}`;
}

function getMin() {
  const currentDate = new Date();
  const minutes = currentDate.getMinutes();
  clockMinute.textContent = `${minutes < 10 ? `0${minutes}` : minutes}`;
}

function getSec() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  clockSecond.textContent = `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function initTime() {
  getCurrentDate();
  getHour();
  getMin();
  getSec();
  setInterval(() => {
    getCurrentDate();
    getHour();
    getMin();
    getSec();
  }, 1000);
}

initTime();