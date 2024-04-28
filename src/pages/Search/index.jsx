import React, { useState, useEffect } from "react";
import CardForHome from '../../components/CardForHome';
import SearchBar from '../../components/SearchBar';

const Index = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortedByPrice, setSortedByPrice] = useState(false);

  const host = "http://localhost:3000";

  const getItems = async () => {
    try {
      const response = await fetch(`${host}/api/products/getAll`);
      const data = await response.json();
      setMenuItems(data);
      setFilteredItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItems(); // Fetch all items initially
  }, []);

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      // If no search query is provided, display all items
      setFilteredItems(menuItems);
    } else {
      // Filter items based on the search query
      const filtered = menuItems.filter(item => item.productName.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredItems(filtered);
    }
  };
  
  
  const handleLocationChange = (location) => {
    if (!location) {
      // If no location is selected, display all items
      setFilteredItems(menuItems);
    } else {
      // Filter items based on the selected location
      const filtered = filteredItems.filter(item => item.location === location);
      setFilteredItems(filtered);
    }
  };

  const handleCategoryChange = (category) => {
    if (!category) {
      // If no location is selected, display all items
      setFilteredItems(menuItems);
    } else {
    // Filter items based on the selected category
    const filtered = category ? filteredItems.filter(item => item.category === category) : menuItems;
    setFilteredItems(filtered);
  }};

  const handlePriceChange = () => {
    // Sort items based on price if the checkbox is checked
    const sorted = sortedByPrice ? [...filteredItems].sort((a, b) => a.price - b.price) : filteredItems;
    setSortedByPrice(!sortedByPrice);
    setFilteredItems(sorted);
  };
  return (
    <div>
      <h1 className="text-center text-dark my-4">
        Let's Order!
      </h1>
      <SearchBar  onLocationChange={handleLocationChange} 
        onCategoryChange={handleCategoryChange} 
        onPriceChange={handlePriceChange} 
        onSearchChange={handleSearch}/>
      <div className="container my-3">
        <div className="row">
          {filteredItems.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <CardForHome key={item.name} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
