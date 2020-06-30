import { combineReducers } from "redux";
import averageloginReducer from "./averageloginReducer";
import usageCategoryReducer from "./usageCategoryReducer";
import notificationReducer from "./notificationReducer";

const allReducers = combineReducers({
  login: averageloginReducer,
  usage: usageCategoryReducer,
  notification: notificationReducer,
});
export default allReducers;
