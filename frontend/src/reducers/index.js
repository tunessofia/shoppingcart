import { combineReducers } from 'redux';
import shoppingCart from './cart';
import products from './products';

const rootReducer = combineReducers({
    cart: shoppingCart,
    products,
});

export default rootReducer;