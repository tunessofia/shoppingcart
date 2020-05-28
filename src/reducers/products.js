import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions';

export function products(state = {}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:
            return Object.assign({}, state, {
                pending: true
            })
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                pending: false,
                products: action.payload
            });
        case FETCH_PRODUCTS_ERROR:
            return Object.assign({}, state, {
                pending: false,
                error: action.error
            });
        default:
            return Object.assign({}, state);
    }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;

