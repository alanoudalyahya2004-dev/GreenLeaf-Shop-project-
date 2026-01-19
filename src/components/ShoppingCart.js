import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  addItemToCart, 
  removeItemFromCart, 
  deleteItemFromCart,
  clearCart 
} from '../store/cartSlice';
import { FaPlus, FaMinus, FaTrash, FaShoppingBag, FaArrowLeft } from 'react-icons/fa';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  
  const handleIncrease = (item) => {
    dispatch(addItemToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    }));
  };
  
  const handleDecrease = (id) => {
    dispatch(removeItemFromCart(id));
  };
  
  const handleDelete = (id) => {
    dispatch(deleteItemFromCart(id));
  };
  
  const handleCheckout = () => {
    alert('Checkout functionality coming soon!');
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart empty-cart">
        <h2>Your Shopping Cart</h2>
        <div className="empty-cart-message">
          <FaShoppingBag size={50} />
          <p>Your cart is empty</p>
          <Link to="/products" className="btn-primary">
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <div className="cart-summary">
          <div className="summary-item">
            <span>Total Items:</span>
            <span className="summary-value">{totalQuantity}</span>
          </div>
          <div className="summary-item">
            <span>Total Price:</span>
            <span className="summary-value">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="item-price">${item.price.toFixed(2)} each</p>
            </div>
            
            <div className="item-quantity">
              <button 
                className="btn-quantity" 
                onClick={() => handleDecrease(item.id)}
                disabled={item.quantity <= 1}
              >
                <FaMinus />
              </button>
              <span className="quantity-value">{item.quantity}</span>
              <button 
                className="btn-quantity" 
                onClick={() => handleIncrease(item)}
              >
                <FaPlus />
              </button>
            </div>
            
            <div className="item-total">
              <span>${item.totalPrice.toFixed(2)}</span>
            </div>
            
            <button 
              className="btn-delete" 
              onClick={() => handleDelete(item.id)}
              title="Remove item"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-footer">
        <div className="cart-actions">
          <button 
            className="btn-clear" 
            onClick={() => {
              if (window.confirm('Are you sure you want to clear your cart?')) {
                dispatch(clearCart());
              }
            }}
          >
            <FaTrash /> Clear Cart
          </button>
          
          <div className="checkout-section">
            <div className="grand-total">
              <span>Grand Total:</span>
              <span className="total-amount">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="btn-checkout" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <Link to="/products" className="btn-continue">
              <FaArrowLeft /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;