import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <header>
        <h1 className="logo">UWG</h1>
        <NavLink
            exact
            to='/'
            activeClassName="is-active"
            className="nav"
        >
            Home
        </NavLink>
        <NavLink
            to='/products'
            className="nav"
            activeClassName="is-active"
        >
            Products
        </NavLink>
        <NavLink
            to='/cart'
            className="nav"
            activeClassName="is-active"
        >
            <i className="fas fa-shopping-cart cart-icon"></i>
            Cart
            <div className="cart-items-indicator">{props.carts.length}</div>
        </NavLink>
    </header>
);

const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}

export default connect(mapStateToProps)(Header);