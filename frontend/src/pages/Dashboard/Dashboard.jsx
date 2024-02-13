import React, { useState, useEffect } from "react";
import './Dashboard.css'
import Sidebar from './Sidebar';
import ImageUpload from "./ImageUpload";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard(){

const [title, setTitle] = useState('');
const [subtitle, setSubtitle] = useState('');
const [text, setText] = useState('');
const [file, setFile] = useState('');
const navigate = useNavigate();
const navigateToLogIn = () => {
    navigate('/LogIn');
  }

const [data, setData] = useState();

//konekcija sa backendom
const history = useNavigate();

const upload = () => {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('file', file)
    formData.append("title", title)
    formData.append("subtitle", subtitle)
    formData.append("text", text);

    console.log(formData);

    axios.post('http://localhost:8000/upload', formData)
    .then(res => {history.push('/dashboard')})
    alert("Uspesan unos!")
    //window.location.reload(false)
    .catch(er => console.log(er))
}
      
//funkcija za ubacivanje slike
    function handleImage(e){
        console.log('uspesan unos slike')
        console.log(e.target.files)
        setFile(e.target.files[0])
    }

   //slika
   function deleteImage(){
        setFile('');
   }
   function prikaz(){
    if(file)
    return <button className="submitBtn" onClick={deleteImage}>Obrisi sliku</button>
   } 

   useEffect(()=>{
    axios.get('http://localhost:8000/LogIn')
    .then(username => setData(username.data))
    .catch(err => console.log(err))
  }, [])
    
    const username = localStorage.getItem('username');
    return(

        <div className="naslov">
        <Sidebar />
        <h1 style={{ textDecoration: 'underline' }}>{username}'s dashboard</h1>
        <button className="Logoutbttn" onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('username'); navigateToLogIn()}}>Odjavi se</button>
        <div className="outerWrapper">
    <div className="wrapper1">
        <h1>Napisi clanak</h1>
        <div className="inputWrapper">
            <input type="text" placeholder="Naslov" className="title" onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="text" placeholder="Podnaslov" className="SubTitle" onChange={(e)=>{setSubtitle(e.target.value)}}/>
            <textarea placeholder="Napisi clanak" className="text" onChange={(e)=>{setText(e.target.value)}}></textarea>
            <input multiple type="file" name="file" onChange={handleImage} placeholder="Otpremi datutetu"></input>
            {file =="" || file==null?"": <img width={100} height={80} src={URL.createObjectURL(file)} alt="Pregled"/>}
            {prikaz()}
            <button className="submitBtn" onClick={upload}>Objavi</button>
         </div>
    </div>
</div>

        </div>
    )
}

