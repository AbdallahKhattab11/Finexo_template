
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar.jsx"

import Home from "./pages/Home/Home"
import About from "./pages/About/About.jsx"
import Services from "./pages/Services/Services.jsx"
import WhyUs from "./pages/WhyUs/WhyUs.jsx"
import Team from "./pages/Team/Team.jsx"


const App = () => {
  return (
    <div className='app '>
      <Router>
        <Navbar />
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