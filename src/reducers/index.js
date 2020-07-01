import { combineReducers } from "redux";
import averageloginReducer from "./averageloginReducer";
import usageCategoryReducer from "./usageCategoryReducer";
import notificationReducer from "./notificationReducer";
import notificationSelectionReducer from "./notificationSelectionReducer";

const allReducers = combineReducers({
  login: averageloginReducer,
  usage: usageCategoryReducer,
  notification: notificationReducer,
  notificationSelection: notificationSelectionReducer,
});
export default allReducers;
