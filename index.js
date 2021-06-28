// 화면 <=> 데이터
const $table = document.createElement('table');
const $result = document.createElement('div');
document.body.append($table);
document.body.append($result);
const rows = [];

for (let i=0; i<3; i++) {
  const $tr = document.createElement('tr');
  $table.append($tr);
  const cells = [];
  rows.push(cells);
  for (let j=0; j<3; j++) {
    const $td = document.createElement('td');
    $tr.append($td);
    cells.push($td);
  }
}

// rows =
// [ 
//   [td,td,td], // rowIndex
//   [td,td,td],
//   [td,td,td],
// ]

let turn = 'O';

const checkWinner = (target) => { // 승자인 경우들
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;

  // index로 좌표 표시
  console.log(rowIndex);
  console.log(cellIndex);

  let hasWinner = false; // 승자판단용

  //세칸 모두 찼는지 검사
  if ( // 가로줄 검사
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
  ) {
    hasWinner = true;
  }
  if ( // 세로줄 검사
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn 
  ) {
    hasWinner = true;
  }
  if (
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn 
  ) {
    hasWinner = true;
  }
  if (
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn 
  ) {
    hasWinner = true;
  }
  return hasWinner;
};

// const checkDraw = () => {
//   $result.textContent = '비김';
//   return;
// }

const checkWinnerAndDraw = (target) => { // 승자판단
  const hasWinner = checkWinner(target);
  if (hasWinner) {
    $result.textContent = `${turn}님이 승!`
    $table.removeEventListener('click', tableCallback);
    return; // 함수까지 확실히 끝내기
  }
};

const computerSelect = (turn, event) => {
    const emptyCells = rows.flat().filter((v) => !v.textContent);
    const randomCells = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    if(emptyCells) {
      randomCells.textContent = turn; // 분명 다 찼는데도 여기로오네
    } else {
      chackDraw();
    }
}

const tableCallback = (event) => {
  // console.log(event.target);2
  if (!event.target.textContent) {
    console.log('넣어짐')
    event.target.textContent = turn; 
    checkWinnerAndDraw(event.target); // 승자체크
    // target은 td 
    //event.targe을 인자에 넣으면 해당 target을 인수로 넘길수있다
    turn = turn === 'O' ? 'X' : 'O'; // 턴 바꿈
    if (turn === 'X') {
      computerSelect(turn);
      turn = turn === 'O' ? 'X' : 'O'
    }
    
  } else {
    console.log('채워진곳');
  }
};

$table.addEventListener('click', tableCallback); // 이벤트 버블링
