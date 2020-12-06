import React from "react";
import { connect } from "react-redux";
import { cartAddProduct } from "../actions/cart";
import { productQuantityDecrement, productQuantityIncrement } from "../actions/products";

const ProductsTemplate = ({ id, img, name, price, quantity, dispatch, carts }) => {
  return (
    <div className="product-card">
      <img src={img} alt={img + " img"} className="image-products" />
      <h4>{name}</h4>
      <p>{price}$ CAD</p>
      <div>
        <button
          className="quantity-btn btn"
          onClick={() => {
            if (quantity > 1) {
                dispatch(productQuantityDecrement(id));
            }
          }}
        >
          -
        </button>
        <label htmlFor={"quantityFor" + id}>
          <input
            type="text"
            name="quantity"
            id={"quantityFor" + id}
            value={quantity}
            readOnly
          />
        </label>
        <button
          className="quantity-btn btn"
          onClick={() => {
            dispatch(productQuantityIncrement(id));

          }}
        >
          +
        </button>
      </div>
      <button
        className="add-cart-btn btn"
        onClick={() => {
          if (carts.find(cart => cart.id == id)){
            alert('Item is already in the cart')
          } else {
            dispatch(cartAddProduct({ id, img, name, price, quantity }));
          }
        }}
      >
        Add Cart
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.carts
  }
}

export default connect(mapStateToProps)(ProductsTemplate);
