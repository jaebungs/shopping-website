import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ProductsPage from '../components/ProductsPage';
import ShoppingCartPage from '../components/ShoppingCartPage';
import CheckoutPage from '../components/CheckoutPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouters = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/products' component={ProductsPage} />
                <Route path='/cart' component={ShoppingCartPage} />
                <Route path='/checkout' component={CheckoutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouters;
