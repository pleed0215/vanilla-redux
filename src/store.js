import { createStore } from "redux";

const ITEM_ADD = "@TODO_ITEM_ADD";
const ITEM_REMOVE = "@TODO_ITEM_REMOVE";

const todoModifier = (
  todoItems = JSON.parse(window.localStorage.getItem("todos")) || [],
  action
) => {
  const item = action?.data?.item,
    id = action?.data?.id;
  let newTodos;

  console.log(todoItems);
  switch (action.type) {
    case ITEM_ADD:
      newTodos = [...todoItems, { id, item }];
      window.localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    case ITEM_REMOVE:
      newTodos = todoItems.filter((todo) => todo.id !== action?.data?.id);
      window.localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    default:
      return todoItems;
  }
};

const addTodo = (text) => {
  return {
    type: ITEM_ADD,
    data: {
      id: Date.now(),
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
