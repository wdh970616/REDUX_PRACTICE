import { combineReducers } from "redux";
import userReducer from "./UserModule";
import menuReducer from "./MenuModule";

// 콤바인리듀서
const rootReducer = combineReducers({
    userReducer,
    menuReducer
});

export default rootReducer;
