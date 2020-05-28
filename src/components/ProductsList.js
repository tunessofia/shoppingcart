import React from 'react'
import { Button } from 'antd';

export const ProductList = ({ products, onAddToCart }) => {
    
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
                                            block
                                            onClick={() => onAddToCart(products[j])}>Buy</Button>
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
        <div className="p-30-50">
            <h2>Products</h2>
            <div className="row">
                <div className="col-12">
                {component}
                </div>
            </div>
        </div>
    );
}
