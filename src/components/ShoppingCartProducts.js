import React from "react";
import { connect } from "react-redux";
import { cartQuantityEditProduct, cartRemoveProduct } from "../actions/cart";

const ShoppingCartProductsTemplate = ({
  id,
  img,
  name,
  price,
  quantity,
  index,
  dispatch,
}) => {
  return (
    <div className="cart-product-card">
      <h4>{index + 1}.</h4>
      <img src={img} />
      <p>{name}</p>
      <div>
        <button
          className="quantity-btn btn"
          onClick={() => {
            if (quantity > 1) {
              dispatch(cartQuantityEditProduct({ id, quantity: -1 }));
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
            dispatch(cartQuantityEditProduct({ id, quantity: 1 }));
          }}
        >
          +
        </button>
      </div>

      <p>{price * quantity}$ CAD</p>
      <button
        className="remove-btn btn"
        onClick={() => {
          dispatch(cartRemoveProduct(id));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(ShoppingCartProductsTemplate);
