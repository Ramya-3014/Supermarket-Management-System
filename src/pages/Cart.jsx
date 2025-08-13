import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, removeAllCart } = useContext(CartContext);
  const navigate = useNavigate();

  const grandTotal = cart.reduce((total, item) => {
    // Handle price formats like "Rs. 150 / kg", "Rs. 45", etc.
    const priceStr = item.price.toString();
    // Extract just the numeric part before any non-digit characters
    const match = priceStr.match(/[\d,]+\.?\d*/);
    const numericPrice = match ? parseFloat(match[0].replace(/,/g, '')) : 0;
    return total + (numericPrice || 0) * (item.quantity || 0);
  }, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2 className="total">Grand Total: Rs. {grandTotal.toFixed(2)}</h2>
          <button className="remove-all-btn" onClick={() => removeAllCart()}>Remove All</button>
          <button className="back-btn" onClick={() => navigate("/products")}>Back to Products</button>
        </>
      )}
    </div>
  );
}

export default Cart;
