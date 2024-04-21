import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Search from './pages/Search';
import Navbar from './components/Navbar';
import OrderHistory from './pages/OrderHistory';
import AdminOrder from '../src/AdminPages/adminOrder';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import CheckOut from './pages/checkOut';
import FoodState from './foodcontext/FoodState';
import LogIn from './pages/LogIn';
import AdminProducts from './AdminPages/adminProducts';

function App() {
  const location = useLocation();

  return (
    <FoodState>
    <div className="App page-wrapper">
      {(location.pathname !== '/' && location.pathname !== '/adminorders' && location.pathname !== '/adminProducts'
    ) && 
    <>
    <Navbar />
    </>
   }
   
      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route path="/search" element={<Search />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/faqs" element={<ContactUs />} />
          <Route path="/adminorders" element={<AdminOrder />} />
          <Route path="/adminProducts" element={<AdminProducts />} />
          <Route exact path="/checkOut" element={<CheckOut />} />

        </Routes>
      </div>
      {(location.pathname !== '/') && <Footer />}
     
    </div>
    </FoodState>
  );
  }


export default App;
