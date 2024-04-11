import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Search from './pages/Search';
import Navbar from './components/Navbar';
import OrderHistory from './pages/OrderHistory';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
<<<<<<< Updated upstream
import LogIn from './pages/LogIn';

function Main() {
  const location = useLocation();

  return (
    <div className="App page-wrapper">
      {location.pathname !== '/' && <Navbar />}
      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route path="/search" element={<Search />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/faqs" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

=======
import CheckOut from './pages/checkOut';
import FoodState from './foodcontext/FoodState';
>>>>>>> Stashed changes
function App() {
  return (
    <FoodState>
    <Router>
<<<<<<< Updated upstream
      <Main />
=======
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
>>>>>>> Stashed changes
    </Router>
    </FoodState>
  );
}

export default App;
