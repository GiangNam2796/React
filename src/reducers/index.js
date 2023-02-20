
import hobbyReducer from "./Hobby";
import userReducer from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

export default rootReducer;