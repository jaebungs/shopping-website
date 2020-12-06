import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartProductsTemplate from './ShoppingCartProducts';

const ShoppingCartPage = (props) => {
    return (
        <div className="shoppingCartPage-container">
            <div className="cart-subtitle-container">
                <h3>No.</h3>
                <h3>Pic</h3>
                <h3>Product</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
                <h3>Btn</h3>
            </div>
                {
                    props.carts.map((cart, index) => {
                        return <ShoppingCartProductsTemplate 
                                    key={cart.id}
                                    index={index}
                                    {...cart} 
                                />
                    })
                }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}
export default connect(mapStateToProps)(ShoppingCartPage);