import {formGreeeting, USER_LS, saveName, handleGreetingSumit, askForName, welcome, loadname, initName} from './greeting.js';

import {formToDoList, TODOS_LS, toDos, saveToDos, delToDo, createToDo, handleToDosSubmit, loadToDos, initToDos} from './todo-list.js';



const calender = document.querySelector(".calender"),
  calenderDate = calender.querySelector(".date");

const clock = document.querySelector(".clock"),
  clockHour = clock.querySelector(".hour"),
  clockMinute = clock.querySelector(".minute"),
  clockSecond = clock.querySelector(".second");

const currentDate = new Date(),
  year = currentDate.getFullYear(),
  month = currentDate.getMonth(),
  date = currentDate.getDate();

function getCurrentDate() {
  calenderDate.textContent = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`
}

function getHour() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  clockHour.textContent = `${hours < 10 ? `0${hours}` : hours}`;
}

function getMin() {
  const currentTime = new Date();
  const minutes = currentTime.getMinutes();
  clockMinute.textContent = `${minutes < 10 ? `0${minutes}` : minutes}`;
}

function getSec() {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  clockSecond.textContent = `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function initTime() {
  getCurrentDate();
  getHour();
  getMin();
  getSec();
  setInterval(() => {
    getHour();
    getMin();
    getSec();
  }, 1000);
}
initTime();