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

const checkWinner = (currentTarget) => { // 승자인 경우들
  const rowIndex = currentTarget.parentNode.rowIndex;
  const cellIndex = currentTarget.cellIndex;

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



const checkWinnerAndDraw = (currentTarget) => { // 승자판단
  const hasWinner = checkWinner(currentTarget);
  if (hasWinner) {
    $result.textContent = `${turn}님이 승!`
    $table.removeEventListener('click', tableCallback);
    return; // 함수까지 확실히 끝내기
  }
  const draw = rows.flat().every((cell) => cell.textContent);
  if (draw) {
    $result.textContent = `비김`;
    return;
  }
  turn = turn === 'O' ? 'X' : 'O'; // 턴 바꿈
  // 왜 여기안에서만 턴을 바꿔야하지?
  // 스코프 때문이다.
  // tableCallback함수안에서 턴을 바꾸면 전역의 let turn = 'X' 으로 바뀜
  // 따라서 다시 클릭하면 X가 넣어짐.
  // checkWinnerAndDraw함수안에서 턴을 바꾸면 바뀐당시에만 바뀌고 전역에선 바뀌지 않음
  // 따라서 다시 클릭하면 그대로 O가 넣어짐.
};

const computerSelect = (turn) => {
    const emptyCells = rows.flat().filter((v) => !v.textContent);
    const randomCells = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    // 생각하는 척하게 만들기
    setTimeout(() => {
      if(emptyCells) {
        randomCells.textContent = turn;
        checkWinnerAndDraw(randomCells);
      }
    }, 500);

}
// ******if를 중첩한 형태 ******
// const tableCallback = (event) => {
//   if (!event.target.textContent) {
//     event.target.textContent = turn; 
//     checkWinnerAndDraw(event.target); 
//     // 승자체크
//     // event.targe = td

//     if (turn === 'X') {
//       computerSelect(turn);
//     }
//   } else {
//     alert(`이미 채워진 곳입니다.`);
//   }
// };

// ******if 중첩을 없앤 형태 ******
const tableCallback = (event) => {
  if (event.target.textContent) {
    alert(`이미 채워진 곳입니다.`);
    return;
  } 
  event.target.textContent = turn; 
  checkWinnerAndDraw(event.target); 
  // 승자체크
  // event.targe = td
  if (turn === 'X') {
    computerSelect(turn);
  }
  
};



$table.addEventListener('click', tableCallback); 
// 이벤트 버블링
