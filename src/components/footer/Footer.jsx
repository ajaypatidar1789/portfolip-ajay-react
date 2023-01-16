import React from "react";
import "./Footer.css";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="logo">Ajay Patidar</div>
        <nav className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            {/* <li>
              <a href="#portfolio">Projects</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="social-media">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="http://www.linkedin.com/in/ajay-patidar-9a1109226"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/ajaypatidar1789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <div className="description">
          © {new Date().getFullYear()} Aayush. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
