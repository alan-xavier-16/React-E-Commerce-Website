/*
- all is the effect that runs all sagas passed in simultaneously
*/

import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart)]);
}
