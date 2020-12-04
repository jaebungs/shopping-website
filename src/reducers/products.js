import ProductsData from '../components/ProductsData';

const productsReducerDefaultState = [...ProductsData]

const productsReducer = (state = productsReducerDefaultState, action) => {
    switch(action.type) {
        case 'PRODUCT_EDIT_QUANTITY':
            return state.map((product) => {
                if (product.id === action.id){
                    return {
                        ...state,
                        ...action.quantity
                    }
                }
                else {
                    return product;
                }
            });
        default:
            return state;
    }
}

export default productsReducer;