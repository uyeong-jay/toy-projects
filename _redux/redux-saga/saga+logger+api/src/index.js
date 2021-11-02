import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "redux-logger";
import createSagaMiddleware from "redux-saga";

// import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history"; //history 직접만들기

import App from "./App";
import rootReducer from "./_reducers/index";
import rootSaga from "./_sagas";

const browserHistory = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({
  context: {
    //사가 내부에서 history 사용
    history: browserHistory
  }
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware))
  //여러개의 미들웨어 적용가능
  //logger 사용시 logger는 맨 마지막에 위치
);

sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router history={browserHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
  rootElement
);
