import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist, removeFromWishlist, removeAllWishlist } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <>
          {wishlist.map((item) => (
            <div className="wishlist-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="wishlist-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button className="remove-all-btn" onClick={removeAllWishlist}>
            Remove All
          </button>
          <button className="back-btn" onClick={() => navigate("/products")}>
            Back to Products
          </button>
        </>
      )}
    </div>
  );
}

export default Wishlist;
