import { fetchProductsSuccess, fetchProductsError } from '../../actions/products';
import { workerSagaFetchProducts } from '../../sagas/products.js';
import { put } from "redux-saga/effects";

describe('products saga test', () => {
   
  it('call workerSagaFetchProducts and dispatch success action', () => {
   
        const mockResponse = {};
        const fn = workerSagaFetchProducts();
        fn.next();

        expect(fn.next(mockResponse).value)
        .toEqual(put(fetchProductsSuccess({})));

       expect(fn.next().done).toBeTruthy();
  });

  it('call workerSagaFetchProducts and dispatch error action', () => {
   
        const mockResponse = { message: 'error'};
        const fn = workerSagaFetchProducts();
        fn.next();

        expect(fn.throw(mockResponse).value)
        .toEqual(put(fetchProductsError(mockResponse.message)));

        expect(fn.next().done).toBeTruthy();
    });
});