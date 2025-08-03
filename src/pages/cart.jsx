import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart_box">
      <div className="cart-page">
      <h2 className="cart-heading">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart-msg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, idx) => (
              <li key={idx} className="cart-item">
                <span className="item-info">
                  {item.name} <strong>₹{item.price}</strong>
                </span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>

          <div className="cart-footer">
            <h3 className="cart-total">Total: ₹{total}</h3>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default Cart;
