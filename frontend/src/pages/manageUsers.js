import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from './Dashboard/Sidebar.jsx';

export default function ManageUsers(){
    const username = localStorage.getItem('username');
    const [data, setData] = useState([]);
    const [selectedContainer, setSelectedContainer] = useState('');

    const handleContainerClick = (profile) => {
        setSelectedContainer(profile);
    };

    const handleDelete = (profile) => {
        
        axios.delete(`http://localhost:8000/user/${profile._id}`)
            .then(response => {
                alert("Uspesno brisanje")
                console.log('Podaci su uspešno obrisani iz baze.', response);
            })
            .catch(error => {
                console.error('Greška prilikom brisanja podataka iz baze.', error);
            });
        };

    useEffect(() => {
        axios.get('http://localhost:8000/profil')
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <SideBar />
            <h1>Manage users Admin's page</h1>
            
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Value</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((profile, index) => (
                        username === "admin" ? (
                            <tr key={index} className="user-row">
                                <td>{profile.name}</td>
                                <td>{profile.username}</td>
                                <td>{profile.value}</td>
                                <td>
                                    <button onClick={() => handleDelete(profile)}>Delete</button>
                                </td>
                            </tr>
                        ) : null
                    ))}
                </tbody>
            </table>
        </>
    );
}
