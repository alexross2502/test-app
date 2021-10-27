import React from "react";
import ReactDOM from "react-dom";
import state from "./state.js";
import "./index.css";

import App from "./App";

let rerenderEntireTree = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={props} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

state.refresh();

setTimeout(() => {
  rerenderEntireTree(state);
}, 1000);

setInterval(() => {
  state.refresh();
  rerenderEntireTree(state);
}, 5000);
