import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewToDo } from "../actions/todos";

const ToDos = (props) => {
  //THis is local state
  const [newTask, setNewTask] = useState("");

  const sumbitToDo = (event) => {
    event.preventDefault();

    props.dispatch(addNewToDo(newTask));
  };
  return (
    <>
      <h2>To-Do From</h2>
      <form onSubmit={sumbitToDo}>
        <label htmlFor="task">Enter New Task: </label>
        <input
          id="task"
          type="text"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default connect(
  //WE set up a mapStateToProps function/relationship.
  //The parameter/arguments is from the redux store
  //What gets reutrned gets tacked on to your component props
  (state) => {
    return { toDo: state };
  }
)(ToDos);
//When there are two perenthesis together like this,  the first function returns a function, and then the second perenthesis are basically what are simply added into it.
