import React from "react";

var styles = {
    fixed: {
      position: 'absolute',
      zIndex: '115',
      height: '100%',
      margin: '0',
      top: '0',
  
      '@media (max-width: 1024px)': {
        position: 'relative',
        display: 'flex',
        width: '92%',
        margin: '0 auto 20px',
        top: 'auto'
      }
    }
};

export const CartBrief = () => {
    
    return (
        <Fragment>
            <div style={styles.fixed}>
                <div className="price-box">
                    <h2 className="m-b-20">{'Cart'}</h2>
                    <div className="clearfix m-b-10 vertical-center ">
                        <div className="pull-left p-r-10">
                            {/* inserir tabela com cervejas compradas */}
                        </div>
                        <div className="pull-right m-l-auto">
                            <p id="product-value-total" className="price-value">
                                <span className="value">
                                    {/* valor total do carrinho */}    
                                </span>
                                <span>
                                    {/* inserir locale de moeda ? */}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment> 
    );
}
