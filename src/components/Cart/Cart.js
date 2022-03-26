import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, price, picture } = props.product
    const { handleAddToCart } = props;
    return (
        <div className='product'>
            <div>
                <img src={picture} alt=""></img>
                <p className='product-name'>{name}</p>
                <p>price:${price}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>

    );
};

export default Cart;