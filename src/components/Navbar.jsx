import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleItemClick = () => setNav(false);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#010F09] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "200px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="Home" smooth={true} duration={500}>
            home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <a
            href="https://willian-nilton-alves.github.io/PortifolioFrontEnd/about"
            onClick={handleItemClick}
          >
            About
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            href="https://willian-nilton-alves.github.io/PortifolioFrontEnd/skills"
            onClick={handleItemClick}
          >
            Skills
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            href="https://willian-nilton-alves.github.io/PortifolioFrontEnd/work"
            onClick={handleItemClick}
          >
            Projects
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            href="https://willian-nilton-alves.github.io/PortifolioFrontEnd/contact"
            onClick={handleItemClick}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/willian-nilton-alves-a00381228/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Willian-Nilton-Alves?tab=repositories"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#008000]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=" https://wa.me/+5548998002979"
              target="_blank"
            >
              WhatsApp <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
