import shoppingCart from '../../reducers/cart.js';
import { ADD_ITEM, REMOVE_ITEM, CHANGE_ITEM_QUANTITY } from '../../actions/cart';

describe('cart reducer test', () => {
    it('should handle a first add item to cart', () => {
        const action = { type: ADD_ITEM, payload: { itemId: 1 } } ;

        const expectedResult = [{id: 1, quantity: 1 }];
debugger;
        expect(shoppingCart([], action))
        .toEqual(expectedResult);
    });

    it('should increase quantity on add item to cart', () => {
        const state = [{ id: 1, quantity: 1 }];
        const action = { type: ADD_ITEM, payload: { itemId: 1 } } ;

        const expectedResult = [{id: 1, quantity: 2 }];

        expect(shoppingCart(state, action))
        .toEqual(expectedResult);
    });
});