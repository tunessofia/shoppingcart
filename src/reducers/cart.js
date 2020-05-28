import { ADD_ITEM, REMOVE_ITEM, CHANGE_ITEM_QUANTITY } from '../actions/cart';

const addItem = (state, item) => {
    const cart = Object.assign([], state);
    const itemIdx = cart.map(e => e.id).indexOf(item.id);
    if ( itemIdx !== -1) {
        cart[itemIdx].quantity +=1; 
    }
    else {
        item.quantity = 1;
        cart.push(item)
    }

    return cart;
}

const removeItem = (state, item) => {
    debugger;
    const cart = Object.assign([], state);
    const itemIdx = cart.map(e => e.id).indexOf(item);
    if ( itemIdx !== -1) {
        cart.splice(itemIdx,1); 
    }

    return cart;
}

const changeItemQuantity = (state, data) => {
    const cart = Object.assign([], state);
    const itemIdx = cart.map(e => e.id).indexOf(data.itemId);
    cart[itemIdx].quantity = parseInt(data.quantity);
    return cart;
}

export default function shoppingCart(state = [], action) {
    switch (action.type) {
        case ADD_ITEM: {
            return addItem(state, action.payload.itemId);    
        }
        case REMOVE_ITEM: {
            return removeItem(state, action.payload.itemId);     
        }
        case CHANGE_ITEM_QUANTITY: {
            return changeItemQuantity(state, action.payload);     
        }
        default:
            return Object.assign([], state);
    }
}

export const getCart = state => state.cart;