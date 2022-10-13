import React from 'react';
import PropTypes from 'prop-types';

const Product = ( { product } ) => {
    console.log("🚀 ~ file: Product.jsx ~ line 5 ~ Product ~ product", product)
    return (
        <>
        
            <div className="w-3/4 sm:w-1/3 lg:w-1/4 xl:w-1/5 m-2 -2 rounded-xl bg-[url(https://pbs.twimg.com/media/D4ZIBUjW4AAwPWb.jpg)] text-white">
                <div className="w-full flex justify-center my-2 h-56">
                    <img className="w-fit m-auto h-full" src={product.image} alt=""/>
                </div>
                <div className="flex flex-col justify-center p-2">
                    <h1 className="flex justify-center text-md md:text-xl font-bold underline"> {product.name} </h1>
                    <h4 className="text-md ml-2 mt-2">Species: {product.species} </h4>
                    <h4 className="text-md ml-2 mt-2">Location: {product.location.name} </h4>
                </div>
            </div>
            
        </>
    )
}

Product.propTypes = {
    product: PropTypes.object
}

export default Product;
