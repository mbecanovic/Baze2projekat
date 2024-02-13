import React from "react"
import LogIn from "./pages/LoginForm/LogIn"
import SignUp from "./pages/SignupForm/SignUp"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard/Dashboard"
import Profile from "./pages/Profile/Profile"
import { Route, Routes} from "react-router-dom"
import ProtectedRoutes from './components/PrivateRoute'
import Upload from './pages/Dashboard/upload';
import MyNews from './pages/MyNews'
import Admin from './pages/admin'


function App() {
const token = localStorage.getItem('token');
const username = localStorage.getItem('username')

  return (
    <>
      
      <div className="container">
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home /> } />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />}  />
          <Route element={<ProtectedRoutes />}>
          <Route path="/Dashboard" element={<Dashboard />} /> 
          </Route>
          <Route path="/mynews" element={<MyNews />}/>
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>

      

    </>


    
  )
}

export default App
