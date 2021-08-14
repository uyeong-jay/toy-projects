const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

let firstNum = '';
let secondNum = '';
let operator = '';


const onClickNumber = (e) => {
  const clikedNum = e.currentTarget.textContent;
  if (operator) {
    if (!secondNum) {
      $result.value = '';
    }
    secondNum += clikedNum //데이터
  } else {
    firstNum += clikedNum; //데이터
  }
  $result.value += clikedNum;//화면, 공통
}

const onClickOperator = (e) => {
  const clickedOperator = e.currentTarget.textContent;
  operator += clickedOperator;
  $operator.value = clickedOperator;
  
}



// 0~9 숫자에 click 걸어주기
document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

// oprator에 click 걸어주기
document.querySelector('#plus').addEventListener('click', onClickOperator);
document.querySelector('#minus').addEventListener('click', onClickOperator);
document.querySelector('#divide').addEventListener('click', onClickOperator);
document.querySelector('#multiply').addEventListener('click', onClickOperator);


