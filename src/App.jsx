
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

import Navbar from "./components/Navbar/Navbar.jsx"

import Home from "./pages/Home/Home"
import About from "./pages/About/About.jsx"
import Services from "./pages/Services/Services.jsx"
import WhyUs from "./pages/WhyUs/WhyUs.jsx"
import Team from "./pages/Team/Team.jsx"
import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className='app relative '>
      <Router>
        <Navbar setIsLogin={setIsLogin} />
        {isLogin && <Login setIsLogin={setIsLogin} setIsRegister={setIsRegister} />}
        {isRegister && <Register setIsRegister={setIsRegister} setIsLogin={setIsLogin}/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App