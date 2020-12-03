import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import 'normalize.css/normalize.css';
// import './styles/styles.scss';

/* Things I have to do
    Home Page
    Products Page
    Cart Page
    Checkout Page
    NavHeader - Header.js
    NotfoundPage
    ContactPage?
    Routes


    functions 
    - CRUD products to cart
    - Able to adjust quantity
    - Add all amount and show to pay.

    let's focus on router function first
    Decorate each Page
*/

ReactDOM.render(<AppRouters />, document.getElementById('app'));

