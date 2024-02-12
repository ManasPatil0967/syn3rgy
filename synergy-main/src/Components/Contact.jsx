import React from 'react'

function Contact() {
  return (
    <div className="flex items-center pt-20 gap-10 w-screen p-4 flex-wrap">
        <form className="w-full" action="">
            <div className="flex gap-4">
            <button className="w-full md:h-12 text-xl md:text-2xl text-black px-10 font-semibold py-5 bg-yellow-400 rounded-lg flex-col justify-center items-center gap-2 inline-flex animate__fadeInRight animate__animated animate__slow">
              Register Now
            </button>
            </div>
        </form>
        <div className="w-full"></div>
    </div>
  )
}

export default Contact