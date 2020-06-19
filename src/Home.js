import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "store";

import TodoItem from "TodoItem";

function Home({ todos, addTodo, removeTodo }) {
  console.log(todos);
  const [todoText, setTodoText] = useState("");
  const onChangeTodoInput = (e) => {
    setTodoText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo(todoText);
    setTodoText("");
  };

  return (
    <>
      <div>
        <h1>TODO Excercise!</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Write your things to do"
            value={todoText}
            onChange={onChangeTodoInput}
          />
          <button style={{ marginLeft: "10px" }}>TODO</button>
        </form>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <TodoItem id={todo.id} key={todo.id} item={todo.item} />
          ))}
        </ul>
      </div>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    todos: state,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => dispatch(actionCreator.addTodo(text)),
  };
}

//export default connect(mapStateToProps)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
