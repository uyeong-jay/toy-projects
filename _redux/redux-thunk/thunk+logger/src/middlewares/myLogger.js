//logging middleware
const myLogger = (store) => (next) => (action) => {
  console.log("현재 상태 :", store.getState());
  console.log("액션 :", action);
  const result = next(action); //다음 미들웨어(or 리듀서)에게 액션을 전달
  console.log("새로운 상태 :", store.getState());
  return result;
};

export default myLogger;
