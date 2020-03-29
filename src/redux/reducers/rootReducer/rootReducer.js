import { combineReducers } from "redux";
import cartReducer from "../cart-reducer/cartReducer";
import authReducer from "../auth-reducer/authReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth:authReducer
});
export default rootReducer;
