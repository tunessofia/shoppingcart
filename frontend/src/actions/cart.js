export const ADD_ITEM   = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
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

export function changeItemQuantity(itemQuantity, itemId){
    return {
        type: CHANGE_ITEM_QUANTITY,
        payload: { itemQuantity: itemQuantity, itemId: itemId }
    }
}