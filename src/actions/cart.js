export const cartAddProduct = (
    {
        id,
        img,
        name,
        price,
        quantity
    }={}) => ({
    type: 'CART_ADD_PRODUCT',
    product: {
        id,
        img,
        name,
        price,
        quantity
    }
})

export const cartRemoveProduct = (id) => ({
    type: 'CART_REMOVE_PRODUCT',
    id
})

export const cartQuantityEditProduct = ( {id, quantity} ) => ({
    type: 'CART_QUANTITY_EDIT_RPODUCT',
    id,
    quantity
})