import React, { useState } from 'react';
import './style.css';
import RegisterModel from '../RegisterModel';
import logInpagebg from '../../assets/logInpagebg.png';
import logo from '../../assets/logo-2.png';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // State to manage modal visibility
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password || !userType) {
        alert("Please fill in all fields and select a user type.");
        return; // Stop the function if any field is empty
    }
    const apiURL = userType === 'admin' ? 'http://localhost:3000/api/admins/loginAdmin' : 'http://localhost:3000/api/users/loginUser';
    const credentials = {
      Email: username,
      Password: password
    };
  
    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Include token in request headers
        },
        body: JSON.stringify(credentials)
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        // Handling error messages sent from the server
        throw new Error(data.errors ? data.errors.map(err => err.msg).join(', ') : 'Unknown Error');
      }
  
      if (data.success) {
        // Store authentication token in localStorage
        console.log(data.authtoken);
        localStorage.setItem('authToken', data.authtoken);
        
        // Update user authentication state
        login({ username, userType: data.userType}, data.authtoken);
        // Redirect user to appropriate page based on user type
        navigate(data.userType === 'admin' ? '/adminorders' : '/search');
      } else {
        alert("Login failed: " + (data.errors.msg));
      }
    } catch (error) {
      // Displaying error messages to the user
      alert("Login failed: " + error.message);
    }
  };
  
const handleRegisterModalToggle = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
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
                <div className="form-container">
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
                            <button type="button" onClick={handleRegisterModalToggle}>Register</button> {/* Trigger modal open */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <RegisterModel isOpen={isRegisterModalOpen} onClose={handleRegisterModalToggle} />
                <div className="about-us-wrapper" style={{marginTop:'40px', marginBottom:'45px'}}>
        <div className="about-us" >
                <h2>About Us!</h2>
                <p>Welcome to Cafe Compass, the go-to platform for students seeking the ultimate convenience in campus dining. Designed specifically for the bustling student lifestyle, Cafe Compass offers a user-friendly interface that allows students to effortlessly search for cafes on campus, apply filters for dietary preferences, budget, or proximity, and place orders ahead of time. Whether you're dashing between classes, planning a meal with friends, or just in need of a quick coffee fix, Cafe Compass streamlines your dining experience, making it easier than ever to find and enjoy the best culinary options your university has to offer. With Cafe Compass, every meal is just a click away, perfectly tailored to fit into your busy academic schedule.</p>
           <p>At Cafe Compass, we understand that every student’s schedule and dietary needs are unique. That’s why we've developed a robust platform that not only allows you to search for cafes on campus but also lets you apply filters tailored to your dietary preferences, budget, and location needs. Whether you're in a rush between classes, planning a leisurely meal with friends, or just looking for a quick coffee boost, Cafe Compass is here to help you make the best dining choices quickly and efficiently.</p>            </div>
    
        </div>
    </div>
  );
}

export default LogIn;
//   return (
//     <div className="login-page">
//         <div className="local-navbar">
//             <p>Let Cafe Compass guide your taste journey</p>
//         </div>
//         <div className="login-part" style={{ backgroundImage: `url(${logInpagebg})` }}>
//             <div className="column">
//                 <img src={logo} alt="Logo" className="logo" />
//             </div>
//             <div className="column">
//                 <div className="form-container">
//                     <form onSubmit={handleSubmit}>
//                         <label>
//                             Email ID:
//                             <input type="email" value={username} onChange={e => setUsername(e.target.value)} />
//                         </label>
//                         <label>
//                             Password:
//                             <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
//                         </label>
//                         <label>
//                             Sign-In as:
//                             <select value={userType} onChange={e => setUserType(e.target.value)}>
//                                 <option value="">Select...</option>
//                                 <option value="user">User</option>
//                                 <option value="admin">Admin</option>
//                             </select>
//                         </label>
//                         <div className="button-container">
//                             <button type="submit">Sign In</button>
//                             <button type="button">Register</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         <div className="about-us-wrapper"style={{marginTop:'40px', marginBottom:'45px'}}>
//             <div className="about-us" >
//                 <h2>About Us!</h2>
//                 <p>Welcome to Cafe Compass, the go-to platform for students seeking the ultimate convenience in campus dining. Designed specifically for the bustling student lifestyle, Cafe Compass offers a user-friendly interface that allows students to effortlessly search for cafes on campus, apply filters for dietary preferences, budget, or proximity, and place orders ahead of time. Whether you're dashing between classes, planning a meal with friends, or just in need of a quick coffee fix, Cafe Compass streamlines your dining experience, making it easier than ever to find and enjoy the best culinary options your university has to offer. With Cafe Compass, every meal is just a click away, perfectly tailored to fit into your busy academic schedule.</p>
//            <p>At Cafe Compass, we understand that every student’s schedule and dietary needs are unique. That’s why we've developed a robust platform that not only allows you to search for cafes on campus but also lets you apply filters tailored to your dietary preferences, budget, and location needs. Whether you're in a rush between classes, planning a leisurely meal with friends, or just looking for a quick coffee boost, Cafe Compass is here to help you make the best dining choices quickly and efficiently.</p>            </div>
//         </div>
//     </div>
//   );
// }

// export default LogIn;
