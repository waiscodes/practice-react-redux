import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import toDosReducer from "./reducers/todos";
import { addNewToDo } from "./actions/todos";
import { Provider } from "react-redux";
import ToDos from "./components/ToDos";
import ToDoList from "./components/ToDoList";

/*
 * Redux store
 * Store is our global state. This is where all the global data exists.
 * We pass in the reducer so that it'll know how to handle and actions (requests.)
 *
 */
const store = createStore(
  toDosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// We can add this to get a console log notification everytime something in the store changes.
// subscribe is a method of createStore that allows to track changes. And you console long those changes basically.
store.subscribe(() => console.log(store.getState()));

/*
 * Redux Dispatch
 * This is what we use to send actions to send actions to our store's reducer.
 */

// Displatch expects a properly formatted action..
// (otherwise your reducer won't know what to do! )
store.dispatch(addNewToDo("Research Redux"));

ReactDOM.render(
  <Provider store={store}>
    <ToDos />
    <ToDoList />
  </Provider>,
  document.getElementById("root")
);
