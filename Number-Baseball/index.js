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
console.log(answer.join(''));

const tries = [];
let strike = 0;
let ball = 0;
let out = 0;

const compareInput = (inputVal) => { //strike, ball, out 검사
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


const manageLogs = (inputVal) => {//결과 기록
  $logs.setAttribute('style', 'white-space: pre;');
  if (answer.join('') === inputVal) {
    $logs.textContent += "홈러어어어어어언!!! 🥳🥳";
    tries.push(inputVal);
    return;
  } else {
    $logs.textContent += `${inputVal} => strike: ${strike}, ball: ${ball}, out: ${out}\r\n`;
    strike = 0;
    ball = 0;
    out = 0;
  }
  if (tries.length >= 9) {
    $logs.textContent += `실패입니다! \n답은 : ${answer.join('')} 였습니다.`;
    return;
  }
  tries.push(inputVal);
}


const checkInput = (inputVal) => {//입력값 필터링
  if (inputVal.length !== 4) {
    return alert('4자리 숫자를 입력해 주세요');
  }
  if (new Set(inputVal).size !== 4) {
    return alert('중복되지 않게 입력해 주세요.');
  }
  if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.');
  }
  compareInput(inputVal);
  manageLogs(inputVal);
}


const submitHandler = (e) => {
  if (tries[tries.length-1] !== answer.join('')) {
    e.preventDefault();
    const inputValue = $input.value; //데이터
    input.value = ''; //화면
    checkInput(inputValue);
    console.log(tries);
  } else {
    alert('새로 시작됩니다!');
  }
}

$form.addEventListener('submit', submitHandler);


