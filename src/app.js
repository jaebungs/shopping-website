import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouters from './routers/AppRouters';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

/* Things I have to do
    Home Page
    Products Page
    Cart Page
    Checkout Page
    NavHeader - Header.js
    NotfoundPage
    ContactPage?
    Routes

    redux
    should I put all products data to state? 
    than I need combineReducers for the cart
    or
    add to state whatever that is added to the cart?

    router function first
    Decorate each Page
    product card with quantity + - function
    set redux
    add to cart function and render
    delete and modify quantity on cartPage
    decorate checkoutPage
    Done!
*/

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('app'));

