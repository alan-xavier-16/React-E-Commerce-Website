/*
Represents the ENTIRE state of the application.
  - Middleware are functions that are run before the root reducer and after the action is dispatched. 
  - Middlewares receive actions as input, does something with the action, then passes the action to the root reducer.
*/

import { createStore, applyMiddleware } from "redux";
/* Allows browser to cache store based on our configuration */
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

/*Sagas used to handle side-effects such as asynchronous calls and impure functions */
const sagaMiddleware = createSagaMiddleware();

/* Configures all Middlewares as an array */
const middlewares = [sagaMiddleware];

/* Applying following middlewares ONLY in development */
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

/* 
createStore accepts two inputs
  - rootReducer representing the apps ENTIRE state.
  - applyMiddleware, a store enhancer that applies all our custom methods.
*/
const store = createStore(rootReducer, applyMiddleware(...middlewares));

/* Use saga middleware to run each individual saga */
sagaMiddleware.run(rootSaga);

/* Persisted version of store */
const persistor = persistStore(store);

export { store, persistor };
