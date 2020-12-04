import React from 'react';
import { connect } from 'react-redux';
import { ProductsTemplate } from './Products';

const ProductsPage = (props) => {
    return (
        <div className="products-container">
            <h1>Products</h1>
            {
                props.products.map((product) => {
                    return <ProductsTemplate key={product.id} {...product} />
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductsPage);