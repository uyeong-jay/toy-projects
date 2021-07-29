const totalPlayers = parseInt(prompt('몇명이 참가하실건가요?'),10);
// console.log('totalPlayers', totalPlayers);
// const alertNumberOfParticipants = alert(totalPlayers);
// const confirmNumberOfParticipants = confirm(`${totalPlayers}명이 맞으신가요?`);


const $order = document.querySelector('span#order');
const $word = document.querySelector('span#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

let word; // 제시어
let newWord; // 입력된 단어
let currentPlayer = 1;

const player = () => {
  if (currentPlayer < totalPlayers) {
    currentPlayer++;
    $order.textContent = currentPlayer;
    console.log(currentPlayer);
  } else {
    currentPlayer = 1; // 초기화
    $order.textContent = currentPlayer;

  }
}

const showWord = () => {
  word = newWord;
  $word.textContent = word;
  $input.value = '';
  player();
}

const onInput = (e) => {
  newWord = e.currentTarget.value;
};

const onClickButton = () => {
  if (!word) {
    showWord();

  } else if (word && word[word.length - 1] === newWord[0]) {
    showWord();

  } else {
    alert('Error');
  }
};

$input.addEventListener('input', onInput);
$button.addEventListener('click', onClickButton);



