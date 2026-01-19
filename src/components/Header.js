import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaHome, FaStore, FaLeaf } from 'react-icons/fa';

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <FaLeaf className="logo-icon" />
          <h1>GreenLeaf Shop</h1>
        </div>
        
        <nav className="nav">
          <Link to="/" className="nav-link">
            <FaHome /> Home
          </Link>
          <Link to="/products" className="nav-link">
            <FaStore /> Products
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            <FaShoppingCart />
            <span className="cart-count">{totalQuantity}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;