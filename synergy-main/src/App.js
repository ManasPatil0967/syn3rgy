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
import { useEffect } from "react";
import Timelines from "./Components/Timelines";
import devfolio from "./assests/devfolio.png";
import polygon from "./assests/polygon.png";
import ethindia from "./assests/ethindia.png";

import Contact from "./Components/Contact";

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

      <main className="h-screen overflow-y-auto w-screen overflow-x-hidden">
        {/* a 100vh container, each section slide up like caraousel */}
        {/* use section for each with id="{name}" */}
        <section id="home" className="flex h-screen flex-col justify-center ">
          <div className="flex relative h-full flex-col items-center justify-end">
            <Hero className="w-80 md:w-[800px] animate__fadeInDown animate__animated" />
            <img
              src={heroLego}
              alt="lego"
              className="h-80 md:h-[56rem] absolute top-1/3 animate__rotateInUpLeft animate__animated animate__slow"
            />
          </div>
          <div className="flex flex-col max-w-screen items-center md:items-end h-full justify-end gap-4 md:justify-between p-10 overflow-hidden">
            <div className="md:w-96 text-justify text-white text-base md:text-xl animate__fadeInRight animate__animated">
              Dive into innovation with our 24-hour tech hackathon! Unleash your
              creativity, collaborate with brilliant minds, and build
              groundbreaking solutions that redefine the future.
            </div>
            <button
              data-hackathon-slug="synrgy-1"
              data-button-theme="light"
              className="apply-button w-full md:w-96 h-14 md:h-16  text-xl md:text-2xl text-black px-10 font-semibold py-5 bg-yellow-400 rounded-lg flex-col justify-center items-center gap-2 inline-flex animate__fadeInRight animate__animated animate__slow"
            >
              Register Now
            </button>
            <button className="w-full md:w-96 h-14 md:h-16  text-xl md:text-2xl text-black px-10 font-semibold py-5 bg-yellow-400 rounded-lg flex-col justify-center items-center gap-2 inline-flex animate__fadeInRight animate__animated animate__slow">
              Register Now
            </button>
          </div>

          <img
            src={heroBg}
            alt=""
            className="select-none absolute -bottom-10 w-screen object-cover z-[-1]"
          />
        </section>

        <section id="about" className="h-screen">
          <h1 className="text-style">About</h1>

          <div className="p-4 md:p-40 md:pt-52 text-center text-white text-base md:text-2xl animate__fadeInRight animate__animated">
          SYN3RGY stands as a beacon of collaborative innovation, bringing together the collective efforts of DJS NSDC, DJS SIGAI, and DJS ISACA. Our 24-hour Hackathon is more than just a competition; it's a testament to the power of teamwork and creativity.

Inspired by the iconic building blocks of LEGO, SYN3RGY aims to immerse participants in a uniquely creative and innovative environment. The hackathon invites teams to engage in a spirited battle for a coveted position among the top 50.

With a diverse range of tech domains including Data science, AI & ML, Blockchain, Cybersecurity, Web/App Development, and Open Innovation, SYN3RGY offers participants the opportunity to explore challenges that traverse various frontiers of technology. 

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
          <h3             className="text-white  text-2xl text-center md:text-4xl tracking-widest"
> Platinum Sponsors</h3>
          <div className="flex gap-10  p-4 items-center justify-center">
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
        {/* <section id="faqs" className="h-screen">
          <h1 className="text-style">FAQs</h1>
        </section>
        <section id="contact" className="h-screen">
          <h1 className="text-style">Contact</h1>
          <Contact/>
        </section> */}
      </main>
    </>
  );
}

export default App;
