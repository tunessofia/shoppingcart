import React from 'react';
import {Cart} from '../../components/Cart';
import { shallow } from 'enzyme';

describe('cart component test', () => {
    
    it('renders correctly on empty cart', () => {

        const wrapper = shallow(
            <Cart cart={[]} pending={false} />
      );
      
      expect(wrapper.containsMatchingElement(<span>Empty Cart</span>)).toEqual(true);
    });

    it('renders correctly on non empty cart', () => {

        const cart = [{id:1, quantity:1 }];

        const wrapper = shallow(
            <Cart cart={cart} pending={false} />
      );
      
      expect(wrapper.containsMatchingElement(<span>Empty Cart</span>)).toEqual(false);
    });

});