import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login routes without navbar */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Pages with navbar */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <div className="main-content">
                <Home />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div className="main-content">
                <Home />
              </div>
              <Footer />
            </>
          }
        />
        {/* <Route
          path="/about"
          element={
            <>
              <Navbar />
              <div className="main-content">
                <About />
              </div>
              <Footer />
            </>
          }
        /> */}
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <div className="main-content">
                <Products />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <div className="main-content">
                <Cart />
              </div>
              <Footer />
            </>
          }
        />
         <Route
          path="/wishlist"
          element={
            <>
              <Navbar />
              <div className="main-content">
                <Wishlist />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
