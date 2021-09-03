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
if (answer) {
  confirm(`숫자야구의 답이 준비되었습니다. 시작하시겠습니까?`);

  const tries = [];


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
    return true;
  }


  const submitHandler = (e) => {
    e.preventDefault();
    const inputVal = $input.value
    input.value = '';
    if (checkInput(inputVal)) {
      if (answer.join('') === value) {
        $logs.textContent = "홈런!";
        return;
      }
      if (tries.length >= 9) {
        
      }
      tries.push(inputVal);
    } else {
      alert('땡!');
    }
  }

  $form.addEventListener('submit', submitHandler);
}
