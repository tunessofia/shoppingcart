import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchProductsPending } from '../actions/products';
import { addItem } from '../actions/cart';
import { getProductsError, getProducts, getProductsPending } from '../reducers/products';
import { CartConnected } from "./Cart";
import { ProductList }  from "./ProductsList";
import { debounce } from '../debouncer';

const debounceTime = 300;
const MainView = (props) => {
    useEffect(() => {
        const { fetchProducts } = props;
        fetchProducts();
    }, []);

    const { onAddToCart, pending, products, error } = props;

    if (pending) {
        return (<p>loading...</p>);
    }

    return (
        <div className="row">
            <div className='col-7'>
                <ProductList products={products} onAddToCart={onAddToCart}/>
                {error && <span className='product-list-error'>An error ocurred</span>}
            </div>
            <div className="col-5">
                <CartConnected />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state),
})

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProductsPending()),
    onAddToCart: (product) => debounce(() => dispatch(addItem(product)), debounceTime)
  }  
}

export const MainViewConnected = connect(mapStateToProps, mapDispatchToProps)(MainView);