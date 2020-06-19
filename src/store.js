import React from "react";
import { createStore } from "redux";
let globalIndex = 0;

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

const addTodo = (text) => {
  return {
    type: ITEM_ADD,
    data: {
      id: globalIndex++,
      item: text,
    },
  };
};

const removeTodo = (id) => {
  return {
    type: ITEM_REMOVE,
    data: {
      id,
    },
  };
};

export const actionCreator = {
  addTodo: (text) => addTodo(text),
  removeTodo: (id) => removeTodo(id),
};

export const todoStore = createStore(todoModifier);
/*const todosRender = () => {
  const todos = todoStore.getState();

  //while (todoUl.hasChildNodes()) {
  //  todoUl.removeChild(todoUl.firstChild);
  //}

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
    });
  }
};

todoStore.subscribe(todosRender);*/
