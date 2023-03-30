import { combineReducers } from "redux";
import { calculator } from "./calculator";
import { user } from "./user";


export const rootReducer = combineReducers({
  calculator: calculator,
  user: user
});

