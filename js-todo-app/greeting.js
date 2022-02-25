const formGreeeting = document.querySelector(".form-greeting"),
  inputName = formGreeeting.querySelector("input"),
  greeting = document.querySelector(".greeting");

const USER_LS = "user-name",
  SHOW_CN = "showing";

function saveName(name) {
  localStorage.setItem(USER_LS, name);
}

function handleGreetingSumit(event) {
  event.preventDefault();
  const inputNameVal = inputName.value;
  saveName(inputNameVal);
  welcome(inputNameVal);
}

function askForName() {
  formGreeeting.classList.add(SHOW_CN);
  formGreeeting.addEventListener("submit", handleGreetingSumit);
}

function welcome(name) {
  formGreeeting.classList.remove(SHOW_CN);
  greeting.classList.add(SHOW_CN);
  greeting.textContent = `Welcome ${name} 🤗 `;
}

function loadName() {
  const getUserName = localStorage.getItem(USER_LS);
  if (getUserName === null) {
    askForName();
  } else {
    welcome(getUserName);
  }
}

function initName() {
  loadName();
}

initName();