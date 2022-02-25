import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

// import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history"; //history 직접만들기

import App from "./App";
import rootReducer from "./_reducers/index";

const browserHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({ history: browserHistory }), //thunk에서 세번째 파라미터로 history 전달
      loggerMiddleware
    )
  )
  //여러개의 미들웨어 적용가능
  //logger 사용시 logger는 맨 마지막에 위치
);

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
