import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";

import ConnectedMain from "./containers/ConnectedMain";
import reducer from "./redux/reducers";

import { getMessagesInjector } from "./redux/actions/messages"

const store = createStore(reducer);

/* this will initialize the state */
getMessagesInjector( store.dispatch )()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedMain />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();