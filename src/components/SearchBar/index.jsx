import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [priceChecked, setPriceChecked] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = () => {
    setPriceChecked(!priceChecked);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search action with searchQuery, location, category, and priceChecked
    console.log('Search for:', searchQuery);
    console.log('Location:', location);
    console.log('Category:', category);
    console.log('Price Checked:', priceChecked);
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSearchSubmit} className="form-inline d-flex justify-content-between">
        <div className="input-group mr-3" style={{ width: '900px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#0f9ea7', marginLeft: "10px" }}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        <div className="form-group mr-3">
          <select className="form-control" value={location} onChange={handleLocationChange}>
            <option value="">Location</option>
            {/* Add location options here */}
          </select>
        </div>

        <div className="form-group mr-3">
          <select className="form-control" value={category} onChange={handleCategoryChange}>
            <option value="">Category</option>
            {/* Add category options here */}
          </select>
        </div>
        <div className="form-group mr-3">
          <select className="form-control" value={category} onChange={handleCategoryChange}>
            <option value="">Price</option>
            {/* Add category options here */}
          </select>
        </div>
      </form>

      {/* Add padding between rows of cards */}
      <div className="my-3"></div>
    </div>
  );
};

export default SearchBar;
