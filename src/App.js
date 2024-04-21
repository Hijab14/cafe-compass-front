import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './pages/Search';
import Navbar from './components/Navbar';
import OrderHistory from './pages/OrderHistory';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import CheckOut from './pages/checkOut';
import LogIn from './pages/LogIn';
import AdminProducts from './AdminPages/adminProducts';
import AdminOrder from './AdminPages/adminOrder';
import FoodState from './foodcontext/FoodState';
import { useLocation , useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useAuth } from './contexts/AuthContext';
import { AuthProvider } from './contexts/AuthContext'; // Import the provider


function MainContent() {
  const navigate = useNavigate();  // Define navigate
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <LogIn />;
  }

  return (
    <div className="App page-wrapper">
      {user.userType === 'admin' ? (
        <>
        <>
          {/* {(location.pathname !== '/') && <Navbar />} */}
          <div className="main-content">
            <Routes>
            <Route exact path="/" element={<LogIn />} />

              <Route path="/adminorders" element={<AdminOrder />} />
              <Route path="/adminProducts" element={<AdminProducts />} />
            </Routes>
          </div>
          {/* {(location.pathname !== '/') && <Footer />} */}
        </>

        </>
      ) : (
        <>
          {(location.pathname !== '/') && <Navbar />}
          <div className="main-content">
            <Routes>
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/history" element={<OrderHistory />} />
              <Route exact path="/faqs" element={<ContactUs />} />
              <Route exact path="/checkOut" element={<CheckOut />} />
              <Route exact path="/" element={<LogIn />} />
           
            </Routes>
          </div>
          {/* {(location.pathname !== '/') && <Footer />} */}
        </>
      )}
    </div>
  );
}


function App() {
  return (
    <AuthProvider> {/* Wrap the existing components in AuthProvider */}
      <FoodState>
        <Router>
          <MainContent />
          <Footer/>
        </Router>
      </FoodState>
    </AuthProvider>
  );
}
export default App;
