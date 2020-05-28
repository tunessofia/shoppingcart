import React from 'react';
import { connect } from "react-redux";
import { getCart } from '../reducers/cart';
import { changeItemQuantity, removeItem } from '../actions/cart';
import { useHistory } from 'react-router-dom';
import { debounce } from '../debouncer';

const debounceTime = 300;
const Checkout = (props) => {
    const { cart } = props;
    let totalCart = cart.reduce((acc, el) => acc + (parseFloat(el.price) * el.quantity), 0);

    const history = useHistory();
    const handleBack = () => {
        history.push("/");
    }

    const renderCart = () => {
        const { changeQuantity, removeItem } = props;
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
                            <button onClick={() => removeItem(el.id)}>Remove</button>
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

        return items;
    }

    return (
        <div>
            <div>
                <h2>{'Checkout'}</h2>
                { cart.length>0 && renderCart()}
                { cart.length == 0 && 'Empty Cart'}
            </div>
            { cart.length>0 && (<div>{totalCart}</div>)}
            { cart.length>0 && (<div>
                <button>Encomendar</button>
            </div>) || <button onClick={handleBack}>Voltar</button>}
        </div>
    );
}

const mapStateToProps = state => ({
    cart: getCart(state)
})

const mapDispatchToProps = dispatch => {
    return {
        changeQuantity: (quantity, productId) => debounce(() => dispatch(changeItemQuantity(quantity, productId)), debounceTime),
        removeItem: (productId) => dispatch(removeItem(productId))
    }
}

export const CheckoutConnected = connect(mapStateToProps, mapDispatchToProps)(Checkout);