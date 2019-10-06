/**
- takeEvery listens for EVERY action of a specific TYPE passed into it
 */

import { takeEvery } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

/* Creating a Saga, i.e. A Generator Function */
export function* fetchCollectionAsync() {
  yield console.log("Working");
}

export function* fetchCollectionStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
