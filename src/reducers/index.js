import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR
, ADD_TO_CART, ADD_TO_CART_ERROR, ADD_QUANTITY} from '../actions';

export const initialState = {
    pending: false,
    products: [],
    error: null,
    addedProducts: []
}

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING: 
        return Object.assign({}, state, {
            pending: true
          })
        case FETCH_PRODUCTS_SUCCESS:
            return  Object.assign({}, state, {
                pending: false,
                products: action.payload
            });
        case FETCH_PRODUCTS_ERROR:
            return Object.assign({}, state, {
                pending: false,
                error: action.error
            });    
        case ADD_TO_CART: {
            
            const addedProducts = Object.assign([], state.addedProducts);
            const productIdx = addedProducts.map(e => e.id).indexOf(action.payload.id);
            if ( productIdx !== -1) {
                
                addedProducts[productIdx].quantity +=1; 
            }
            else {
                const product = action.payload;
                product.quantity = 1;
                addedProducts.push(product)
            }

            return Object.assign({}, state, {
                addedProducts: addedProducts
            });
        }
        case ADD_TO_CART_ERROR: {
            return Object.assign({}, state, {
                error: action.error
            });
        }
        case ADD_QUANTITY: {
            const addedProducts = Object.assign([], state.addedProducts);
            const productIdx = addedProducts.map(e => e.id).indexOf(action.payload.productId);
            addedProducts[productIdx].quantity = parseInt(action.payload.quantity);
            return Object.assign({}, state, {
                addedProducts: addedProducts
            }); 
        }
        default: 
            return Object.assign({}, state);
    }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;

export const getAddedProducts = state => state.addedProducts;