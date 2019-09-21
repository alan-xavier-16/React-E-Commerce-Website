/* 
Represents the STATE for the entire application. It combines all the states for our application.
  - combineReducer, from the redux library, combines ALL reducers from our application.
  - It exports the specific reducer based on a KEY.
*/
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
