import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './pages/Search';
import Navbar from './components/Navbar';
import OrderHistory from './pages/OrderHistory';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="App page-wrapper">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Search />} />
            <Route exact path="/history" element={<OrderHistory />} />
            <Route exact path="/faqs" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
