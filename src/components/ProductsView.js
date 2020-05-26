import React from 'react'
import { connect } from "react-redux";
import { fetchProductsPending } from '../actions';
import {getProductsError, getProducts, getProductsPending} from '../reducers';

const ProductList = ({ products }) => {
    
    const renderList = () => {
        return (<ul>
            {
                products.map((el, idx) => (
                    <li key={idx}>
                        <div >
                            {el.title} - {el.brand}
                        </div>
                        <div>
                            {el.description} {el.price} {el.quantity ? ` x ${el.quantity}` : null}
                        </div>
                        <div>
                            <button>comprar</button>
                        </div>
                    </li>
                ))
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

class ProductsView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {fetchProducts} = this.props;
        fetchProducts();
    }

    render() {
        const {pending, products, error} = this.props;

        if(pending){
            return <p>loading...</p>
        } 

        return (
            <div className='product-list-wrapper'>
                {error && <span className='product-list-error'>{error}</span>}
                <ProductList products={products} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProductsPending())
  }  
}

export const ProductsViewConnected = connect(mapStateToProps, mapDispatchToProps)(ProductsView);