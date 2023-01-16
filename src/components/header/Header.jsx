import React from "react";
import "./Header.css";
import { BsLinkedin, BsGithub, BsFileText, BsInstagram } from "react-icons/bs";
import { HiChevronDoubleDown } from "react-icons/hi";
import Button from "../shared/Button";
import { ButtonOutline } from "../shared/Button";

import CV from "../../assets/Resume.pdf";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-header">
        <div className="header-title">
          <h5>Hello I'm</h5>
          <h1>Ajay Patidar</h1>
          <small>Frontend Developer</small>
        </div>
        <div className="header-buttons">
          <a download="" href={CV} target="_blank">
            <ButtonOutline text="Download CV" />
          </a>

          <a href="#contact">
            <Button text="Let's Talk" />
          </a>
        </div>
      </div>
      <div className="header-footer">
        <div className="header-socials">
          <a
            href="http://www.linkedin.com/in/ajay-patidar-9a1109226"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/ajaypatidar1789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
        <div className="image-area">
          <img src={"/assets/profile.png"} alt="Harun Doğdu" />
        </div>
        <a href="#!" className="scroll-down">
          <span>Scroll Down</span>
          <HiChevronDoubleDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
