import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import ShoppingCartProductsTemplate from "./ShoppingCartProducts";

const ShoppingCartPage = (props) => {
  const cartsLength = props.carts.length;

  const [subtotal, setSubtotal] = useState(0);

  //When cart store and price change, update summary prices.
  useEffect(() => {
    let subtotal = 0;
    let tax = 0;
    let total = 0;

    for (let i = 0; i < cartsLength; i++) {
      subtotal += props.carts[i].price * props.carts[i].quantity;
    }
    tax = subtotal * 0.3;
    total = subtotal + tax;
    setSubtotal(subtotal);
  }, [subtotal, props]);

  return (
    <div className="shoppingCartPage-container">
      <div className="cart-lists-contianer">

        <div className="cart-subtitle-container">
          <h5>No.</h5>
          <h5></h5>
          <h5>Product</h5>
          <h5>Quantity</h5>
          <h5>Price</h5>
          <h5></h5>
        </div>

        {(props.carts.length === 0) ? <h2>No items in your cart.</h2> :
          props.carts.map((cart, index) => {
            return (
              <ShoppingCartProductsTemplate
                key={cart.id}
                index={index}
                {...cart}
              />
            );
          })
        }
        
      </div>
      
      <div className="cart-summary-container">
        <h3>Summary</h3>
        <div className="flex-space-between">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex-space-between">
          <p>Shipping</p>
          <p>$-</p>
        </div>
        <div className="flex-space-between">
          <p>Taxes</p>
          <p>${parseFloat((subtotal * 0.3).toFixed(2))}</p>
        </div>
        <div className="flex-space-between total-container">
          <p>Total(CAD)</p>
          <p>${parseFloat((subtotal * 1.3).toFixed(2))}</p>
        </div>
        <Link to="/checkout" >
          <button className="checkout-btn btn">Proceed to Checkout</button>
        </Link>
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.carts
  }
};

export default connect(mapStateToProps)(ShoppingCartPage);
