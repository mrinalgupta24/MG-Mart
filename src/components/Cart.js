import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, updateCart }) => {

    const navigate = useNavigate();

    const handleQuantityChange = (id, quantity) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity };
            }
            return item;
        });
        updateCart(updatedCart);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };

    const navigateCheckout = () => {
        navigate('/finish');
    };

    return (
        <div>
            <h1>Your Cart</h1>
            <ul className="cart-list">
                {cartItems.map(item => (
                    <li key={item.id}>
                        <div>
                            <h3>{item.title}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <input
                                type="number"
                                min="0"
                                value={item.quantity}
                                onChange={e => handleQuantityChange(item.id, e.target.value)}
                            />
                            <p>Price: ${item.price}</p>
                            <p>Item Price: ${(item.quantity) * (item.price)}</p>
                        </div>
                        <div>
                            <img src={item.image} alt={item.title} />
                        </div>
                    </li>
                ))}
            </ul>
            <div className='cart-end'>
                <div className="cart-total">
                    Total Price: ${calculateTotalPrice()}
                </div>
                <div className="cart-checkout">
                    <button onClick={navigateCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
