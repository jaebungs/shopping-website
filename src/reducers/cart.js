const cartReducerDefault = [];

const cartReducer = (state = cartReducerDefault, action) => {
    switch(action.type) {
        case 'CART_ADD_PRODUCT':
            return [
                ...state,
                action.product
            ];
        case 'CART_REMOVE_PRODUCT':
            return state.filter((id) => id !== action.id);
        case 'CART_QUANTITY_EDIT_RPODUCT':
            return state.map((product) => {
                if (product.id === action.id) {
                    return product = {
                        ...product,
                        ...action.quantity
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