import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchProductsPending, fetchProductToCart, addProductToCart } from '../actions/products';
import { getProductsError, getProducts, getProductsPending, getAddedProducts} from '../reducers';
import { CartBriefConnected } from "./CartBrief";

const ProductList = ({ products, onAddToCart }) => {
    
    const renderList = () => {
        return (<ul>
            {
                products.map((el, idx) => {    
                return (
                    <li key={idx}>
                        <div >
                            {el.title} - {el.brand}
                        </div>
                        <div>
                            {el.description} {el.price} {el.quantity ? ` x ${el.quantity}` : null}
                        </div>
                        <div>
                            {el.stock && (<button onClick={() => onAddToCart(el.id)}>buy</button>) || 'sold out'}
                        </div>
                    </li>
                )})
            }
        </ul>
        );
    }

    let component = null;
    if(products){
        component = renderList(products);
    }

    return (
        <div>
            <h3>{'Products'}</h3>
            <div className="container">
                {component}
            </div>
        </div>
    );
}

const ProductsView = (props) => {
    useEffect(() => {
        const { fetchProducts } = props;
        fetchProducts();
    }, []);

    const onAddToCart = (productId) => {
        const { addedProducts } = props;
        const productIdx = addedProducts.map(e => e.id).indexOf(productId);
            if ( productIdx === -1) {
                const { fetchProduct } = props;
                fetchProduct(productId);
            }
            else {
                const { onAddToCart } = props;
                onAddToCart(addedProducts[productIdx]);
            }
    }

    const { pending, products, error } = props;

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
                <CartBriefConnected />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state),
    addedProducts: getAddedProducts(state)
})

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProductsPending()),
    fetchProduct: (productId) => dispatch(fetchProductToCart(productId)),
    onAddToCart: (product) => dispatch(addProductToCart(product))
  }  
}

export const ProductsViewConnected = connect(mapStateToProps, mapDispatchToProps)(ProductsView);