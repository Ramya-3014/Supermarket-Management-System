import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Home.css";
import appleImg from "../assets/apple.jpeg"; 
import riceImg from "../assets/rice.jpeg";
import bananaImg from "../assets/bananas.jpeg";
import eggsImg from "../assets/eggs.jpeg";
import orangeJuiceImg from "../assets/orange-juice.jpeg";
import wheatBreadImg from "../assets/wheat-bread.jpeg";
import homeImage from '../assets/homeimage.jpg';
import greenTeaImg from "../assets/greentea.jpeg";
import honeyImg from "../assets/honey.jpeg";

import superImg from "../assets/super.jpeg";
import freshImg from "../assets/fresh.jpeg";
import lowPriceImg from "../assets/low.jpeg";
import serviceImg from "../assets/service.jpeg";
import counterImg from "../assets/counter.jpeg";
import vegetablesImg from "../assets/vegetables.jpeg";
import storeImg from "../assets/store.jpeg";
import p1Img from "../assets/p1.jpeg";
import p2Img from "../assets/p2.jpeg";
import p3Img from "../assets/p3.jpeg";

// Top Rated Products - with proper structure for cart/wishlist
const topRatedProducts = [
  { 
    id: 1, 
    name: "Organic Apples", 
    price: "Rs. 290", 
    rating: 4.7, 
    description: "Fresh organic apples from local farms.", 
    image: appleImg,
    category: "Fruits"
  },
  { 
    id: 2, 
    name: "Rice", 
    price: "Rs. 250", 
    rating: 4.8, 
    description: "Rice a staple food for a large portion of the world's population.", 
    image: riceImg,
    category: "Grains"
  },
  { 
    id: 3, 
    name: "Whole Wheat Bread", 
    price: "Rs. 165", 
    rating: 4.6, 
    description: "Freshly baked whole wheat bread.", 
    image: wheatBreadImg,
    category: "Bakery"
  },
    {
      id: 10,
      name: "Green Tea",
      category: "Beverages",
      price: "Rs. 200",
      rating: 4.9,
      description: "Refreshing organic green tea leaves.",
      image: greenTeaImg,
    },
     {
        id: 14,
        name: "Honey",
        category: "Condiments",
        price: "Rs. 240",
        rating: 4.9,
        description: "Pure organic honey, rich in antioxidants.",
        image: honeyImg,
      }

];

// Top Selling Products - with proper structure for cart/wishlist
const topSellingProducts = [
  { 
    id: 4, 
    name: "Bananas", 
    price: "Rs. 100 / kg", 
    rating: 4.5, 
    description: "Sweet ripe bananas full of potassium.", 
    image: bananaImg,
    category: "Fruits"
  },
  { 
    id: 5, 
    name: "Eggs (Dozen)", 
    price: "Rs. 210", 
    rating: 4.4, 
    description: "Farm fresh organic eggs.", 
    image: eggsImg,
    category: "Dairy"
  },
  { 
    id: 6, 
    name: "Orange Juice", 
    price: "Rs. 250", 
    rating: 4.3, 
    description: "Freshly squeezed orange juice.", 
    image: orangeJuiceImg,
    category: "Beverages"
  },
  { 
    id: 1, 
    name: "Organic Apples", 
    price: "Rs. 290", 
    rating: 4.7, 
    description: "Fresh organic apples from local farms.", 
    image: appleImg,
    category: "Fruits"
  },
  { 
    id: 2, 
    name: "Rice", 
    price: "Rs. 250", 
    rating: 4.8, 
    description: "Rice a staple food for a large portion of the world's population.", 
    image: riceImg,
    category: "Grains"
  },
];

function Home() {
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useContext(CartContext);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${homeImage})` }}>
        <div className="hero-overlay">
          <h1 className="hero-quote">"Freshness You Can Trust, Every Day."</h1>
          <p className="hero-subquote">Your one-stop shop for quality groceries and daily essentials.</p>
          <button className="shop-now-btn" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="product-section">
        <h2>Top Rated Products</h2>
        <div className="product-cards">
          {topRatedProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p className="rate">{product.price}</p>
              <p className="ratings">⭐ {product.rating}</p>
              <p className="description">{product.description}</p>
              <div className="card-buttons">
                <button 
                  className="buy-btn" 
                  onClick={() => addToCart(product)}
                >
                  Buy Now
                </button>
                <button 
                  className="wishlist-btn" 
                  onClick={() => addToWishlist(product)}
                >
                  ❤️ Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="product-section">
        <h2>Top Selling Products</h2>
        <div className="product-cards">
          {topSellingProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p className="rate">{product.price}</p>
              <p className="ratings">⭐ {product.rating}</p>
              <p className="description">{product.description}</p>
              <div className="card-buttons">
                <button 
                  className="buy-btn" 
                  onClick={() => addToCart(product)}
                >
                  Buy Now
                </button>
                <button 
                  className="wishlist-btn" 
                  onClick={() => addToWishlist(product)}
                >
                  ❤️ Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL About Us Section */}
      <section className="about-container">

        {/* Intro Section */}
        <section className="intro-section">
          <div className="intro-text">
            <h1>About SuperMart</h1>
            <p>
              Welcome to SuperMart — your one-stop destination for fresh produce,
              quality groceries, and unbeatable prices. Serving our community since 2025.
            </p>
          </div>
          <div className="intro-image">
            <img src={superImg} alt="Supermarket Aisle" />
          </div>
        </section>

        {/* Company Story */}
        <section className="company-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, SuperMart began as a small family-owned store in
            Coimbatore, Tamil Nadu, with a mission to provide fresh, affordable,
            and high-quality groceries to our community. Over the years, we've
            grown into a trusted name in retail, expanding our offerings to include
            organic produce, gourmet selections, and everyday essentials.
          </p>
          <p>
            Our commitment to sustainability and customer satisfaction drives
            everything we do. From sourcing locally to minimizing our carbon
            footprint, we strive to make a positive impact on both our customers
            and the environment.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <h2>Why Choose Us</h2>
          <div className="reasons">
            <div className="reason-card">
              <img src={freshImg} alt="Fresh Produce" />
              <h3>Fresh Produce</h3>
              <p>We source fruits and vegetables daily from local farms.</p>
            </div>
            <div className="reason-card">
              <img src={lowPriceImg} alt="Affordable Prices" />
              <h3>Affordable Prices</h3>
              <p>We offer competitive pricing without compromising quality.</p>
            </div>
            <div className="reason-card">
              <img src={serviceImg} alt="Customer Service" />
              <h3>Friendly Service</h3>
              <p>Our staff is always ready to assist you with a smile.</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="achievements">
          <h2>Our Achievements</h2>
          <ul>
            <li>Serving 10,000+ happy customers monthly</li>
            <li>Partnered with 50+ local farmers</li>
            <li>Reduced plastic usage by 40% in 2025</li>
          </ul>
        </section>

        {/* Gallery */}
        <section className="gallery">
          <h2>Gallery</h2>
          <div className="gallery-images">
            <img src={storeImg} alt="Store inside" />
            <img src={vegetablesImg} alt="Fresh vegetables" />
            <img src={counterImg} alt="Checkout counter" />
          </div>
        </section>

        {/* Team Section */}
        <section className="our-team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={p1Img} alt="Team Member 1" className="team-photo" />
              <p className="team-name">John Doe</p>
              <p className="team-role">Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src={p2Img} alt="Team Member 2" className="team-photo" />
              <p className="team-name">Jane Smith</p>
              <p className="team-role">Operations Manager</p>
            </div>
            <div className="team-member">
              <img src={p3Img} alt="Team Member 3" className="team-photo" />
              <p className="team-name">Raj Kumar</p>
              <p className="team-role">Head of Procurement</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? Reach out to us at{" "}
            <a href="mailto:support@supermart.com">support@supermart.com</a> or
            call us at 123-456-7890.
          </p>
        </section>
      </section>
    </div>
  );
}

export default Home;
