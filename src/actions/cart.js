export const ADD_ITEM_QUANTITY    = 'ADD_ITEM_QUANTITY';
export const REMOVE_ITEM_QUANTITY = 'REMOVE_ITEM_QUANTITY';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';

export function addItem(itemId){
    return {
        type: ADD_ITEM,
        payload: { itemId: itemId }
    }
}

export function removeItem(itemId){
    return {
        type: REMOVE_ITEM,
        payload: { itemId: itemId }
    }
}

export function changeItemQuantity(quantity, itemId){
    return {
        type: CHANGE_ITEM_QUANTITY,
        payload: { quantity: quantity, itemId: itemId }
    }
}