import React from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

import { getCart } from '../reducers/cart';
import { changeItemQuantity } from '../actions/cart';

const Cart = (props) => {
    const { cart } = props;
    let totalCart = cart.reduce((acc, el) => acc + (parseFloat(el.price) * el.quantity), 0);
    
    const handleCheckout = () => {
        const history = useHistory();
        history.push("/checkout");
    }

    const renderCart = () => {
        const { changeQuantity } = props;
        const items = cart.map((el, idx) => {
            return (
                <div key={idx}>
                    <div className="row">
                        <div className="col-md-5">
                            {el.title} - {el.brand}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <span>Price {parseFloat(el.price)}/un</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <span>Qtd</span>
                        </div>
                        <div className="col-md-1">
                            <input type="number" onChange={(e) => changeQuantity(e.target.value, el.id)} value={el.quantity} />
                        </div>
                        <div className="col-md-1">
                            <span>Price</span> 
                        </div>
                        <div className="col-md-1">
                            { parseFloat(parseFloat(el.price) * el.quantity).toFixed(2)}
                        </div>
                    </div>
                </div>
            )
        })

        if(!items.length){
            return (<span>empty cart</span>);
        }

        return items;
    }

    return (
        <div style={styles.fixed}>
            <h2>{'Cart'}</h2>
            <div>
                <div className="row">
                    {renderCart()}
                </div>
                <div className="row">
                    <span>
                        Total: {`${parseFloat(totalCart).toFixed(2)} €`}
                    </span>
                </div>
                <div className="row">
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    cart: getCart(state)
})

const mapDispatchToProps = dispatch => {
  return {
    changeQuantity : (quantity, productId) => dispatch(changeItemQuantity(quantity, productId)),
  }  
}

export default CartConnected = connect(mapStateToProps, mapDispatchToProps)(Cart);