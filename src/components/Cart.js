import React from 'react';

const Cart = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                        </div>
                    ))}
                    <p>Total Price: ${totalPrice}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;