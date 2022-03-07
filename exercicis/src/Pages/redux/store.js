import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const appReducer = combineReducers({
  counterReducer,
  todoReducer,
});

export default createStore(appReducer);
