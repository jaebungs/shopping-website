const cartReducerDefault = [];

const cartReducer = (state = cartReducerDefault, action) => {
    switch(action.type) {
        case 'CART_ADD_PRODUCT':
            return [
                ...state,
                action.product
            ];
        case 'CART_REMOVE_PRODUCT':
            return state.filter((cart) => cart.id !== action.id);
        case 'CART_QUANTITY_EDIT_RPODUCT':
            return state.map((product) => {
                if (product.id === action.id) {
                    return product = {
                        ...product,
                        quantity: product.quantity + action.quantity
                    }
                } else {
                    return product;
                }
            })
        default:
            return state;
    }
}

export default cartReducer;