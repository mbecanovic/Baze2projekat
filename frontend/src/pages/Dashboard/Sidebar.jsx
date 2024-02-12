import React from "react";
import './Dashboard.css'
import '../../design/navbar/styles.css'
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { sidedata, logout } from './sidedata'

export default function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
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

            
        </div>
    )
}
