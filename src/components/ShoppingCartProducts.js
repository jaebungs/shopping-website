import React from 'react';

const ShoppingCartProductsTemplate = ({ id, img, name, price, quantity, index }) => {
    return (
        <div className="cart-product-card">
            <h4>{index+1}.</h4>
            <img src={img}/>
            <p>{name}</p>
            <div>
                <button className="quantity-btn btn">-</button>
                <label htmlFor={"quantityFor"+id}>
                    <input type="text" name="quantity" id={"quantityFor"+ id} value={quantity} readOnly />
                </label>
                <button className="quantity-btn btn">+</button>
            </div>

            <p>{price * quantity}$ CAD</p>
            <button className="btn">Remove</button>
        </div>
    )
}

export default ShoppingCartProductsTemplate;