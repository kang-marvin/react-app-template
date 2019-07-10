import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from "./tools/serviceWorker";
import { initialState } from "./data/initialState";
import configureStore from "./redux/store/configureStore";

/** Import CDN css files here */

import routes from "./routes";
import "./styles/index.css";

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes(store.getState())}
    </Router>
  </Provider>
  , document.getElementById("root")
);

module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
