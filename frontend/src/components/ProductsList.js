import React, { Fragment} from 'react'
import { Button, Spin } from 'antd';

export const ProductList = ({ pending, products, onAddToCart }) => {
    
    const renderList = () => {
        return (<div className="row"> {
            products.map((el, idx) => {
                    return (
                        <div className="col-4" key={idx}>
                            <div className="row">
                                <div className="col-12" align="center"> 
                                   <img src={`./resources/images/${el.img}`} className="light"></img>
                                </div>
                            </div>
                            <div className="p-10-0 row">
                                <div className="col-12" align="center">
                                    {el.title} - {el.brand}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12" align="center">
                                    {el.description} {el.price}
                                </div>
                            </div>
                            <div className="row p-20-0 p-b-30">
                                <div className="col-3"></div>
                                <div className="col-6" align="center">
                                    {el.stock &&
                                        (<Button type="default"
                                            shape="round"
                                            className="btn-default"
                                            block
                                            onClick={() => onAddToCart(el)}>Buy</Button>
                                        ) || 'Sold Out'}
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        );
    }

    let component = null;
    if(products){
        component = renderList(products);
    }

    return (
        <Fragment>
            <h2>Products</h2>
              {
                  pending && <div className="loading"><Spin size="middle" /></div>
                  || ( <div className="row"><div className="col-12">{component}</div></div>)
              }  
        </Fragment>
    );
}
