import React from 'react';

const ShoppingCartProductsTemplate = ({ id, img, name, price, quantity, index }) => {
    return (
        <div className="cart-product-card">
            <p>{index}</p>
            <img src={img}/>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default ShoppingCartProductsTemplate;