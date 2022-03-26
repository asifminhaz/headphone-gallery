import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, price, picture } = props.product
    return (
        <div className='product'>
            <div>
                <img src={picture} alt=""></img>
                <p className='product-name'>{name}</p>
                <p>price:${price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>

    );
};

export default Cart;