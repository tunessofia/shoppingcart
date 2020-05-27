import { all, takeLatest } from "redux-saga/effects";
import {FETCH_PRODUCT_TO_CART, FETCH_PRODUCTS_PENDING} from '../actions/';
import {workerSagaFetchProducts} from './products';
import {workerSagaFetchProductToCart} from './cart';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield all([
    takeLatest(FETCH_PRODUCTS_PENDING, workerSagaFetchProducts),
    takeLatest(FETCH_PRODUCT_TO_CART, workerSagaFetchProductToCart),
  ]);
}



