/*
 * Redux action(s)
 * Actions as "request" formatting, or labels for what we'll allow in terms of our store.
 * Actions define what we'll allow as requrests to our reducers (which in terns speaks directly to the store on our behalf.)
 *Action names, by convention, are upper case (they are considered "CONSTANTS.")
 */

const addNewToDo = (toDoContent) => {
  return {
    //This is the NAME of the action
    //type is is how the reducer knows what to do
    type: "ADD_NEW_TO_DO",
    //This is the DATA we are passing through to the reducer so that it can do ITS JOB
    payload: toDoContent,
  };
  //This is just a regular JS object
};
export { addNewToDo };
