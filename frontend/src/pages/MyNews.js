import Cards from '../design/kartica/cards.jsx';
import React from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import Navbar from "../design/navbar/Navbar.js"
import { useEffect, useState } from "react"
import axios from 'axios'
import SideBar from './Dashboard/Sidebar.jsx'


export default function MyNews(){
    const [data, setData] = useState([])
    const [selectedContainer, setSelectedContainer] = useState(null);

    const username = localStorage.getItem('username')



    const navigate = useNavigate();
    const navigateToLogIn = () => {
    navigate('/LogIn');
  }

  const handleContainerClick = (container) => {
    setSelectedContainer(container);
  };
  
    const handleContainerDelete = (container) => {
    setSelectedContainer(container);
    axios.delete(`http://localhost:8000/objavi/${container._id}`)
        .then(response => {
            alert("Uspesno brisanje")
            console.log('Podaci su uspešno obrisani iz baze.', response);
        })
        .catch(error => {
            console.error('Greška prilikom brisanja podataka iz baze.', error);
        });
    };
    console.log(selectedContainer)


    useEffect(()=>{
        axios.get('http://localhost:8000/objavi')
        .then(data => setData(data.data))
        .catch(err => console.log(err))
      }, [])


      const reversedData = data.slice().reverse(); 
      return (
        <>
        <SideBar />
        <h1>{username}'s News</h1>
        <button className="Logoutbttn" onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('username'); navigateToLogIn()}}>Odjavi se</button>
    <div className="mynews">
  {reversedData.map((container, index) => {
    if(container.username == username) {
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
    }
    else return null;
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
          <h5>napisao: {selectedContainer.username}</h5>
        </div>
            
            <button onClick={() => setSelectedContainer(null)}>Zatvori</button>
            <button className='del-news' onClick={() => handleContainerDelete(selectedContainer)}>Obrisi</button>
          </div>
          
        </div>
      )}
    </div>

        
        </>
        
    )
}