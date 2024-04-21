import React from 'react';

import './AdminNavbar.css';  // Import the CSS file
import logo from '../../assets/logo-2.png';  // Update the path as needed
import { Link } from 'react-router-dom';

function AdminNavbar({ restaurantName }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Cafe-compass logo here" />
      </div>
      <div className="restaurant-name">
        {restaurantName} 
      </div>

      <li className="nav-item" style={{ marginRight: "15px" }}>
            <Link className="nav-link" style={{ color: "white", fontSize: "18px", textDecoration: "none" }} to="/adminproducts">Products</Link>
          </li>

       
      <div className="profile">
        <i className='bx bx-user-circle'></i>
      </div>
    </nav>
  );
}
export default AdminNavbar;
