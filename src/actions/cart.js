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

export const CartRemoveProduct = (id) => ({
    type: 'CART_REMOVE_PRODUCT',
    id
})

export const CartQuantityEditProduct = ( id, quantity ) => ({
    tpye: 'CART_QUANTITY_EDIT_RPODUCT',
    id,
    quantity
})