// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
       SuperMart</div>
      <div className="navbar-links">
        <NavLink to="/home" end className="nav-link">
          Home
        </NavLink>
        {/* <NavLink to="/about" className="nav-link">
          About Us
        </NavLink> */}
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          Cart
        </NavLink>

        <NavLink to="/wishlist" className="nav-link">
        ❤️
        </NavLink>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
