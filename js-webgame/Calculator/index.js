const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

let firstNum = '';
let secondNum = '';
let operator = '';


const onClickNumber = (e) => {
  const clikedNum = e.currentTarget.textContent;
  if (!operator) {
    firstNum += clikedNum; //데이터
    $result.value += clikedNum;//화면, 공통
    return;
  }
  if (!secondNum) {
    $result.value = '';
  }
  secondNum += clikedNum //데이터
  $result.value += clikedNum;//화면, 공통
}

const calculate = () => {
  if (operator) {
    switch (operator[0]) {
      case '+':
        $result.value = parseFloat(firstNum) + parseFloat(secondNum);
        break;
      case '-':
        $result.value = firstNum - secondNum;
        break;
      case 'x':
        $result.value = firstNum * secondNum;
        break;
      case '/':
        $result.value = firstNum / secondNum;
        break;
      default:
        break;
    } 
    firstNum = '';
    firstNum = $result.value;
    secondNum = '';
    
  }
}

const onClickOperator = (e) => {
  if (firstNum) {
    const clickedOperator = e.currentTarget.textContent;
    operator = clickedOperator;
    $operator.value = clickedOperator;
  }
  if (secondNum) {
    calculate();
    operator[0] = '';
  }
}



// -,*./ 는 문자열을 숫자로 바꿔주기 때문에 parseInt()를 적용하지 않아도 됨
const onClickCalculate = () => {
  calculate();
  operator = '';
  $operator.value = '';
}

const onClickClear = () => {
  firstNum = '';
  secondNum = '';
  operator = '';
  $operator.value = '';
  $result.value = '';
}



// 0~9 숫자에 click 걸어줌
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

// oprator에 click 걸어줌
document.querySelector('#plus').addEventListener('click', onClickOperator);
document.querySelector('#minus').addEventListener('click', onClickOperator);
document.querySelector('#divide').addEventListener('click', onClickOperator);
document.querySelector('#multiply').addEventListener('click', onClickOperator);

// clear 버튼에 click 걸어줌
document.querySelector('#clear').addEventListener('click', onClickClear);

// '=' 버튼에 click 걸어줌
document.querySelector('#calculate').addEventListener('click', onClickCalculate);


