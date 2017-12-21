import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./index.css";
import HomeRoutes from "./Components/HomeRoutes";
import registerServiceWorker from "./registerServiceWorker";

const createReduxStore = applyMiddleware(thunk)(createStore);
//ReactDOM.render(<HomeRoutes />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={createReduxStore(reducers)}>
    <HomeRoutes />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
