import React from "react";
import './Dashboard.css'
import '../../design/navbar/styles.css'

import { sidedata, logout } from './sidedata'

export default function Sidebar(){
    return(
        <div className="sidebar">
            <ul className="sidebar-list">
                {
                    sidedata.map((val, key) => {
                        return (
                            <li className="row" key={key} onClick={() => { window.location.pathname = val.link }}>
                                <div>{val.icon}</div>
                                <div>{val.title}</div>
                            </li>
                        );
                    })
                }
            </ul>

            <ul className="logout">
                {
                    logout.map((val, key) => {
                        return (
                            <li className="row" key={key} onClick={() => {window.location.pathname = val.link; localStorage.removeItem('token')}}>
                                <div>{val.icon}</div>
                                <div>{val.title}</div>
                            </li>
                            
                        );
                        
                    })
                    
                }
            </ul>
        </div>
    )
}
