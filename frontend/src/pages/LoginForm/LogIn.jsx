import React, { useState } from "react";
import './LogIn.css';
import { FaUser, FaLock  } from "react-icons/fa";
import {Routes, Route, useNavigate} from 'react-router-dom';

const LogIn = () => {
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate('/SignUp');
  }

  return (
    <>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
           <input type="text" placeholder="username" required></input>
           <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required></input>
            <FaLock className="icon"/>
          </div>
          
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Nemate nalog? <a href="#" onClick={navigateToSignup}>Registruj se</a></p>
          </div>
        </form>
      </div>
    </>
    );
};

export default LogIn;