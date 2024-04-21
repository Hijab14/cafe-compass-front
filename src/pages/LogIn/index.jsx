// index.jsx
import React, { useState } from 'react';
import './style.css';
import logInpagebg from '../../assets/logInpagebg.png';
import logo from '../../assets/logo-2.png'; // Import the logo
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username, userType });
    navigate(userType === 'admin' ? '/adminorders' : '/search');
  };

  return (
    <div className="login-page">
        <div className="local-navbar">
            <p>Let Cafe Compass guide your taste journey</p>
        </div>
        <div className="login-part" style={{ backgroundImage: `url(${logInpagebg})` }}>
            <div className="column">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="column">
                <div className="form-container"> {/* Add a new div for the form */}
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email ID:
                            <input type="email" value={username} onChange={e => setUsername(e.target.value)} />
                        </label>
                        <label>
                            Password:
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </label>
                        <label>
                            Sign-In as:
                            <select value={userType} onChange={e => setUserType(e.target.value)}>
                                <option value="">Select...</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </label>
                        <div className="button-container">
                            <button type="submit">Sign In</button>
                            <button type="button">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="about-us-wrapper">
            <div className="about-us">
                <h2>About Us!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
            </div>
        </div>
    </div>
  );
}

export default LogIn;
