import StudentReducer from "./StudentReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  student: StudentReducer,
});

export default rootReducer;