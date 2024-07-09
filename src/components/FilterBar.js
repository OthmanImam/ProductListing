import React from 'react';

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <select>
        <option value="price">Price</option>
      </select>
      <select>
        <option value="rating">Rating</option>
      </select>
      <select>
        <option value="best-sellers">Best Sellers</option>
      </select>
    </div>
  );
};

export default FilterBar;
