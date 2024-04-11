import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import image1 from
import ShoppingCart from "../shoppingcart";
import { useSelector } from "react-redux";
import foodContext from "../../foodcontext/foodContext";
import logo from '../../assets/logo-2.png'
import cart from '../../assets/cart.png'

const Navbar = () => {
    const cartItems = useSelector((state) => state.items);
  const [isOpen, setIsOpen] = useState(false);

  const context = useContext(foodContext);
  const { setFood } = context;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const style = {
    button1: {
      // width : '10%',
      // backgroundColor: 'black',
      // position: 'relative',
      // left: '250px'
    },
    cart: {
      // width: '190%',
      // // color: 'whilte',
      // backgroundColor: 'white',
      // position: 'relative',
      // right: '10px'
      width: "10%",
      position: "relative",
      left: "130px",
      top: "10px",
    },
    total: {
      color: "white",
      position: "relative",
      left: "126px",
      top: "20px",
    },
  };
  const [cartVisible, setcartVisible] = useState(false);
  const handleCartButtonClick = () => {
    console.log("Cart button clicked");
    //visiblity(); // Ensure this is called when the button is clicked
    setcartVisible(!cartVisible);
    let total = cartItems.reduce((acc, element) => {
      return acc + element.quantity;
      console.table(acc, element);
    }, 0);
    console.log("total:", total);
    console.log("cartVisible after click:", cartVisible); // Log the state after the click
  };
  console.log("cartVisible:", cartVisible);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "black", height: "80px", display: "flex", alignItems: "center" }}>
      <Link className="navbar-brand" to="/">
        <img src={logo} width="80" height="70" style={{marginLeft:"10px"}}alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
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
      <ul>
            <li className="nav-item active">
              <Link
                to="#"
                className="btn btn-link"
                // onClick={handleCartButtonClick}
                onClick={() => {
                  handleCartButtonClick();
                  console.log(1);
                }}
              >
                <img src={cart} width="70" height="50" style={{marginRight:"10px"}}alt="" />
                <span style={style.total}>{cartItems.length}</span>
              </Link>
            </li>
          </ul>
          {cartVisible && (
        <div
          style={{ position: "absolute", top: "10vh", right: 0, zIndex: 10 }}
        >
          <ShoppingCart />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
