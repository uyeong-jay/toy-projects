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

let turn = 'O';

const checkWinner = (target) => { // 승자인 경우들
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;
  console.log(rowIndex);
  console.log(cellIndex);
  if ()
}

const checkWinnerAndDraw = (target) => { // 승자판단
  const hasWinner = checkWinner(target);
  if (hasWinner) {
    $result.textContent = `${turn}님이 승!`
  }
}

const tableCallback = (event) => {
  // console.log(event.target);2
  if (!event.target.textContent) {
    console.log('빔')
    event.target.textContent = turn;
    turn = turn === 'O' ? 'X' : 'O';
  } else {
    console.log('채워짐')
    
  }
  checkWinnerAndDraw(event.target); // target은 td 
}

$table.addEventListener('click', tableCallback); // 이벤트 버블링

