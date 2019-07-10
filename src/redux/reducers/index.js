import { combineReducers } from "redux";
// API Status Reducer
import apiStatus from "./apiStausReducer";

const rootReducer = combineReducers({
  apiStatus
});

export default rootReducer;
