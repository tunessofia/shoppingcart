import { call, put } from "redux-saga/effects";
import { onAddToCart, addToCartError } from '../actions/';
import {GET} from "./headers";

export function* workerSagaFetchProductToCart(params) {
    try {
        const product = yield call(() =>
            fetch(`http://localhost:3000/products/${params.productId}`, GET)
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