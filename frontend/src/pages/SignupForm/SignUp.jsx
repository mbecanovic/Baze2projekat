import React, { useState } from "react";
import './SignUp.css';
import { FaUser, FaLock  } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import showDatePicker from './datePick'
import {Routes, Route, useNavigate} from 'react-router-dom';

const SignUp = () => {
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('')
  const kategorije = [ 
    {label: 'Politika', value: 1},
    {label: 'Nauka', value: 2},
    {label: 'Drustvo', value: 3},
    {label: 'Dnevne', value: 4}
  ];

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/LogIn');
  }

  function handleSelect(event){
    setValue(event.target.value)
  }

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  

  return (
    <>
      <div className="wrapper">
        <form action="">
          <h1>SignUp</h1>
          <div className="input-box">
           <input type="text" placeholder="Ime i prezime"></input>
           <FaUser className="icon" />
          </div>
          <div className="input-box">
           <input type="text" placeholder="username" required></input>
           <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required></input>
            <FaLock className="icon"/>
          </div>
          <div className="input-box">
            <input type="date" placeholder="Datum rodjenja"></input>
            {/*<MdOutlineDateRange className="icon" onClick={showDatePicker}/>*/}
          </div>
          
          
          {/*<label className="katg" onClick={()=>setOpen(!open)}>Kategorije
          {open &&
          <div className="kategorije">
            <ul>
              {
                kategorije.map((kat)=>(
                  <li className="jedna" key={kat}>
                    {kat}
                  </li>
                ))
              }
            </ul>
          </div> }
            </label>*/}
          <label className="labelaKat">Tema:   </label>
          <select className="form-select" onChange={handleSelect}>
            {kategorije.map(option =>(
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

          <p></p>

          <button type="submit">SignUp</button>

          <div className="register-link">
            <p>Imate nalog?<a href="#" onClick={navigateToLogin}>Uloguj se</a></p>
          </div>
        </form>
      </div>
    </>
    );
};

export default SignUp;