import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartProductsTemplate from './ShoppingCartProducts';

const ShoppingCartPage = (props) => {
    return (
        <div>
            <h1>{props.carts.length}</h1>
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