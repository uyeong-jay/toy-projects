import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "redux-logger"; //logger 미들웨어 불러오기
import createSagaMiddleware from "redux-saga";

import App from "./App";
import { rootReducer, rootSaga } from "./_reducers/index";

const sagaMiddleware = createSagaMiddleware(); //사가 미들웨어 생성

const store = createStore(
  //스토어 생성
  rootReducer, //리듀서 적용

  //여러개의 미들웨어 적용가능
  //logger라이브러리 사용시 logger는 맨 마지막에 위치
  composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware))
);

//항상 스토어 생성뒤 사가 적용할것
sagaMiddleware.run(rootSaga); //사가 적용

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
