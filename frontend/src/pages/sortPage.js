import React from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import Navbar from "../design/navbar/Navbar.js"
import { useEffect, useState } from "react"
import axios from 'axios'

export default function sortPage(){
    const [data, setData] = useState([])

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
      {localStorage.getItem('token') && <>
          <div className='header'>
          <h1 className="heading-text">E-Novine</h1>
          <div className='pretrazi'>
            <input placeholder='Tema'></input>
            <button className='pretrazi'>Pretrazi</button>
          </div>
          <button className='profilDugme' onClick={() => { window.location.pathname = "/dashboard" }}>Profil</button>
          </div>
          
        </>}
          
      <div className="image-container">
      {reversedData.map((container, index) => {
        return (
          <div key={index} className="user-container" onClick={() => handleContainerClick(container)}>
            <div className="user-info">
            <img
                src={require(`../../../backend/public/Images/${container.file}`)}
                alt={container.file}
                height={200}
                width={200}
              />
              <h2>{container.title}</h2>
              <p>{container.subtitle}</p>
              <h4 className="tekst">{container.text}</h4>
            </div>
            <div className="user-image">
              
            </div>
            
          </div>
          
        );
      })}
        {/*Pop-up prozor*/}
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
                <div className='button-container'>
                <button className='zatvori' onClick={() => setSelectedContainer(null)}>Zatvori</button>
                </div>
                <div className='inputComment'>
                <h5>Komentarisi post</h5>
                <input type="text" placeholder="Tvoje ime:" required onChange={(e)=>{setNickname(e.target.value)}}/> 
                <input type="text" placeholder="Komentar" required onChange={(e)=>{setComment(e.target.value)}}/> 
                <button className='komdugme' onClick={submitComment}>Komentarisi</button>
                </div>
                
                <h5>Komentari</h5>
                <div className='komentarii'>
                {commentData
                  .filter(komentar => komentar.news_id === selectedContainer._id)
                  .map((komentar, index) => (
                  <div className='komentar' key={index}>
                  <div className='nickname'>{komentar.nickname}</div>
                  <div className='comment-text'>{komentar.comment}</div>
                  </div>
                 ))}
                </div>
    
                
              </div>
              
            </div>
          )}
    </div>
    
      
    
      
      </div>
      </div>
      );
}