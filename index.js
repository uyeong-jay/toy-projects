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

const callback = (event) => {
  console.log(event.target);
  // event.target
}

$table.addEventListener('click', callback); // 이벤트 버블링

