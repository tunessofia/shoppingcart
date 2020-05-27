import { all, takeLatest, call, put } from "redux-saga/effects";
import {FETCH_PRODUCT, onAddToCart, addToCartError
  , FETCH_PRODUCTS_PENDING, fetchProductsSuccess, fetchProductsError} from '../actions/';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield all([
    takeLatest(FETCH_PRODUCTS_PENDING, workerSaga),
    takeLatest(FETCH_PRODUCT, workerSagaFetchProduct),
  ]);
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
    const products = yield call(() =>
      fetch('http://localhost:3000/products', myInit)
        .then(response => {
          return response.json()
        }
      )
    );

    // dispatch a success action to the store with the products
    yield put(fetchProductsSuccess(products));

  } catch (error) {
    
    // dispatch a failure action to the store with the error
    yield put(fetchProductsError(error.message));
  }
}

function* workerSagaFetchProduct(params) {
  const myInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  try {
    
    const product = yield call(() =>
      fetch(`http://localhost:3000/products/${params.productId}`, myInit)
        .then(response => {
          return response.json()
        }
      )
    );

    // dispatch a success action to the store with the products
    yield put(onAddToCart(product));

  } catch (error) {
    
    // dispatch a failure action to the store with the error
    yield put(addToCartError(error.message));
  }
}


