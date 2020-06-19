import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "store";

const TodoItem = ({ item, onBtnClick }) => {
  return (
    <li>
      <span>{item}</span>
      <button onClick={onBtnClick}>X</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);

  return {
    onBtnClick: () => dispatch(actionCreator.removeTodo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(TodoItem);
