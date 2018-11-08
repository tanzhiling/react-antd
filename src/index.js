import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import Routers from "routers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import RootReducer from "reducers";
import "./styles/index.less";
const loggerMiddleware = createLogger();
const store = createStore(
  RootReducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    // loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Routers />
        </Provider>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
