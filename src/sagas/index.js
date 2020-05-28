import { all, takeLatest } from "redux-saga/effects";
import {FETCH_PRODUCTS_PENDING} from '../actions/';
import workerSagaFetchProducts from './products';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* rootWatcherSaga() {
  yield all([
    takeLatest(FETCH_PRODUCTS_PENDING, workerSagaFetchProducts),
    /* .. other watchers */
  ]);
}



