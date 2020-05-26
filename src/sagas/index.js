import { takeLatest, call, put } from "redux-saga/effects";
import {FETCH_PRODUCTS_PENDING, fetchProductsSuccess, fetchProductsError} from '../actions/';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  ;
    yield takeLatest(FETCH_PRODUCTS_PENDING, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  const myInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  try {
    ;
    const products = yield call(() =>
      fetch('http://localhost:3000/products', myInit)
        .then(response => {
          var contentType = response.headers.get("content-type");
          if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json()
          } else {
            console.log("Oops, we haven't got JSON!");
          }
        }
      )
    );

    // dispatch a success action to the store with the products
    yield put(fetchProductsSuccess(products));

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(fetchProductsError(error));
  }
}

