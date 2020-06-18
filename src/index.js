/*import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);*/
import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const countModifier = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};
const countStore = createStore(countModifier);
countStore.subscribe(() => {
  number.innerHTML = countStore.getState();
});

console.log(countStore.getState());

plus.addEventListener("click", () => {
  countStore.dispatch({ type: "PLUS" });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});

/*
let count = 0;
const updateNumber = () => {
  number.innerHTML = count;
};

plus.addEventListener("click", () => {
  count++;
  updateNumber();
});

minus.addEventListener("click", () => {
  count--;
  updateNumber();
});*/
