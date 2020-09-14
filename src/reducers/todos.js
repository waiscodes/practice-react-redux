/*
 * Redux Reducers
 * A reducer will actually carry out the request or data mutation. It is expected an "action" to be passed at matches a type programmed-in.
 */

// We'd usually have tow paramerts:
// 1) is the state (defualt value.)
// 2) action (the request being sent.)

const toDosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_TO_DO":
      const newTask = {
        task: action.payload,
      };
      const newTodoList = [...state];
      newTodoList.push(newTask);
      return newTodoList;
    default:
      return state;
  }
};

export default toDosReducer;
