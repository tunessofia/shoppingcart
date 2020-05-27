import React from "react";
import { connect } from "react-redux";
import { getAddedProducts } from '../reducers';
import { addQuantity } from '../actions';

var styles = {
    fixed: {
      position: 'right',
      zIndex: '115',
      height: '100%',
      margin: '0',
      top: '0'
    }
};

const CartBrief = (props) => {
    const { addedProducts } = props;
    let totalCart = addedProducts.reduce((acc, el) => acc + (parseFloat(el.price) * el.quantity), 0);

    const renderAddedProducts = () => {
        const { addQuantity } = props;
        const products = addedProducts.map((el, idx) => {
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
                            <input type="number" onChange={(e) => addQuantity(e.target.value, el.id)} value={el.quantity} />
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

        if(!products.length){
            return (<span>empty cart</span>);
        }

        return products;
    }

    return (
        <div style={styles.fixed}>
            <h2 className="m-b-20">{'Cart'}</h2>
            <div className="clearfix m-b-10 vertical-center ">
                <div className="pull-left p-r-10">
                    {renderAddedProducts()}
                </div>
                <div>
                    <span>
                        Total: {`${parseFloat(totalCart).toFixed(2)} €`}
                    </span>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    addedProducts: getAddedProducts(state)
})

const mapDispatchToProps = dispatch => {
  return {
    addQuantity : (quantity, productId) => dispatch(addQuantity(quantity, productId)),
  }  
}

export const CartBriefConnected = connect(mapStateToProps, mapDispatchToProps)(CartBrief);