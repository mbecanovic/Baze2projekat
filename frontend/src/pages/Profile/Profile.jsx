import React, { useState, useEffect } from "react";
import Sidebar from "../Dashboard/Sidebar";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

export default function Profile() {
    const username = localStorage.getItem('username');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/profil')
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            {data.map((profil) => {
                if (username === profil.username) {
                    return (
                        <div key={profil._id} className="naslov">
                            <Sidebar />
                            <CgProfile style={{ fontSize: '8em' }} />
                            <h1 style={{ textDecoration: 'underline' }}>{username}'s profile</h1>

                            <div className="outerWrapper">
                                <div className="wrapper1">
                                    <h1>Informacije o profilu</h1>
                                    <div className="inputWrapper">
                                        <input type="text" value={profil.name} className="title" readOnly />
                                        <input type="text" value={username} className="title" readOnly />
                                        <input type="password" placeholder="password" className="SubTitle" value={profil.password}/>
                                        <input type="text" value={profil.value} className="subs" readOnly />
                                        <button className="submitBtn">Azuriraj podatke</button>
                                        <button className="submitBtn">Obrisi nalog</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </>
    );
}
