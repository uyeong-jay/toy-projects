// <메뉴추가>
// [x] 메뉴 입력
// [x] 메뉴 확인 버튼, 엔터 > 메뉴 추가 됨
// [x] 메뉴는 <ul></ul> 코드에 삽입되게 하기
// [] 총 메뉴 갯수 세기
// [] 총 메뉴 갯수 표시(우측 상단)
// input 빈값(input이 빈 값 > 메뉴 추가 안됨)

//화면에 접근
const $ = (selector) => document.querySelector(selector);
const selectors = {
  stockName: "#electric-car-name",
  stockForm: "#electric-car-form",
  stockList: "#electric-car-name-list",
};
const tag = (element) => document.createElement(element);

function createName(electricCarName) {
  //방법1.
  const li = tag("li");
  const span = tag("span");
  const soldOutBtn = tag("button");
  const eidtBtn = tag("button");
  const delBtn = tag("button");
  $(selectors.stockList).appendChild(li);
  li.appendChild(span);
  li.appendChild(soldOutBtn);
  li.appendChild(eidtBtn);
  li.appendChild(delBtn);
  span.textContent = electricCarName;
  soldOutBtn.textContent = "품절";
  eidtBtn.textContent = "수정";
  delBtn.textContent = "삭제";

  //방법2.
  //<insertAdjacentHTML or innerHTML: 보안에 취약>
  // $(selectors.stockList).insertAdjacentHTML(
  //   "beforeend",
  //   `
  //     <li>
  //       <span>${electricCarName}</span>
  //       <button type="button">품절</button>
  //       <button type="button">수정</button>
  //       <button type="button">삭제</button>
  //     </li>
  //   `
  // );
}

function handleSubmit(e) {
  //form의 기본동작인 전송후 새로고침되는 동작 막기
  e.preventDefault();

  //메뉴이름 입력 받기
  // console.log($(selectors.stockName).value); //유저 입력값
  const electricCarName = $(selectors.stockName).value; //유저 입력값 저장

  $(selectors.stockName).value = ""; //유저 입력값 초기화
  createName(electricCarName);
}

//0. 브라우저가 js 파일을 불러왔을때 js가 실행되도록 만들기
function App() {
  $(selectors.stockForm).addEventListener("submit", handleSubmit);
}

App();

// <메뉴 수정>
// 메뉴 수정 버튼 클릭
// 메뉴 입력창(브라우저 prompt 인터페이스 활용)
// 저장, 취소 버튼
// 저장 > 메뉴 바뀜
// 취소 > 메뉴 안바뀜

// <메뉴 삭제>
// 메뉴 삭제 버튼
// 메뉴 삭제 확인(브라우저 confirm 인터페이스 활용)
// 삭제, 취소 버튼
// 삭제 > 삭제됨
// 취소 > 삭제 안됨
// 총 메뉴 갯수 세기
// 총 메뉴 갯수 표시(우측 상단)
