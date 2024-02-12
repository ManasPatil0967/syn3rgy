import React from "react";
import block3 from  "../assests/3-block.png"

function Contact() {
  return (
    <div className="flex flex-col lg:flex-row items-center pt-20 gap-10 w-screen md:pl-40 pr-10 p-4">
      <form className="w-full flex flex-col gap-4" action="">
        <div className="flex gap-4">
          <input
            type="text"
            className="w-full md:h-12 text-base md:text-xl text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-15 px-4 py-5 border-yellow-400 border-2 bg-transparent rounded-lg flex-col justify-center items-center gap-2 inline-flex animate__fadeInRight animate__animated animate__slow"
            placeholder="Name"
          />
          <input
            type="email"
            className="w-full md:h-12 text-base md:text-xl text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-15 px-4 py-5 border-yellow-400 border-2 bg-transparent rounded-lg flex-col justify-center items-center gap-2 inline-flex animate__fadeInRight animate__animated animate__slow"
            placeholder="Email"
          />
        </div>
        <textarea
            type="text"
            className="w-full h-64 text-base md:text-xl text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-15 px-4 py-5 border-yellow-400 border-2 bg-transparent rounded-lg flex-col justify-center items-center gap-2 inline-flex animate__fadeInRight animate__animated animate__slow"
            placeholder="Message"
          />


<button type="submit" className="w-full bg-blue-500 h-14 md:h-16 hover:bg-opacity-70 ease-in-out duration-300 text-xl md:text-2xl text-white px-10 font-semibold py-5 rounded-lg flex-col justify-center items-center gap-2 inline-flex animate__fadeInRight animate__animated animate__slow">
              Send Message
            </button>

            <div className="text-white pt-10">
                        <h1 className=" text-3xl font-semibold">Any Queries ? </h1>
                        <p>email us at : synergy@gmail.com</p>
                    </div>
    <div className="flex gap-4 flex-wrap">
            <div class="relative">
                            <img className="" src={block3} height="120" width="200" />
                            <div class="absolute top-8 left-5 text-white">
                                <p>Manas Patil</p>
                                <p>+919561073352</p>
                            </div>
                        </div>
                        <div class="relative">
                            <img className="" src={block3} height="120" width="200" />
                            <div class="absolute top-8 left-5 text-white">
                                <p>Paras Bindroo</p>
                                <p>+919682319880</p>
                            </div>
                        </div>
                        <div class="relative">
                            <img className="" src={block3} height="120" width="200" />
                            <div class="absolute top-8 left-5 text-white">
                                <p>Krish</p>
                                <p>+919820591237</p>
                            </div>
                        </div>  
                    </div>
    
      </form>
      <div className="w-full">
      <iframe className="rounded-xl w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.005923900579!2d72.83461397423584!3d19.10739605098805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1707735163058!5m2!1sen!2sin" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Contact;
