import React from 'react'

export default ProductList = ({ products, onAddToCart }) => {
    
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
                            {el.description} {el.price}
                        </div>
                        <div>
                            {el.stock && (<button onClick={() => onAddToCart(el)}>buy</button>) || 'sold out'}
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
