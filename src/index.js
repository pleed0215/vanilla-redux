/*import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);*/

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

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
});
