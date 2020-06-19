import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
/*
  vanilla redux version of code. 
import { createStore } from "redux";
let globalIndex = 0;

const formTodo = document.getElementById("form-todo");
const todoText = document.getElementById("todo-input");
const submit = document.getElementById("submit-todo");
const todoUl = document.getElementById("todo-list");

const ITEM_ADD = "@TODO_ITEM_ADD";
const ITEM_REMOVE = "@TODO_ITEM_REMOVE";

const todoModifier = (todoItems = [], action) => {
  const item = action?.data?.item,
    id = action?.data?.id;

  switch (action.type) {
    case ITEM_ADD:
      return [...todoItems, { id, item }];
    case ITEM_REMOVE:
      return todoItems.filter((todo) => todo.id !== action?.data?.id);
    default:
      return todoItems;
  }
};

const todoStore = createStore(todoModifier);
const todosRender = () => {
  const todos = todoStore.getState();

  //while (todoUl.hasChildNodes()) {
  //  todoUl.removeChild(todoUl.firstChild);
  //}
  todoUl.innerHTML = "";

  if (todos && todos.length > 0) {
    todos.map((todo) => {
      const node = document.createElement("li");
      const textNode = document.createTextNode(todo.item);
      const buttonNode = document.createElement("button");

      node.id = `@item-${todo.id}`;
      buttonNode.innerText = "𝗫";
      buttonNode.style.margin = "2px 0px 2px 15px";
      buttonNode.addEventListener("click", (e) => {
        const pickedId = parseInt(e.target.parentNode.id.split("-")[1]);

        todoUl.removeChild(e.target.parentNode);
        console.log(e.target.parentNode);
        todoStore.dispatch({
          type: ITEM_REMOVE,
          data: {
            id: pickedId,
          },
        });
      });
      node.appendChild(textNode);
      node.appendChild(buttonNode);
      todoUl.appendChild(node);
    });
  }
};

todoStore.subscribe(todosRender);
submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (todoText.value) {
    const item = todoText.value;
    const id = globalIndex++;

    todoStore.dispatch({
      type: ITEM_ADD,
      data: {
        id,
        item,
      },
    });
  }
  todoText.value = "";
});
*/
