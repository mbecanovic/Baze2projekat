import Navbar from "./design/navbar/Navbar"
import LogIn from "./pages/LoginForm/LogIn"
import SignUp from "./pages/SignupForm/SignUp"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes} from "react-router-dom"
import { useState } from "react"


function App() {
  

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      

    </>
    
  )
}

export default App
