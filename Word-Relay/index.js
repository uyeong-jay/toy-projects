// const numberOfParticipants = parseInt(prompt('몇명이 참가하실건가요?'),10);
// console.log('numberOfParticipants', numberOfParticipants);
// const alertNumberOfParticipants = alert(numberOfParticipants);
// const confirmNumberOfParticipants = confirm(`${numberOfParticipants}명이 맞으신가요?`);


const $order = document.querySelector('span#order');
const $word = document.querySelector('span#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

let word; // 제시어
let newWord; // 입력된 단어

const showWord = () => {
  word = newWord;
  $word.textContent = word;
  $input.value = '';
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



