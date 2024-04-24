import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
    const products = [/* Array of products */];
    return (
        <div className="row">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
