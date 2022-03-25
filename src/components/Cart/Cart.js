import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, price, picture } = props.product
    return (
        <div className='product'>
            <img src={picture} alt=""></img>

        </div>
    );
};

export default Cart;