// used configureStore instead.
//import { createStore } from "redux";
import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

const ITEM_ADD = "@TODO_ITEM_ADD";
const ITEM_REMOVE = "@TODO_ITEM_REMOVE";

// adding redux js toolkit version code.

// using createAction(reduxjs toolkit), I don't need to make this code.
const addTodo = createAction(ITEM_ADD);
const removeTodo = createAction(ITEM_REMOVE);
/*const addTodo = (text) => {
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
};*/

// using 'createReducer', I made this code again in different way.
// in constrast with vanilla redux, CAN MUTATE STATE!
// two way to state manimpulating,
// 1. state matating, 2. state returning.
// 근데 나는 한가지 방법만 쓰고 싶은데...
// 리턴할 때는 새로운 state, mutating 한 state를 리턴하면 안된다.
const todoModifier = createReducer(
  JSON.parse(window.localStorage.getItem("todos")) || [],
  {
    [addTodo]: (state, action) => {
      const newState = [...state, { item: action?.payload, id: Date.now() }];
      window.localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    [removeTodo]: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      window.localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
  }
);

/*const todoModifier = (
  todoItems = JSON.parse(window.localStorage.getItem("todos")) || [],
  action
) => {
  // remeber this, we don't use action.item or action.id no more,
  // it's 'payload' we'll use. because of reduxjs/toolkit.
  //const item = action?.payload,
  const payload = action?.payload,
    id = Date.now();
  let newTodos;

  console.log(todoItems);
  switch (action.type) {
    // instead of using ITEM_ADD
    //case ITEM_ADD:
    case addTodo.type:
      newTodos = [...todoItems, { id, payload }];
      window.localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    // instead of using ITEM_ADD
    //case ITEM_REMOVE:
    case removeTodo.type:
      newTodos = todoItems.filter((todo) => todo.id !== payload);
      window.localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    default:
      return todoItems;
  }
};*/

// using createSlice .. can make code more short.
// 사실상 createSlice만 써도 reducer 안 써도 된다.
const todoSlicer = createSlice({
  name: "todoModifier",
  initialState: JSON.parse(window.localStorage.getItem("todos")) || [],
  reducers: {
    addTodo: (state, action) => {
      const newState = [...state, { item: action?.payload, id: Date.now() }];
      window.localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    removeTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      window.localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
  },
});

// for using createSlicer.. need a bit mutating.
export const actionCreator = {
  addTodo: (text) => addTodo(text),
  removeTodo: (id) => removeTodo(id),
};

// this is createSlicer version of action creator.
export const {
  addTodo: actionAddTodo,
  removeTodo: actionRemoveTodo,
} = todoSlicer.actions;

//export const todoStore = createStore(todoModifier);
// for using ... redux dev tool??
//export const todoStore = configureStore({ reducer: todoModifier });
// version of createSlicer
export const todoStore = configureStore({ reducer: todoSlicer.reducer });

// -----vanilla js redux version code.

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
