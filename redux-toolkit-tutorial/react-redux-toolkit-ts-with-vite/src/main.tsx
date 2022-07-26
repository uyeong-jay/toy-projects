import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Provider, store 불러오기
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* App에 store를 넣은 Provider로 감싸주기 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
