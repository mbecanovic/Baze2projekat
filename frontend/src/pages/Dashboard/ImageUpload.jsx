import React from "react";
import { useState } from "react";

function ImageUpload(){
    const [image, setImage] = useState('')
    function handleImage(e){
        console.log('uspesan unos slike')
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    return(
        <div>
            <input type="file" name="file" onChange={handleImage} placeholder="Otpremi datutetu"></input>
            {image =="" || image==null?"": <img width={100} height={80} src={URL.createObjectURL(image)} alt="Pregled"/>}
        </div>
    )
        
    
}
export default ImageUpload;