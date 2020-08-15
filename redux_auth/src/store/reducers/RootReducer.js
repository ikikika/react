import { combineReducers } from "redux";
import UserAuthReducer from "../reducers/User/Auth/UserAuthReducer";

const RootReducer = combineReducers({
  userAuth: UserAuthReducer,
});

export default RootReducer;
