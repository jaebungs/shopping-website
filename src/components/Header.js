import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <NavLink
            exact
            to='/'
            activeClassName="is-active"
        >
            Home
        </NavLink>
        <NavLink
            to='/products'
            activeClassName="is-active"
        >
            Products
        </NavLink>
        <NavLink
            to='/cart'
            activeClassName="is-active"
        >
            Cart
        </NavLink>
    </header>
);

export default Header;