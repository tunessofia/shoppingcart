import shoppingCart from '../../reducers/cart.js';
import { ADD_ITEM } from '../../actions/cart';

describe('cart reducer test', () => {
    it('should handle a first add item to cart', () => {
        const itemTest = {id: 1, price: "1.89"};
        const action = { type: ADD_ITEM, payload: { item: itemTest } } ;

        const expectedResult = [{item: itemTest, quantity: 1 }];

        expect(shoppingCart([], action))
        .toEqual(expectedResult);
    });

    it('should increase quantity on add item to cart', () => {
        const itemTest = {id: 1, price: "1.89"};
        const state = [{ item: itemTest, quantity: 1 }];
        const action = { type: ADD_ITEM, payload: { item: itemTest } } ;

        const expectedResult = [{item: itemTest, quantity: 2 }];

        expect(shoppingCart(state, action))
        .toEqual(expectedResult);
    });
});