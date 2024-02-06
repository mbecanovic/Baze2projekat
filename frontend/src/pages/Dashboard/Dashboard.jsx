import React, { useState } from "react";
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

//konekcija sa backendom
const history = useNavigate();

const upload = () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append("title", title)
    formData.append("subtitle", subtitle)
    formData.append("text", text);

    console.log(formData);

    axios.post('http://localhost:8000/upload', formData)
    .then(res => {history.push('/dashboard')})
    alert("Uspesan unos!")
    window.location.reload(false)
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

   const location = useLocation();
   const { username } = location.state || {};

    console.log('uspesan dashboard');
    return(
        <div className="naslov">
        <Sidebar />
        <h1>Welcome, {username}!</h1>
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

