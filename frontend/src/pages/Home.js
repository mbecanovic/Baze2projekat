import Cards from '../design/kartica/cards.jsx';
import React from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import Navbar from "../design/navbar/Navbar.js"
import { useEffect, useState } from "react"
import axios from 'axios'


export default function Home() {
  const [data, setData] = useState([])
  const [selectedContainer, setSelectedContainer] = useState(null);
  const username = localStorage.getItem('username')

  const handleContainerClick = (container) => {
    setSelectedContainer(container);
  };
  

  useEffect(()=>{
    axios.get('http://localhost:8000/objavi')
    .then(data => setData(data.data))
    .catch(err => console.log(err))
  }, [])
  const reversedData = data.slice().reverse(); 

  return(
    <div className='container'>
  <div className='homepage'>
  {!localStorage.getItem('token') && <Navbar />}
  {localStorage.getItem('token') && 
      <div className='header'>
      <h1 class="heading-text">E-Novine</h1>
      <button className='profilDugme' onClick={() => { window.location.pathname = "/dashboard" }}>Profil</button>
      </div>}
  <div className="image-container">
  {reversedData.map((container, index) => {
    return (
      <div key={index} className="user-container" onClick={() => handleContainerClick(container)}>
        <div className="user-info">
          <h2>{container.title}</h2>
          <p>{container.subtitle}</p>
          <h4 className="tekst">{container.text}</h4>
        </div>
        <div className="user-image">
          <img
            src={require(`../../../backend/public/Images/${container.file}`)}
            alt={container.file}
            height={200}
            width={200}
          />
        </div>
        
      </div>
      
    );
  })}
   {selectedContainer && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedContainer.title}</h2>
            <p>{selectedContainer.subtitle}</p>
            <p>{selectedContainer.text}</p>
            <div className="user-popup-image">
            <img
            src={require(`../../../backend/public/Images/${selectedContainer.file}`)}
            alt={selectedContainer.file}
            height={100}
            width={100}
          />
        </div>
            <button onClick={() => setSelectedContainer(null)}>Zatvori</button>
            <input type="text" placeholder="Tvoje ime:" /> {/* Input field */}
            <input type="text" placeholder="Komentar" /> {/* Input field */}
            <button>Napisi komentar</button>
            <h5>Komentari</h5>
          </div>
          
        </div>
      )}
</div>

  

  
  </div>
  </div>
  );
}
