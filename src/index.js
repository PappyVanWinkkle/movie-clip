import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import reducers from "./Reducers";
import "./index.css";
import HomeRoutes from './Components/HomeRoutes'
import registerServiceWorker from "./registerServiceWorker";


//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(<HomeRoutes />, document.getElementById('root'));
registerServiceWorker();
/*
ReactDOM.render(
  <Provider store={createStoreWithMiddleware (reducers)}>
    <Route  routes={routes} />
  </Provider>,
  document.getElementById("root")
);
*/