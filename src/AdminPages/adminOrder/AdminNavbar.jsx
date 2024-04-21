import React from 'react';

import './AdminNavbar.css';  // Import the CSS file
import logo from '../../assets/logo-2.png';  // Update the path as needed
import { Link } from 'react-router-dom';

function AdminNavbar({ restaurantName }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "black", height: "80px", display: "flex", alignItems: "center" }}>
      <div className="logo">
        <img src={logo} alt="Cafe-compass logo here" />
      </div>
      <div className="restaurant-name" style={{color:'black'}}>
        {restaurantName} 
      </div>

      <li className="nav-item" style={{ marginRight: "15px" }}>
            <Link className="nav-link" style={{ color: "white", fontSize: "18px", textDecoration: "none" }} to="/adminproducts">Products</Link>
          </li>
          <li className="nav-item" style={{ marginRight: "15px" }}>
            <Link className="nav-link" style={{ color: "white", fontSize: "18px", textDecoration: "none" }} to="/adminorders">Orders</Link>
          </li>
          <li className="nav-item" style={{ marginRight: "15px" }}>
            <Link className="nav-link" style={{ color: "white", fontSize: "18px", textDecoration: "none" }} to="/">LogOut</Link>
          </li>

    </nav>
  );
}
export default AdminNavbar;
