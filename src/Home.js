import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator, actionAddTodo } from "store";

import TodoItem from "TodoItem";

function Home({ todos, addTodo, removeTodo }) {
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
          {todos && todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
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
    //addTodo: (text) => dispatch(actionCreator.addTodo(text)),
    addTodo: (text) => dispatch(actionAddTodo(text)),
  };
}

//export default connect(mapStateToProps)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
