import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    {/*useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        
    }, []);*/}

    const useAuth = () => {
        //getting token from local storage
        const user = localStorage.getItem('token')
        //checking whether token is preset or not
        if (user) {
            return true;
        } else {
            return false
        }
    };

    const token = useAuth();
    return token ? <Outlet /> : <Navigate to='/LogIn' />;  
}

export default ProtectedRoutes;
