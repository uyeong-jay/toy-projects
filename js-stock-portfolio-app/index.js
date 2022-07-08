// 메뉴 추가
// - [x] 메뉴이름 입력 받아 엔터키와 버튼클릭으로 추가되게 하기
// - [x] 메뉴는 ul 태그에 메뉴 추가 되게 하기
// - [x] 메뉴 추가 되면 input은 빈값으로 초기화 하기
// - [x] 총 메뉴 갯수 세어 보여주기
// - [x] 사용자의 입력값이 빈 값이면 추가되지 않도록 하기

// 메뉴 수정
// - [x] 메뉴 수정 버튼을 누르면 수정값을 입력받는 모달창(prompt)이 뜬다.
// - [] 모달창에 수정값을 입력 후 확인 버튼을 누르면 메뉴가 수정된다.
// - [] 모달창에서 취소 버튼을 누르면 수정되지 않는다.

//선택자 모음
const selectors = {
  stockName: ".electric-car-name",
  stockForm: ".electric-car-form",
  stockList: ".electric-car-name-list",
  stockCount: ".electric-car-menu-count",
  addBtn: ".add-button",
};

//선택자 선택 함수
const $ = (selector) => document.querySelector(selector);

//태그 생성 함수
const tag = (element) => document.createElement(element);

//추가된 주식 종목 모아 놓는 배열
let stockMenus = [];

//종목을 갯수를 보여주는 함수
function countMenu() {
  $(selectors.stockCount).textContent = `총 ${stockMenus.length}개`;
}

//수정 버튼 클릭시 실행되는 함수
function handleEditBtn(electricCarName) {
  const editContent = prompt("종목이름을 수정해주세요.", electricCarName);
}

//유저 입력값 생성 함수
function createName(electricCarName) {
  if (electricCarName) {
    //입력된 값이 빈값이 아닐떄
    //태그 생성
    const li = tag("li");
    const span = tag("span");
    const soldOutBtn = tag("button"); //품절 버튼
    const eidtBtn = tag("button"); //수정 버튼
    const delBtn = tag("button"); //삭제 버튼

    //태그 배치
    $(selectors.stockList).appendChild(li);
    li.appendChild(span);
    li.appendChild(soldOutBtn);
    li.appendChild(eidtBtn);
    li.appendChild(delBtn);

    //태그에 텍스트 넣기
    span.textContent = electricCarName;
    soldOutBtn.textContent = "품절";
    eidtBtn.textContent = "수정";
    delBtn.textContent = "삭제";

    //수정 버튼 클릭시 이벤트
    eidtBtn.addEventListener("click", () => handleEditBtn(electricCarName));
  } else {
    //입력된 값이 빈값이 일때
    alert("종목 이름을 입력해주세요.");
    return; //현재 함수 끝내기
  }
  stockMenus.push(electricCarName); //추가된 종목 모아놓기
  countMenu(); //추가된 종목 갯수 세기
}

function handleSubmit(e) {
  //form의 기본동작인 '전송후 새로고침되는 동작' 막아주기
  e.preventDefault();

  //메뉴이름 입력 받기
  const electricCarName = $(selectors.stockName).value; //유저 입력값 저장
  $(selectors.stockName).value = ""; //유저 입력값 초기화
  //(참조값이 아닌 원본을 초기화 해주기)

  createName(electricCarName); //유저 입력값 생성
}

//0. 브라우저가 js 파일을 불러왔을때 js가 실행되도록 만들기
function App() {
  $(selectors.stockForm).addEventListener("submit", handleSubmit); //엔터시 이벤트
  $(selectors.addBtn).addEventListener("click", handleSubmit); //추가 버튼 클릭시 이벤트
  $(selectors.stockCount).textContent = "총 0개"; //초기 갯수 보여주기
}

App();

// <메뉴 삭제>
// 메뉴 삭제 버튼
// 메뉴 삭제 확인(브라우저 confirm 인터페이스 활용)
// 삭제, 취소 버튼
// 삭제 > 삭제됨
// 취소 > 삭제 안됨
// 총 메뉴 갯수 세기
// 총 메뉴 갯수 표시(우측 상단)
