import React, { useState } from "react";
import { createStore } from "redux";

export default () => {
  const [todoText, setTodoText] = useState("");
  const onChangeTodoInput = (e) => {
    setTodoText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(todoText);
    setTodoText("");
  };

  return (
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
  );
};
