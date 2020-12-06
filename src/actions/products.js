export const productQuantityIncrement = (id) => ({
    type: 'PRODUCT_QUANTITY_INCREMENT',
    id
})

export const productQuantityDecrement = (id) => ({
    type: 'PRODUCT_QUANTITY_DECREMENT',
    id
})

export const productQuantityEdit = (id, value) => ({
    type: 'PRODUCT_QUANTITY_EDIT',
    id,
    value
})