/**
- takeEvery is the effect that listens for EVERY action of a specific TYPE passed into it
- call is the effect inside the generator function that invokes the method
- put is the effect for creating actions, i.e. dispatch
- takeLatest is the effect that issues the function ONCE, i.e. the last one to be executed
 */

import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

/* Creating a Saga, i.e. A Generator Function */
export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections"); //'collections' is the name of collection in Firestore Database
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // Async version using redux-thunk
  // collectionRef
  //   .get()
  //   .then(snapshot => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

/* ROOT SAGA */
export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
