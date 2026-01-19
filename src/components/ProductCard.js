import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../store/cartSlice';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [added, setAdded] = useState(false);
  
  const isInCart = cartItems.some(item => item.id === plant.id);
  
  const handleAddToCart = () => {
    if (!isInCart && !added) {
      dispatch(addItemToCart({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        image: plant.image
      }));
      setAdded(true);
      
      // Reset button after 2 seconds for demo purposes
      setTimeout(() => {
        setAdded(false);
      }, 2000);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={plant.image} alt={plant.name} />
        <span className="product-category">{plant.category}</span>
      </div>
      
      <div className="product-info">
        <h3>{plant.name}</h3>
        <p className="product-description">{plant.description}</p>
        <div className="product-footer">
          <span className="product-price">${plant.price.toFixed(2)}</span>
          <button
            className={`btn-add ${isInCart || added ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={isInCart || added}
          >
            {isInCart ? (
              <>
                <FaCheck /> In Cart
              </>
            ) : added ? (
              <>
                <FaCheck /> Added!
              </>
            ) : (
              <>
                <FaShoppingCart /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;