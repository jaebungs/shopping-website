import React from 'react';
import { connect } from 'react-redux';
import { cartAddProduct } from '../actions/cart';

const ProductsTemplate = ({ id, img, name, price, quantity, dispatch }) => {
    return (
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
            <label htmlFor={"quantityFor"+id}>
                <input type="text" name="quantity" id={"quantityFor"+ id} value="1" readOnly />
            </label>
            <button className="quantity-btn btn">+</button>
        </div>
        <button 
            className="add-cart-btn btn"
            onClick={()=>{
                dispatch(cartAddProduct({ id, img, name, price, quantity }))
            }}
        >Add Cart</button>
    </div>
)}

const mapStateToProps = (state, props) => {
    return {
        
    }
}

export default connect()(ProductsTemplate)