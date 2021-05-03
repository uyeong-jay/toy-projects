export const formToDoList = document.querySelector(".form-toDoList"),
  inputToDos = formToDoList.querySelector("input"),
  toDoList = document.querySelector(".toDoList");

export const TODOS_LS = "todos";

export let toDos = [];

export function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

export function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const currentToDos = toDos.filter(toDo => {
    return toDo.id !== parseInt(li.id);
  });
  toDos = currentToDos;
  saveToDos();
}


export function createToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);
  span.textContent = text;
  delBtn.textContent = "💥";
  delBtn.addEventListener("click", delToDo);
  const newId = toDos.length + 1;
  li.id = newId;
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

export function handleToDosSubmit(event) {
  event.preventDefault();
  const inputToDoVal = inputToDos.value;
  createToDo(inputToDoVal);
  inputToDos.value="";
}

export function loadToDos() {
  const getToDos = localStorage.getItem(TODOS_LS);
  if (getToDos !== null) {
    const parseToDos = JSON.parse(getToDos);
    parseToDos.forEach(toDo => {
      createToDo(toDo.text);
    });
  };
}

export function initToDos() {
  loadToDos();
  formToDoList.addEventListener("submit", handleToDosSubmit);
}

initToDos();