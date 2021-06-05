export const formGreeeting = document.querySelector(".form-greeting"),
  inputName = formGreeeting.querySelector("input"),
  greeting = document.querySelector(".greeting");

export const USER_LS = "user-name",
  SHOW_CN = "showing";

export function saveName(name) {
  localStorage.setItem(USER_LS, name);
}

export function handleGreetingSumit(event) {
  event.preventDefault();
  const inputNameVal = inputName.value;
  saveName(inputNameVal);
  welcome(inputNameVal);
}

export function askForName() {
  formGreeeting.classList.add(SHOW_CN);
  formGreeeting.addEventListener("submit", handleGreetingSumit);
}

export function welcome(name) {
  formGreeeting.classList.remove(SHOW_CN);
  greeting.classList.add(SHOW_CN);
  greeting.textContent = `Welcome ${name} 🤗 `;
}

export function loadName() {
  const getUserName = localStorage.getItem(USER_LS);
  if (getUserName === null) {
    askForName();
  } else {
    welcome(getUserName);
  }
}

export function initName() {
  loadName();
}

initName();