import React from 'react';
import { connect } from 'react-redux';

export const ProductsTemplate = ({ id, img, name, price, quantity }) => (
    <div className="product-card">
        <img 
            src={img}
            alt={img + " img"}
            className="image-products"
        />
        <h4>{name}</h4>
        <p>{price}$ CAD</p>
        <div>
            <button className="quantity-btn btn">-</button>
            <label for="quantity">
                <input type="text" name="quantity" id="quantity" value="1" readonly />
            </label>
            <button className="quantity-btn btn">+</button>
        </div>
        <button className="add-cart-btn btn">Add Cart</button>
    </div>
)