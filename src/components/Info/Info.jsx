import { IoLocation } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Info = () => {
  return (
    <div className="info py-[60px] bg-primary-bg">
      <div className="container">
        <div className="grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  px-[20px]">
          <div className="address">
            <h2 className="text-2xl font-bold text-white mb-[20px]">Address</h2>
            <ul className="text-white mb-[30px]">
              <li className="flex gap-3 mb-3 items-center">
                <IoLocation />
                <p className="">Location</p>
              </li>
              <li className="flex gap-3 mb-3 items-center">
                <MdCall />
                <p className="">+012 345 67890</p>
              </li>
              <li className="flex gap-3 mb-3 items-center">
                <IoMdMail />
                <p className="">info@example.com</p>
              </li>
            </ul>
            <div className="social flex gap-4  text-2xl text-white">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
          <div className="info">
            <h2 className="text-2xl font-bold text-white mb-[20px]">Info</h2>
            <p className="text-white ">
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful
            </p>
          </div>
          <div className="links text-white">
            <h2 className="text-2xl font-bold text-white mb-[20px]">Links</h2>
            <div className="flex flex-col gap-3">
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
              <Link to="/about" className="hover:text-primary transition">
                About
              </Link>
              <Link to="/service" className="hover:text-primary transition">
                Service
              </Link>
              <Link to="/why-us" className="hover:text-primary transition">
                Why Us
              </Link>
              <Link to="/team" className="hover:text-primary transition">
                Team
              </Link>
            </div>
          </div>
          <div className="subscribe">
            <h2 className="text-2xl font-bold text-white mb-[20px]">
              Subscribe
            </h2>
            <div className="">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="EnterEmail"
                className="bg-transparent border-b-[1px] border-white py-2 outline-none w-full text-white mb-[20px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
