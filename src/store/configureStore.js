import { createStore, combineReducers } from 'redux';
import cartReducer from '../reducers/cart';
import productsReducer from '../reducers/products';

export default () => {
    const store = createStore(
        combineReducers({
            products: productsReducer,
            carts: cartReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}