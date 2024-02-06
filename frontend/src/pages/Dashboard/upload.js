import React, { useState } from "react";
import axios from 'axios';

export default function Upload(){

    const [file, setFile] = useState()
    const [title, setTitle] = useState();
    const upload = () => {
        console.log(title);
        const formData = new FormData()
        formData.append('file', file)
        formData.append("title", title);

        axios.post('http://localhost:8000/upload', formData)
        .then(res => {})
        .catch(er => console.log(er))
    }

    return(
        <div>
            <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
            <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
            <button type="submit" onClick={upload}>Upload</button>
        </div>
        
    )
}