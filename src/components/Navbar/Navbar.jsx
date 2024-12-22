/* eslint-disable react/prop-types */
import { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";



const Navbar = ({setIsLogin}) => {
  // handle menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenu = () => {
    if (isMenuOpen) {
      return "h-[460px] opacity-100" 
    }else {
      return "h-0 opacity-0"
    }
  };
  const baseClasses = "hover:text-secondary transition";
  const styleLinks = ({ isActive }) => {
    return (
      `${baseClasses} ${isActive ? "text-primary" : "text-white"}`
    );
  };

  // handle login
  const handleLogin = () => {
    setIsLogin(true)
  }

  return (
    <nav className="bg-nav-gradient w-full h-20 py-[15px] px-[15px] text-white relative elementCenter">
      <div className="container mx-auto elementBetween ">
        <div className="logo text-2xl font-bold elementCenter lg:gap-8 xs:gap-4">
          <h1 className="cursor-pointer">
            <Link to="/">Finexo</Link>
          </h1>
          <div className="search xxs:hidden xs:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-2 rounded-md w-[200px] h-[30px] text-[16px] font-medium text-black placeholder:text-[16px] focus:outline-none"
            />
          </div>
        </div>
        <div className="links xxs:hidden lg:flex elementCenter gap-32">
          <ul className="flex gap-10 uppercase">
            <li>
              <NavLink to="/" className={styleLinks}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={styleLinks}>About</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={styleLinks}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/why-us" className={styleLinks}>Why Us</NavLink>
            </li>
            <li>
              <NavLink to="/team" className={styleLinks}>Team</NavLink>
            </li>
          </ul>
          <div className="login">
            <button className="bg-primary text-white px-6 py-2 rounded-md" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>

        <div className="menu xxs:block lg:hidden ">
          <button className=" text-white text-3xl" onClick={toggleMenu}>
            <FaBars />
          </button>
          <div className={`links flex flex-col items-center justify-center gap-10 absolute centerAbsoluteElement rounded-b-[10px] w-[95%] bg-nav-gradient transition-all duration-300 overflow-hidden ${handleMenu()}`}>
          <ul className="flex flex-col items-center gap-10 uppercase">
            <li>
              <NavLink to="/" className={styleLinks}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={styleLinks}>About</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={styleLinks}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/why-us" className={styleLinks}>Why Us</NavLink>
            </li>
            <li>
              <NavLink to="/team" className={styleLinks}>Team</NavLink>
            </li>
          </ul>
          <div className="login">
            <button onClick={handleLogin} className="bg-primary text-white px-6 py-2 rounded-md">
              Login
            </button>
          </div>
          <div className="search xxs:block xs:hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-2 rounded-md w-[200px] h-[30px] text-[16px] font-medium text-black placeholder:text-[16px] focus:outline-none"
            />
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
