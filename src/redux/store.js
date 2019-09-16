/*
Represents the ENTIRE state of the application.
  - Middleware are functions that are run before the root reducer and after the action is dispatched. 
  - Middlewares receive actions as input, does something with the action, then passes the action to the root reducer.
*/

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

/* Configures all Middlewares as an array */
const middlewares = [logger];

/* 
createStore accepts two inputs
  - rootReducer representing the apps ENTIRE state.
  - applyMiddleware, a store enhancer that applies all our custom methods.
*/
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
