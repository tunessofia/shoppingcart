import { call, put } from "redux-saga/effects";
import { fetchProductsSuccess, fetchProductsError } from '../actions/products';
import { GET } from "./api";
import config from "../configs";

// worker saga: makes the api call when watcher saga sees the action
export function* workerSagaFetchProducts() {  
    try {
      const products = yield call(() =>
        fetch(`${config.api.endpoint}/products`, GET)
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