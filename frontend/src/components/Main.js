import React, { useEffect, Fragment } from 'react'
import { connect } from "react-redux";
import { fetchProductsPending } from '../actions/products';
import { addItem } from '../actions/cart';
import { getProductsError, getProducts, getProductsPending } from '../reducers/products';
import { CartConnected } from "./Cart";
import { ProductList } from "./ProductsList";
import { debounce } from '../debouncer';
import configs from "../configs";

const MainView = (props) => {
    useEffect(() => {
        const { fetchProducts } = props;
        fetchProducts();
    }, []);

    const { onAddToCart, pending, products, error } = props;

    return (
        <div className="row">
            <div className="col-9 theme-content-light">
                <div className="p-30-50">
                    <ProductList pending={pending} products={products} onAddToCart={onAddToCart} />
                    { error && (<p className='product-list-error'>An error ocurred</p>)
                    }
                </div>
            </div>
            <div className="col-3">
                <div className="card ">
                    <div className="ant-card ant-card-bordered theme-content-light">
                       <CartConnected pending={pending}/>
                    </div>
                </div>
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
        onAddToCart: (product) => debounce(() => dispatch(addItem(product)), configs.timeout)
    }
}

export const MainViewConnected = connect(mapStateToProps, mapDispatchToProps)(MainView);