import React from "react";
import { FaHome } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export const sidedata = [
    

    {
        title: "Home",
        icon: <FaHome />,
        link: "/home"
    },

    {
        title: "Dash",
        icon: <AiFillDashboard />,
        link: "/dashboard"
    },

    {
        title: "Profile",
        icon: <CgProfile />,
        link: "/Profile"
    },
    {
        title: "MyNews",
        icon: <FaRegListAlt />
    }
    
]

function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    NavigateToLogIn();
}

function NavigateToLogIn() {
    const navigate = useNavigate();
    navigate('/LogIn');
}

export const logout = [
    {
        title: "Logout",
        icon: <IoIosLogOut />,
        link: "/LogIn"
    }
]