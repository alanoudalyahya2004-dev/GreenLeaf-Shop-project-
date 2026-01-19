import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to GreenLeaf Shop</h1>
          <p className="hero-text">
            At GreenLeaf Shop, we believe that every space deserves a touch of nature. 
            Our carefully curated collection of houseplants brings life, beauty, and 
            clean air to your home or office. From low-light tolerant plants for beginners 
            to exotic specimens for the seasoned plant parent, we have something for everyone.
          </p>
          <Link to="/products" className="btn-primary">
            Get Started <FaArrowRight />
          </Link>
        </div>
      </div>
      
      <div className="features">
        <div className="feature">
          <h3>🌱 Premium Quality</h3>
          <p>All our plants are nursery-fresh and carefully inspected</p>
        </div>
        <div className="feature">
          <h3>🚚 Free Shipping</h3>
          <p>Free delivery on orders over $50</p>
        </div>
        <div className="feature">
          <h3>📞 Expert Support</h3>
          <p>Get plant care tips from our specialists</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;