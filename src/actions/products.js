export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_PRODUCT_TO_CART = 'FETCH_PRODUCT';
export const ADD_PRODUCT_TO_CART = 'ADD_TO_CART';

export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function fetchProductsError(error) {
  return {
      type: FETCH_PRODUCTS_ERROR,
      error: error
  }
}

export function fetchProductToCart(productId) {
    return {
        type: FETCH_PRODUCT_TO_CART,
        productId: productId
    }
}

export function addProductToCart(product) {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
}

