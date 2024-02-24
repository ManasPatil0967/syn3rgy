// import logo from './logo.svg';
import "./App.css";
import Prize from "./Components/Prize";
import Navbar from "./Components/Navbar";
import Sponsors from "./Components/Sponsors";
import { ReactComponent as Hero } from "./assests/hero.svg";
import heroLego from "./assests/hero_lego.png";
import heroBg from "./assests/hero_bg.png";
import "animate.css";
import MagnetMouse from "magnet-mouse";
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import Timelines from "./Components/Timelines";
import devfolio from "./assests/devfolio.png";
import polygon from "./assests/polygon.png";
import ethindia from "./assests/ethindia.png";
import collab from "./assests/collab.png";

import Contact from "./Components/Contact";
import FaqAccordion from "./Components/FAQ/Faq";
import Timer from "./Components/Timer";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* nav */}
      <Navbar />
      <Toaster/>
      <main className="h-screen overflow-y-auto w-screen overflow-x-hidden">
        {/* a 100vh container, each section slide up like caraousel */}
        {/* use section for each with id="{name}" */}
        <section id="home" className="relative flex h-screen flex-col justify-center ">
          <img src={collab} alt="logo all"  className="collab_logo absolute top-0 right-4 h-16"/>
          <div className="flex relative h-full flex-col items-center justify-end">
            <Hero className="w-80 md:w-[800px] animate__fadeInDown animate__animated" />
            <img
              src={heroLego}
              alt="lego"
              className="h-80 md:h-[56rem] absolute top-2/4 animate__rotateInUpLeft animate__animated animate__slow"
            />
          </div>
          <div className="flex flex-col max-w-screen items-center md:items-end h-full justify-end gap-4 md:justify-between p-10 overflow-hidden">
            <div className="md:w-96 text-justify text-white text-base md:text-xl animate__fadeInRight animate__animated">
              Dive into innovation with our 24-hour tech hackathon! Unleash your
              creativity, collaborate with brilliant minds, and build
              groundbreaking solutions that redefine the future.
            </div>
            {/* <button
              data-hackathon-slug="synrgy-1"
              data-button-theme="light"
              className="apply-button self-center animate__fadeInRight animate__animated animate__slow"
            >
            </button> */}
            <a href="https://synrgy-1.devfolio.co/" className="w-full hover:bg-yellow-300 ease-in-out duration-300 md:w-96 h-14 md:h-16  text-xl md:text-2xl text-black px-10 font-semibold py-5 bg-yellow-400 rounded-lg flex-col justify-center items-center gap-2 inline-flex animate__fadeInRight animate__animated animate__slow">
              Register Now
            </a>
          </div>

          <img
            src={heroBg}
            alt=""
            className="select-none absolute -bottom-10 w-screen object-cover z-[-1]"
          />
        </section>

        <section id="about" className="mb-40 mt-56">
          <div className="flex flex-wrap items-center w-full h-full">
            <div className="w-full flex flex-wrap gap-16">
              <p className="section-title w-full">About</p>

              <div className="p-4 md:px-32 text-center text-white text-base md:text-2xl animate__fadeInRight animate__animated">
                SYN3RGY stands as a beacon of collaborative innovation, bringing together the collective efforts of DJS NSDC, DJS SIGAI, and DJS ISACA. Our 24-hour Hackathon is more than just a competition; it's a testament to the power of teamwork and creativity.

                Inspired by the iconic building blocks of LEGO, SYN3RGY aims to immerse participants in a uniquely creative and innovative environment. The hackathon invites teams to engage in a spirited battle for a coveted position among the top 50.

                With a diverse range of tech domains including Data science, AI & ML, Blockchain, Cybersecurity, Web/App Development, and Open Innovation, SYN3RGY offers participants the opportunity to explore challenges that traverse various frontiers of technology.

              </div>
            </div>
          </div>
        </section>
        
        <section id="timer" className="h-screen relative">
          <div className="flex flex-wrap w-full h-full items-center">
            <div className="w-full flex flex-wrap gap-16">
              <p className="section-title w-full">Coding Round Ends in</p>
              <Timer />
            </div>
          </div>
        </section>

        <Prize />
        <section id="timeline" className="pt-40">
          <h1
            className="font-semibold text-4xl text-center md:text-8xl tracking-widest text-primary-strokes"
            data-content="Timeline"
          >
            Timeline
          </h1>
          <Timelines></Timelines>
        </section>
        <section id="sponsors" className="pt-40">
          <h1
            className="font-semibold pb-20 text-4xl text-center md:text-8xl tracking-widest text-primary-strokes"
            data-content="Sponsors"
          >
            Sponsors
          </h1>
          <h3 className="text-white  text-2xl text-center md:text-4xl tracking-widest"
          > Platinum Sponsors</h3>
          <div className="flex flex-col md:flex-row gap-10  p-4 items-center justify-center">
            <img
              className="w-64 hover:scale-105 ease-in-out duration-500"
              src={devfolio}
              alt="DEVFOLIO LOGO"
            />
            <img
              className="w-64 hover:scale-105 ease-in-out duration-500"
              src={polygon}
              alt="POLYGON LOGO"
            />
            <img
              className="w-64 hover:scale-105 ease-in-out duration-500"
              src={ethindia}
              alt="ETHINDIA LOGO"
            />
          </div>
          {/* <Sponsors></Sponsors> */}
        </section>
        <section id="faqs" className="my-40">
          <p className="section-title mb-10">FAQs</p>
          <div className="faq-accordion">
            <FaqAccordion question="" answer="" />
          </div>
        </section>

        <section id="contact" className="">
          <h1 className="font-semibold mt-[5rem] text-4xl text-center md:text-8xl tracking-widest text-primary-strokes"
            data-content="Contact">Contact</h1>
          <Contact />
        </section>

        <footer className="pt-10 flex justify-between flex-row-reverse md:px-10 md:pl-44">
          <div className="text-white font-medium tracking-wide">Developed with ❤ by Technical Team</div>
          <div className="relative">
            <div className=" text-white  font-semibold font-['Chakra Petch'] tracking-widest">ISACA - SIGAI -  NSDC</div>
            {/* <div className="left-0 top-0 absolute text-white font-semibold font-['Chakra Petch'] tracking-widest">ISACA  SIGAI   NSDC</div> */}
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
