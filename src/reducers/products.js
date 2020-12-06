import ProductsData from '../components/ProductsData';

const productsReducerDefaultState = [...ProductsData]

const productsReducer = (state = productsReducerDefaultState, action) => {
    switch(action.type) {
        case 'PRODUCT_QUANTITY_INCREMENT':
            return state.map((product) => {
                if (product.id === action.id){
                    return product ={
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            });
        case 'PRODUCT_QUANTITY_DECREMENT':
            return state.map((product) => {
                if (product.id === action.id){
                    return product ={
                        ...product,
                        quantity: product.quantity - 1
                    }
                } else {
                    return product;
                }
            });
        case 'PRODUCT_QUANTITY_EDIT':
            return state.map((product)=> {
                if (product.id === action.id){
                    return product = {
                        ...product,
                        quantity: action.value
                    }
                } else {
                    return product;
                }
            });
        default:
            return state;
    }
}

export default productsReducer;