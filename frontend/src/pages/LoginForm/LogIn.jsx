import React, { useState } from "react";
import './LogIn.css';
import '../Dashboard/Dashboard.jsx';
import { FaUser, FaLock  } from "react-icons/fa";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useSignIn } from "react-auth-kit";
import axios from "axios";
import ProtectedRoutes from '../../components/PrivateRoute.jsx'


const LogIn = () => {
  
  
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const signIn = useSignIn();

  async function submit (e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/LogIn", {username, password
    })

    .then(res=>{ 

        localStorage.setItem('token', res.data.token)
        history("/Dashboard", {state:{id:username}})

    })
    .catch(e=>{
      console.log(e)
      alert("Moras da se registrujes")
    })

    }
    catch(e){
      console.log(e);
    }
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
           <input type="text" placeholder="username" required onChange={(e)=>{setUsername(e.target.value)}}></input>
           <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required onChange={(e)=>{setPassword(e.target.value)}}></input>
            <FaLock className="icon"/>
          </div>
          
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" onClick={submit}>Login</button>

          <div className="register-link">
            <p>Nemate nalog? <a href="#" onClick={navigateToSignup}>Registruj se</a></p>
          </div>
        </form>
      </div>
    </>
    );
};

export default LogIn;