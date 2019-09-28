/* 
Represents the STATE for the entire application. It combines all the states for our application.
  - combineReducer, from the redux library, combines ALL reducers from our application.
  - It exports the specific reducer based on a KEY.
*/
import { combineReducers } from "redux";
/* Persisting our reducer, similar to store */
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localStorage for web

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

/* 
Redux-Persist configuration - the JSON object we want redux-persist to use. It needs:
  - key, the point inside the reducer object we want to start storing
  - storage, either localStorage or sessionStorage
  - whitelist, string names of reducers we want to persist
*/
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

/* rootReducer has persistence capabilities */
export default persistReducer(persistConfig, rootReducer);
