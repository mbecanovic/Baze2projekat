import React from "react"
import LogIn from "./pages/LoginForm/LogIn"
import SignUp from "./pages/SignupForm/SignUp"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard/Dashboard"
import { Route, Routes} from "react-router-dom"
import ProtectedRoutes from './components/PrivateRoute'


function App() {
const token = localStorage.getItem('token');

  return (
    <>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home /> } />

          <Route element={<ProtectedRoutes />}>
          <Route path="/Dashboard" element={<Dashboard />} /> 
          </Route>


          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>

      

    </>


    
  )
}

export default App
