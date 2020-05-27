export const ADD_QUANTITY = 'ADD_QUANTITY';

export function addQuantity(quantity, productId){
    
    return {
        type: ADD_QUANTITY,
        payload: { quantity: quantity, productId: productId }
    }
}