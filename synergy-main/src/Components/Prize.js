import React from 'react';
import './Prize.css'
import trophy1 from '../assests/trophy1.png'
import trophy2 from '../assests/trophy2.png'
import trophy3 from '../assests/trophy3.png'

const Prize = () => {
    return (
        <section id='prizes' className="p-8 rounded-lg text-white">
            <h1 className='font-semibold text-4xl text-center md:text-8xl tracking-widest text-primary-strokes pb-40' data-content="Prizes & Domains">Prizes & Domains</h1>
            {/* <div className='flex justify-center sm:flex-row'>
                <div className='flex sm:flex-row'>
                    <div className='w-80 h-80  lg:-mr-10 card1 mt-12'>
                        <img src={trophy2} alt='trophy' className='h-32 absolute top-[-45px] left-[120px]' />
                        <h1 className='text-style mt-8'>60K</h1>
                        <div className="flex flex-col items-center justify-center">
                        <h4 className='mt-4 mb-2 text-center'>Overall Second Prize</h4>
                            <ul className="list-none p-5">
                                <li className='mb-2'>Netflix Subscription</li>
                                <li className='mb-2'>Netflix Subscription</li>
                                <li className='mb-2'>Netflix Subscription</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-80 h-96 card2 z-10'>
                        <img src={trophy1} alt='trophy' className='h-44 absolute top-[-85px] left-[110px]' />
                        <h1 className='text-style mt-8'>60K</h1>
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center'>Overall First Prize</h4>
                            <ul className="list-none p-5">
                                <li className='mb-2'>Netflix Subscription</li>
                                <li className='mb-2'>Netflix Subscription</li>
                                <li className='mb-2'>Netflix Subscription</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-80 h-80  lg:-ml-10 card3 mt-12'>
                        <img src={trophy3} alt='trophy' className='h-32 absolute top-[-45px] left-[100px]' />
                        <h1 className='text-style mt-8'>60K</h1>
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center'>Overall Third Prize</h4>
                            <ul className="list-none p-5">
                                <li className='mb-2'>Netflix Subscription</li>
                                <li className='mb-2'>Netflix Subscription</li>
                                <li className='mb-2'>Netflix Subscription</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div> */}
            <h3             className="text-white  text-2xl text-center md:text-4xl tracking-widest"
> Revealing Soon</h3>
        </section>

    );
};

export default Prize;
