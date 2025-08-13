// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">SuperMart</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/home" end className="nav-link" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link" onClick={closeMenu}>
          Products
        </NavLink>
        <NavLink to="/cart" className="nav-link" onClick={closeMenu}>
          Cart
        </NavLink>
        <NavLink to="/wishlist" className="nav-link" onClick={closeMenu}>
          ❤️
        </NavLink>
        <NavLink to="/login" className="nav-link" onClick={closeMenu}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
