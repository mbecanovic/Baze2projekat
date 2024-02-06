import React from "react";
import { FaHome } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";


export const sidedata = [

    {
        title: "Home",
        icon: <FaHome />,
        link: "/home"
    },

    {
        title: "Dashboard",
        icon: <AiFillDashboard />,
        link: "/dashboard"
    },

    {
        title: "Profile",
        icon: <CgProfile />,
        link: "/Profile"
    },

]

export const logout = [
    {
        title: "Logout",
        icon: <IoIosLogOut />,
        link: "/LogIn"
    }
]