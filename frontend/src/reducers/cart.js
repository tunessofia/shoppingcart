import { ADD_ITEM, REMOVE_ITEM, CHANGE_ITEM_QUANTITY } from '../actions/cart';

const addItem = (state, itemId) => {
    const cart = Object.assign([], state);
    const itemIdx = cart.map(e => e.id).indexOf(itemId);
    if ( itemIdx !== -1) {
        cart[itemIdx].quantity +=1; 
    }
    else {
        cart.push({ id: itemId, quantity: 1});
    }

    return cart;
}

const removeItem = (state, itemId) => {
    debugger;
    const cart = Object.assign([], state);
    const itemIdx = cart.map(e => e.id).indexOf(itemId);
    if ( itemIdx !== -1) {
        cart.splice(itemIdx,1); 
    }

    return cart;
}

const changeItemQuantity = (state, data) => {
    const cart = Object.assign([], state);
    const itemIdx = cart.map(e => e.id).indexOf(data.itemId);
    if(!data.itemQuantity || data.itemQuantity < 0){
        data.quantity = 0;
    }

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