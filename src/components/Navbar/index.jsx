import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo-2.jpeg'
import cart from '../../assets/cart.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "black", height: "80px", display: "flex", alignItems: "center" }}>
      <Link className="navbar-brand" to="/">
        <img src={logo} width="80" height="70" style={{marginLeft:"10px"}}alt="" />
      </Link>
      <Link className="navbar-brand" to="/" style={{ color: "white", fontSize: "20px", paddingLeft: "20px", paddingRight: "20px", textDecoration: "none", fontWeight: "bold" }}>
        Hello, Ali!
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto" style={{ display: "flex", alignItems: "center", paddingRight: "20px", listStyle: "none" }}>
          <li className="nav-item" style={{ marginRight: "15px" }}>
            <Link className="nav-link" to="/" style={{ color: "white", fontSize: "18px", textDecoration: "none" }}>Home</Link>
          </li>
          <li className="nav-item" style={{ marginRight: "15px" }}>
            <Link className="nav-link" to='/history' style={{ color: "white", fontSize: "18px", textDecoration: "none" }}>Order History</Link>
          </li>
          <li className="nav-item" style={{ marginRight: "15px" }}>
            <Link className="nav-link" style={{ color: "white", fontSize: "18px", textDecoration: "none" }} to="/faqs">Contact Us</Link>
          </li>
          <li className="nav-item" style={{ marginRight: "15px" }}>
            <Link className="nav-link" style={{ color: "white", fontSize: "18px", textDecoration: "none" }} to="/newcontact">Log Out</Link>
          </li>

        </ul>
      </div>
      <img src={cart} width="70" height="50" style={{marginRight:"10px"}}alt="" />
    </nav>
  );
};

export default Navbar;
