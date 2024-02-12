import React from 'react';
import './Prize.css'
import trophy1 from '../assests/trophy1.png'
import trophy2 from '../assests/trophy2.png'
import trophy3 from '../assests/trophy3.png'

const Prize = () => {
    return (
        <section id='prizes' className="p-8 rounded-lg text-white">
            <h1 className='font-semibold text-4xl text-center md:text-8xl tracking-widest text-primary-strokes pb-40' data-content="Prizes & Domains">Prizes & Domains</h1>
            <div className='flex justify-center sm:flex-row'>
                <div className='flex flex-col gap-20 sm:flex-row'>
                    <div className='w-80 h-80 order-2 md:-order-none lg:-mr-10 card1 mt-12'>
                        <img src={trophy2} alt='trophy' className='h-32 absolute top-[-45px] left-[120px]' />
                        <h1 className='text-style mt-8'>30K</h1>
                        <div className="flex flex-col items-center justify-center">
                        <h4 className='mt-4 mb-2 text-center text-yellow-400'>Overall Second Prize</h4>
                            <ul className="list-none p-5">
                               certificate and goodies
                            </ul>
                        </div>
                    </div>
                    <div className='w-80 h-80 order-1 md:-order-none card2 z-10'>
                        <img src={trophy1} alt='trophy' className='h-44 absolute top-[-85px] left-[110px]' />
                        <h1 className='text-style mt-8'>50K</h1>
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center font-semibold text-xl'>Overall First Prize</h4>
                            <ul className="list-none p-5">
                            certificate and goodies

                            </ul>
                        </div>
                    </div>
                    <div className='w-80 h-80 order-3 md:-order-none lg:-ml-10 card3 mt-12'>
                        <img src={trophy3} alt='trophy' className='h-32 absolute top-[-45px] left-[110px]' />
                        <h1 className='text-style mt-8'>20K</h1>
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center text-red-400'>Overall Third Prize</h4>
                            <ul className="list-none p-5">
                            certificate and goodies

                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* <h3             className="text-white  text-2xl text-center md:text-4xl tracking-widest"
> Revealing Soon</h3> */}
        </section>

    );
};

export default Prize;
