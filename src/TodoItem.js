import React from "react";
import { connect } from "react-redux";
import { actionCreator, actionRemoveTodo } from "store";

import { Link } from "react-router-dom";

const TodoItem = ({ item, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        <span>{item}</span>
      </Link>
      <button onClick={onBtnClick}>X</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionRemoveTodo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(TodoItem);
