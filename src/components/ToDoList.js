import React from "react";
import { connect } from "react-redux";
import { removeToDo } from "../actions/todos";

const ToDoList = (props) => {
  return (
    <>
      <h2>To-Do List</h2>
      <ul>
        {props.toDos.map((toDo) => (
          <li key={toDo.id}>
            {toDo.task}{" "}
            <button
              onClick={(event) => {
                props.dispatch(removeToDo(toDo.id));
              }}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

// Use connect to make our "To-Do list" available via props.toDos.
export default connect((state) => ({ toDos: state }))(ToDoList);
