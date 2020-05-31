import React from 'react';
import { connect } from "react-redux";
import { getCart } from '../reducers/cart';
import { changeItemQuantity, removeItem } from '../actions/cart';
import { useHistory } from 'react-router-dom';
import { debounce } from '../debouncer';
import { Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import configs from "../configs";

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
                <div key={idx} className="p-10-0">
                    <div className="row">
                        <div className="col-8">
                            {el.title} - {el.brand}
                        </div>
                        <div className="col-3" align="right">
                            <span>Price</span>
                        </div>
                        <div className="col-1" align="right">
                            <span>{parseFloat(el.price)}/un</span>
                        </div>
                    </div>
                    <div className="row p-t-10">
                        <div className="col-3">
                            <Button 
                                className="btn-ghost" 
                                icon={<CloseOutlined />} 
                                type="default" 
                                onClick={() => removeItem(el.id)}>Remove</Button>
                        </div>
                        <div className="col-8" align="right">
                            Qtd
                        </div>
                        <div className="col-1" align="right">
                            <Input required min="0"  type="number" onChange={(e) => changeQuantity(e.target.value, el.id)} value={el.quantity} />
                        </div>

                    </div>
                </div>
            )
        })

        return items;
    }

    return (
        <div className="row">
            <div className="col-12 theme-content-light">
                <div className="p-30-50">
                    <h2>Checkout</h2>
                    {cart.length > 0 && renderCart()}
                    {cart.length == 0 && 'Empty Cart'}
                    { cart.length > 0 && 
                    (<div className="row p-20-0">
                        <div className="col-11" align="right">Total:</div>
                        <div className="col-1" align="right">{totalCart}</div>
                      </div>      
                    )}
                    <div className="row">
                        <div className={ cart.length > 0 && "col-11" || "col-12"} align="right">
                            <Button className="btn-default" shape="round" type="default" onClick={handleBack}>Voltar</Button>
                        </div>
                        {cart.length > 0 &&
                            (<div className="col-1" align="right">
                                <Button shape="round" className="btn-primary" type="primary">Encomendar</Button>
                            </div>)
                        }
                    </div>
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
        changeQuantity: (quantity, productId) => debounce(() => dispatch(changeItemQuantity(quantity, productId)), configs.timeout),
        removeItem: (productId) => dispatch(removeItem(productId))
    }
}

export const CheckoutConnected = connect(mapStateToProps, mapDispatchToProps)(Checkout);