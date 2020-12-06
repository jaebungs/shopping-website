export const productQuantityIncrement = (id) => ({
    type: 'PRODUCT_QUANTITY_INCREMENT',
    id
})

export const productQuantityDecrement = (id) => ({
    type: 'PRODUCT_QUANTITY_DECREMENT',
    id
})