import React from 'react';
import './App.css';
import logo from './logo.jpeg'; 

function App() {
  return (
    <div className="App" >
      <header className="App-header" style={{backgroundColor:"rgb(10, 0, 26)"}}>
        <img src={logo}  alt="logo" />
        <p style={{color: "#0b9da9", fontWeight:"bold"}}>
          Welcome to Cafe Compass!
        </p>
      </header>
    </div>
  );
}

export default App;
