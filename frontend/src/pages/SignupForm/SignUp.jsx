import React, { useState } from "react";
import './SignUp.css';
import { FaUser, FaLock  } from "react-icons/fa";
import { MdAddTask, MdOutlineDateRange } from "react-icons/md";
import showDatePicker from './datePick'
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from "axios";

const SignUp = () => {
  
  
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = useState(''); //tema o kojoj novinar zeli da pise


  const history = useNavigate();
  const [open, setOpen] = useState(false);

  const kategorije = [ 
    {label: 'Izaberi temu', value: 0},
    {label: 'Politika', value: 1},
    {label: 'Nauka', value: 2},
    {label: 'Drustvo', value: 3},
    {label: 'Dnevne', value: 4}
  ];

  
  console.log(value)
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/LogIn');
  }
  const navigateToHome = () => {
    navigate('/Home');
  }

  
  function handleSelect(event) {
    const selectedOption = kategorije.find(option => option.value === parseInt(event.target.value));
    setValue(selectedOption.label);
}
 

  async function submit (e){
    e.preventDefault();
    

    try{
      await axios.post("http://localhost:8000/SignUp",{
      name, username, password, value
    })
    .then(res=>{
        alert("Uspesna registracija")
        history("/LogIn", {state:{id:username}})
      
    })
    .catch(e=>{
      alert("Korisnik postoji")
      console.log(e)
    })

  }
    catch(e){
      console.log(e);
    }

  }
  
  return (
    <>
      <div className="wrapper">
        <form action="">
          <h1>SignUp</h1>
          <div className="input-box">
           <input type="text" placeholder="Ime i prezime" onChange={(e)=>{setName(e.target.value)}}></input>
           <FaUser className="icon" />
          </div>
          <div className="input-box">
           <input type="text" placeholder="username" required onChange={(e)=>{setUsername(e.target.value)}}></input>
           <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required onChange={(e)=>{setPassword(e.target.value)}}></input>
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

          <button type="submit" onClick={submit}>SignUp</button>

          <div className="register-link">
            <p>Imate nalog?<a href="#" onClick={navigateToLogin}>Uloguj se</a></p>
          </div>
          <a href="#" onClick={navigateToHome}>Vrati se na pocetnu stranu</a>
        </form>
      </div>
    </>
    
    );
    
};

export default SignUp;