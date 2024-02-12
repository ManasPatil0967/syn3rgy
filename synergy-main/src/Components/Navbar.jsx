import React from "react";
import {
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiFacebook,
  FiHelpCircle,
  FiHome,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiUsers,
} from "react-icons/fi";
import { ReactComponent as Logo } from "../assests/logo.svg";
import { useState } from "react";
import 'animate.css'


const Navbar = () => {
  const [current, setcurrent] = useState("home");
  return (
    <nav className="fixed left-0 h-screen flex flex-col justify-between z-10 ">
      <div className="p-4 animate__fadeInLeft animate__animated">
        <Logo className="h-10" />
      </div>

      <div className="p-4 flex flex-col gap-4 animate__fadeInLeft animate__animated animate__slow">
        <a
          href="#home"
          className={`text-white text-sm font-medium tracking-widest flex gap-2 items-center uppercase ${
            current === "home" ? null : "opacity-60"
          } hover:opacity-80`}
          onClick={() => setcurrent("home")}
        >
          <FiHome size="18" />
          <p>HOME</p>
        </a>
        <a
          href="#about"
          className={`text-white text-sm font-medium tracking-widest flex gap-2 items-center uppercase ${
            current === "about" ? null : "opacity-60"
          } hover:opacity-80`}
          onClick={() => setcurrent("about")}
        >
          <FiBookOpen size="18" />
          <p>About</p>
        </a>

        <a
          href="#prizes"
          className={`text-white text-sm font-medium tracking-widest flex gap-2 items-center uppercase ${
            current === "prizes" ? null : "opacity-60"
          } hover:opacity-80`}
          onClick={() => setcurrent("prizes")}
        >
          <FiAward size="18" />
          <p>Prizes</p>
        </a>

        <a
          href="#timeline"
          className={`text-white text-sm font-medium tracking-widest flex gap-2 items-center uppercase ${
            current === "timeline" ? null : "opacity-60"
          } hover:opacity-80`}
          onClick={() => setcurrent("timeline")}
        >
          <FiCalendar size="18" />
          <p>Timeline</p>
        </a>

        <a
          href="#sponsors"
          className={`text-white text-sm font-medium tracking-widest flex gap-2 items-center uppercase ${
            current === "sponsors" ? null : "opacity-60"
          } hover:opacity-80`}
          onClick={() => setcurrent("sponsors")}
        >
          <FiUsers size="18" />
          <p>Sponsors</p>
        </a>

        <a
          href="#faqs"
          className={`text-white text-sm font-medium tracking-widest flex gap-2 items-center uppercase ${
            current === "faqs" ? null : "opacity-60"
          } hover:opacity-80`}
          onClick={() => setcurrent("faqs")}
        >
          <FiHelpCircle size="18" />
          <p>FAQs</p>
        </a>

        <a
          href="#contact"
          className={`text-white text-sm font-medium tracking-widest flex gap-2 items-center uppercase ${
            current === "contact" ? null : "opacity-60"
          } hover:opacity-80`}
          onClick={() => setcurrent("contact")}
        >
          <FiMail size="18" />
          <p>Contact</p>
        </a>
      </div>

      <div className="flex flex-col md:flex-row animate__fadeInLeft animate__animated">
        <a
          href="www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10  bg-sky-600 flex items-center justify-center"
        >
          <FiLinkedin size="20" color="white" />
        </a>
        <a
          href="https://www.instagram.com/"
          className="w-10 h-10 bg-pink-500 flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram size="20" color="white" />
        </a>

       
        <a
          href="mailto:your.email@gmail.com"
          className="w-10 h-10 bg-red-600 flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail size="20" color="white" />
        </a>

        <a
          href="https://twitter.com/"
          className="w-10 h-10 bg-blue-400 flex items-center justify-center rounded-e-md="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter size="20" color="white" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
