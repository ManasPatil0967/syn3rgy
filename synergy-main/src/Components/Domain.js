import React from 'react';
import './Prize.css'
import blochchain from '../assests/blockchain.png'
import cyber from '../assests/cyber.png'
import cloud from '../assests/cloud.png'
import aiml from '../assests/aiml.png'
import innovation from '../assests/innovation.png'
import web from '../assests/web.png'

const Domain = () => {
    return (
        <>
            <section id='domains' className="p-8 rounded-lg text-white h-screen mb-72">
                <h1 className='text-style'>Domains</h1>
                <div className='grid lg:grid-cols-3 gap-12 mt-20 justify-items-center items-center lg:ml-12 sm:grid-cols-1'>
                    <div className='w-72 h-72 border bg-white rounded flex justify-center items-center relative domain1 overflow-hidden'>
                        <img src={blochchain} className='h-44' />
                        <div className="absolute inset-0 bg-black opacity-0 text-2xl transition-opacity duration-300 flex justify-center items-center hover:opacity-75">
                            <strong><h1 className='text-[2rem]'>Blockchain</h1></strong>
                        </div>
                    </div>
                    <div className='w-72 h-72 border bg-white rounded flex justify-center items-center relative domain2 overflow-hidden'>
                        <img src={cyber} className='h-44' />
                        <div className="absolute inset-0 bg-black opacity-0 text-2xl transition-opacity duration-300 flex justify-center items-center hover:opacity-75">
                            <strong><h1 className='text-[2rem]'>CyberSecurity</h1></strong>
                        </div>
                    </div>
                    <div className='w-72 h-72 border bg-white rounded flex justify-center items-center relative domain3 overflow-hidden'>
                        <img src={cloud} className='h-44' />
                        <div className="absolute inset-0 bg-black opacity-0 text-2xl transition-opacity duration-300 flex justify-center items-center hover:opacity-75">
                            <strong><h1 className='text-[2rem]'>Cloud Computing</h1></strong>
                        </div>
                    </div>
                    <div className='w-72 h-72 border bg-white rounded flex justify-center items-center relative domain1 overflow-hidden'>
                        <img src={aiml} className='h-44' />
                        <div className="absolute inset-0 bg-black opacity-0 text-2xl transition-opacity duration-300 flex justify-center items-center hover:opacity-75">
                            <strong><h1 className='text-[2rem]'>AIML</h1></strong>
                        </div>
                    </div>
                    <div className='w-72 h-72 border bg-white rounded flex justify-center items-center relative domain2 overflow-hidden'>
                        <img src={innovation} className='h-44' />
                        <div className="absolute inset-0 bg-black opacity-0 text-2xl transition-opacity duration-300 flex justify-center items-center hover:opacity-75">
                            <strong><h1 className='text-[2rem] text-wrap'>Open Innovation</h1></strong>
                        </div>
                    </div>
                    <div className='w-72 h-72 border bg-white rounded flex justify-center items-center relative domain3 overflow-hidden'>
                        <img src={web} className='h-44' />
                        <div className="absolute inset-0 bg-black opacity-0 text-2xl transition-opacity duration-300 flex justify-center items-center hover:opacity-75">
                            <strong><h1 className='text-[2rem] text-wrap'>Web</h1></strong>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Domain;
