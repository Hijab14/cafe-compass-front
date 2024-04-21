import React from 'react';
import './AdminNavbar.css';  // Import the CSS file
import logo from '../../assets/logo-2.png';  // Update the path as needed

function AdminNavbar({ restaurantName }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Cafe-compass logo here" />
      </div>
      <div className="restaurant-name">
        {restaurantName} 
      </div>
      <div className="profile">
        <i className='bx bx-user-circle'></i>
      </div>
    </nav>
  );
}
export default AdminNavbar;
