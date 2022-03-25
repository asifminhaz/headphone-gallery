import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Carts.css'
const Carts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="earphone-container">
            <div className="products-container">
                {
                    products.map(product => <Cart

                        product={product}
                    ></Cart>)
                }
            </div>
            <div className="carts-container">
                <h1>Selected Clothes</h1>
            </div>
        </div>
    );
};

export default Carts;