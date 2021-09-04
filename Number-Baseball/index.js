const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $button = document.querySelector('#button');
const $logs = document.querySelector('#logs');

const numbers = []; // 1~9
for (let n = 0; n < 9; n++) {
  numbers.push(n+1);
}

const answer = []; // numbers의 1~9중 랜덤하게 4개만 answer에 넣기
for (let i = 0; i < 4; i++) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}


const tries = [];
let strike = 0;
let ball = 0;
let out = 0;

const compareInput = (inputVal) => {
  if (answer.join('') === inputVal) {
    $logs.textContent = "홈런! ";
    return;
  }
  for (let i = 0; i < answer.length; i++) {
    const index = inputVal.indexOf(answer[i]);
    if (index > -1) {
      if (inputVal[index] === answer.join('')[index]) {
        strike++;
      } else {
        ball++;
      }
    } else {
      out++;
    }
  }
}


const manageLogs = (inputVal) => {
  tries.push(inputVal);
  compareInput(inputVal);
  $logs.setAttribute('style', 'white-space: pre;');
  $logs.textContent += `${inputVal},${answer.join('')} => strike :${strike}, ball :${ball}, out :${out}\r\n`;
  strike = 0;
  ball = 0;
  out = 0;
  if (tries.length >= 10) {
    $logs.textContent = `기회 초과! 실패입니다! \n 답은 : ${answer.join('')} 였습니다.`;
    return;
  }
}


const checkInput = (inputVal) => {
  if (inputVal.length !== 4) {
    return alert('4자리 숫자를 입력해 주세요');
  }
  if (new Set(inputVal).size !== 4) {
    return alert('중복되지 않게 입력해 주세요.');
  }
  if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.');
  }
  manageLogs(inputVal);
}


const submitHandler = (e) => {
  e.preventDefault();
  const inputValue = $input.value; //데이터
  console.log(inputValue);
  input.value = ''; //화면
  checkInput(inputValue);
}

$form.addEventListener('submit', submitHandler);
