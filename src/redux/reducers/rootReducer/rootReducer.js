import { combineReducers } from "redux";
import cartReducer from '../cart-reducer/cartReducer'
import authReducer from "../auth-reducer/authReducer";
import notifyReducer from "../auth-notification/userNotification";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: authReducer,
  nitification:notifyReducer
});
export default rootReducer;
