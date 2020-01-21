import { createStore,combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";
import userReducer from "./reducers/userReducer";

const store = createStore(combineReducers({loginReducer,userReducer}));

export default store;