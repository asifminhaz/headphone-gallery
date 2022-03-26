import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Carts.css'
const Carts = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className="earphone-container">
            <div className="products-container">
                {
                    products.map(product => <Cart
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Cart>)
                }
            </div>
            <div className="carts-container">
                <h1 className='headline'>Selected Products:</h1>
                <div>
                    {
                        cart.map(item => <h1>{item.name}</h1>)
                    }

                    <button className='button-style'>
                        <p>Choose 1 For Me</p>
                    </button>
                    <button className='btn2-style'>
                        <p>Choose Again</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carts;