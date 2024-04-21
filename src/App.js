import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Search from './pages/Search';
import Navbar from './components/Navbar';
import OrderHistory from './pages/OrderHistory';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import CheckOut from './pages/checkOut';
import FoodState from './foodcontext/FoodState';
function App() {
  return (
    <FoodState>
    <Router>
      <div className="App page-wrapper">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Search />} />
            <Route exact path="/history" element={<OrderHistory />} />
            <Route exact path="/faqs" element={<ContactUs />} />
            <Route exact path="/checkOut" element={<CheckOut />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </FoodState>
  );
}

export default App;
