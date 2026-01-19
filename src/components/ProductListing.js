import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { plants, categories } from '../data/plants';
import { FaFilter } from 'react-icons/fa';

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);
  
  // Group plants by category for display
  const plantsByCategory = {};
  filteredPlants.forEach(plant => {
    if (!plantsByCategory[plant.category]) {
      plantsByCategory[plant.category] = [];
    }
    plantsByCategory[plant.category].push(plant);
  });

  return (
    <div className="product-listing">
      <div className="page-header">
        <h2>Our Plant Collection</h2>
        <div className="category-filter">
          <FaFilter />
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {Object.keys(plantsByCategory).length > 0 ? (
        Object.entries(plantsByCategory).map(([category, categoryPlants]) => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category} Plants</h3>
            <div className="products-grid">
              {categoryPlants.map(plant => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="no-results">
          <p>No plants found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductListing;