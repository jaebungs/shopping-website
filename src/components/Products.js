import React from 'react';
import { connect } from 'react-redux';

export const ProductsTemplate = ({ id, img, name, price, quantity }) => (
    <div className="product-card">
        <img 
            src={img}
            alt={img + " img"}
            className="image-products"
        />
        <h5>{name}</h5>
        <p>{price}$ CAD</p>
        <input></input>
        <button>Add Cart</button>
    </div>
)