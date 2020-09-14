import React, { useState } from "react";

const ToDos = () => {
  const [newTask, setNewTask] = useState("");
  return (
    <>
      <h2>To-Do From</h2>
      <form>
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
export default ToDos;
