import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
     
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SuperMart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
