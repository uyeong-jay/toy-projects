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



const submitHandler = (e) => {
  e.preventDefault();
  const value = $input.value
  input.value = '';
  
}

$form.addEventListener('submit', submitHandler);
