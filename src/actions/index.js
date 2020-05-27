export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';
export const ADD_QUANTITY = 'ADD_QUANTITY';

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

export function fetchProduct(productId) {
    return {
        type: FETCH_PRODUCT,
        productId: productId
    }
}

export function onAddToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function addToCartError(error) {
    return {
        type: ADD_TO_CART_ERROR,
        error: error
    }
}

export function addQuantity(quantity, productId){
    
    return {
        type: ADD_QUANTITY,
        payload: { quantity: quantity, productId: productId }
    }
}