import React from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getCart } from '../reducers/cart';
import { changeItemQuantity, removeItem } from '../actions/cart';
import { debounce } from '../debouncer';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const debounceTime = 300;
const Cart = (props) => {
    const { cart } = props;
    let totalCart = cart.reduce((acc, el) => acc + (parseFloat(el.price) * el.quantity), 0);
    
    const history = useHistory();
    const handleCheckout = () => {
        history.push("checkout");
    }

    const renderCart = () => {
        const { changeQuantity, removeItem } = props;
        const items = cart.map((el, idx) => {
            return (
                <div key={idx} className="p-10-0">
                    <div className="row">
                        <div className="col-12">
                            {el.title} - {el.brand}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <span>Price</span>
                        </div>
                        <div className="col-10">
                            <span>{parseFloat(el.price)}/un</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Qtd
                        </div>
                        <div className="col-6">
                            <input className="form-control" type="number" onChange={(e) => changeQuantity(e.target.value, el.id)} value={el.quantity} />
                        </div>
                        <div className="col-3">
                            <Button className="ghost" icon={<CloseOutlined />} type="default" onClick={() => removeItem(el.id)} />
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
        <div className="p-30-50">
            <h2>Cart</h2>
            <div className="row">
                <div className="col-12">
                    {renderCart()}
                </div>
            </div>
            <div className="row p-20-0">
                <div className="col-12">
                    <span>
                        Total: {`${parseFloat(totalCart).toFixed(2)} €`}
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    { cart.length>0 && 
                        <Button type="primary" 
                                className="btn-primary" 
                                shape="round" 
                                block 
                                onClick={handleCheckout}>Checkout</Button> 
                    }
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
        changeQuantity: (quantity, productId) => debounce(() => dispatch(changeItemQuantity(quantity, productId)), debounceTime),
        removeItem: (productId) => dispatch(removeItem(productId))
    }
}

export const CartConnected = connect(mapStateToProps, mapDispatchToProps)(Cart);