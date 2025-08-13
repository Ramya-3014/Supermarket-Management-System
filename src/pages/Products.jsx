import React, { useState, useContext } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";
import appleImg from "../assets/apple.jpeg";
import riceImg from "../assets/rice.jpeg";
import bananaImg from "../assets/bananas.jpeg";
import eggsImg from "../assets/eggs.jpeg";
import orangeJuiceImg from "../assets/orange-juice.jpeg";
import wheatBreadImg from "../assets/wheat-bread.jpeg";
import carrotImg from "../assets/carrot.jpeg";
import tomatoImg from "../assets/tomatoes.jpeg";
import greenTeaImg from "../assets/greentea.jpeg";
import potatoImg from "../assets/potatos.jpeg";
import onionImg from "../assets/onion.jpeg";
import peanutButterImg from "../assets/peanutbutter.jpeg";
import honeyImg from "../assets/honey.jpeg";
import pastaImg from "../assets/pasta.jpeg";
import cookingOilImg from "../assets/cookingoil.jpeg";
import sugarImg from "../assets/sugar.jpeg";
import saltImg from "../assets/salt.jpeg";
import yogurtImg from "../assets/yogurt.jpeg";
import cucumberImg from "../assets/cucumber.jpeg";
import cheeseImg from "../assets/cheese.jpeg";

// Your PRODUCTS array stays exactly the same
const PRODUCTS = [
  {
    id: 1,
    name: "Organic Apples",
    category: "Fruits",
    price: "Rs. 150 / kg",
    rating: 4.7,
    description: "Fresh organic apples from local farms.",
    image: appleImg,
  },
  {
    id: 2,
    name: "Basmati Rice",
    category: "Grains",
    price: "Rs. 120 / kg",
    rating: 4.8,
    description: "Premium quality long-grain basmati rice.",
    image: riceImg,
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: "Rs. 45",
    rating: 4.6,
    description: "Freshly baked whole wheat bread.",
    image: wheatBreadImg,
  },
  {
    id: 4,
    name: "Bananas",
    category: "Fruits",
    price: "Rs. 50 / kg",
    rating: 4.5,
    description: "Sweet ripe bananas full of potassium.",
    image: bananaImg,
  },
  {
    id: 5,
    name: "Eggs (Dozen)",
    category: "Dairy",
    price: "Rs. 60",
    rating: 4.4,
    description: "Farm fresh organic eggs.",
    image: eggsImg,
  },
  {
    id: 6,
    name: "Orange Juice",
    category: "Beverages",
    price: "Rs. 75",
    rating: 4.3,
    description: "Freshly squeezed orange juice.",
    image: orangeJuiceImg,
  },
  {
    id: 7,
    name: "Cheddar Cheese",
    category: "Dairy",
    price: "Rs. 180",
    rating: 4.7,
    description: "Rich and creamy cheddar cheese.",
    image: cheeseImg,
  },
  {
    id: 8,
    name: "Fresh Carrots",
    category: "Vegetables",
    price: "Rs. 80 / kg",
    rating: 4.5,
    description: "Bright orange carrots full of vitamins.",
    image: carrotImg,
  },
  {
    id: 9,
    name: "Tomatoes",
    category: "Vegetables",
    price: "Rs. 90 / kg",
    rating: 4.6,
    description: "Juicy and ripe tomatoes for salads and cooking.",
    image: tomatoImg,
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
    id: 11,
    name: "Potatoes",
    category: "Vegetables",
    price: "Rs. 60 / kg",
    rating: 4.4,
    description: "Fresh and starchy potatoes for everyday cooking.",
    image: potatoImg,
  },
  {
    id: 12,
    name: "Onions",
    category: "Vegetables",
    price: "Rs. 70 / kg",
    rating: 4.5,
    description: "Fresh red onions for all your recipes.",
    image: onionImg,
  },
  {
    id: 13,
    name: "Peanut Butter",
    category: "Spreads",
    price: "Rs. 160",
    rating: 4.8,
    description: "Creamy peanut butter made from 100% roasted peanuts.",
    image: peanutButterImg,
  },
  {
    id: 14,
    name: "Honey",
    category: "Condiments",
    price: "Rs. 240",
    rating: 4.9,
    description: "Pure organic honey, rich in antioxidants.",
    image: honeyImg,
  },
  {
    id: 15,
    name: "Pasta",
    category: "Grains",
    price: "Rs. 100",
    rating: 4.6,
    description: "Italian-style pasta made from durum wheat.",
    image: pastaImg,
  },
  {
    id: 16,
    name: "Cooking Oil",
    category: "Pantry",
    price: "Rs. 280",
    rating: 4.5,
    description: "Healthy sunflower cooking oil.",
    image: cookingOilImg,
  },
  {
    id: 17,
    name: "Sugar",
    category: "Pantry",
    price: "Rs. 120",
    rating: 4.4,
    description: "Fine white granulated sugar.",
    image: sugarImg,
  },
  {
    id: 18,
    name: "Salt",
    category: "Pantry",
    price: "Rs. 40",
    rating: 4.7,
    description: "Pure refined salt for everyday cooking.",
    image: saltImg,
  },
  {
    id: 19,
    name: "Yogurt",
    category: "Dairy",
    price: "Rs. 100",
    rating: 4.8,
    description: "Creamy and probiotic-rich yogurt.",
    image: yogurtImg,
  },
  {
    id: 20,
    name: "Cucumber",
    category: "Vegetables",
    price: "Rs. 70 / kg",
    rating: 4.5,
    description: "Fresh and juicy cucumbers for salads.",
    image: cucumberImg,
  },
 ];

const categories = [
  "All",
  "Fruits",
  "Grains",
  "Bakery",
  "Dairy",
  "Beverages",
  "Vegetables",
  "Spreads",
  "Condiments",
  "Pantry"
];

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const { addToCart, addToWishlist } = useContext(CartContext);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <p className="rating">⭐ {product.rating}</p>
              <p className="description">{product.description}</p>
              <div className="buttons">
                <button className="buy-btn" onClick={() => addToCart(product)}>Buy Now</button>
                <button className="wishlist-btn" onClick={() => addToWishlist(product)}>❤️ Wishlist</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
