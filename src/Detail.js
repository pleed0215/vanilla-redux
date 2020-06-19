import React from "react";
import { connect } from "react-redux";
//import { useParams } from "react-router-dom";

function Detail({ todo, id }) {
  return (
    <div>
      <h1>{todo?.item}</h1>
      <h4>create at {todo?.id}</h4>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    todo: state.find((todo) => todo.id === parseInt(id)),
    id: parseInt(id),
  };
}

export default connect(mapStateToProps)(Detail);
