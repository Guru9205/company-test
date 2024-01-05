import React from 'react';
import ProductCard from './ProductCard';


const ProductList = ({ products }) => {

    return (

        <div className='productCatList d-flex flex-wrap container justify-content-evenly'>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <div>
                            <ProductCard key={product.id} product={product} />
                        </div>
                    </div>
                )
                )}
        </div>
    );
};

export default ProductList;
