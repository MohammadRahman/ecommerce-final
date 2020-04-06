import { combineReducers } from "redux";
import cartReducer from '../cart-reducer/CartReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from "../auth-reducer/authReducer";
import notifyReducer from "../auth-notification/userNotification";

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['cart']
}

const rootReducer = combineReducers({
  cart: cartReducer,
  user: authReducer,
  nitification:notifyReducer
});
export default persistReducer(persistConfig,rootReducer);
