import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions/products';

const initState = {
    products: [],
    pending: true,
    error: false
}

export default function products(state = initState, action) {
    switch (action.type) {
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

export const getProducts = state => state.products.products;
export const getProductsPending = state => state.products.pending;
export const getProductsError = state => state.products.error;

