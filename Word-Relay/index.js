const totalPlayers = parseInt(prompt('몇명이 참가하실건가요?'),10);

const $order = document.querySelector('span#order');
const $word = document.querySelector('span#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

const $body = document.querySelector('body');
const message = document.createElement('div');
$body.append(message);


let word; // 제시어
let newWord; // 입력된 단어
let currentPlayer = 1;






if (number) {
  const onInput = (e) => {
    newWord = e.currentTarget.value;
  };
  
  const player = () => {
    if (currentPlayer < totalPlayers) {
      currentPlayer++;
      $order.textContent = currentPlayer;
      console.log(currentPlayer);
    } else {
      currentPlayer = 1; // 초기화
      $order.textContent = currentPlayer;
  
    }
  };
  
  const showWord = () => {
    word = newWord;
    $word.textContent = word;
    $input.value = '';
    player();
  };
    
  const onClickButton = () => {
    if (!word || word[word.length - 1] === newWord[0]) {
      showWord();
      message.textContent = '';
    } else {
      message.textContent = '올바르지 않은 단어 입니다.'
    }
  };
  
  $input.addEventListener('input', onInput);
  $button.addEventListener('click', onClickButton);
}





