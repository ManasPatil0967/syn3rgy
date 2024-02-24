import React from 'react';
import './Prize.css'
import trophy1 from '../assests/trophy1.png'
import trophy2 from '../assests/trophy2.png'
import trophy3 from '../assests/trophy3.png'
import block1 from '../assests/block1.png'
import block2 from '../assests/block2.png'

const Prize = () => {
    return (
        <section id='prizes' className="p-8 rounded-lg text-white">
            <h1 className='font-semibold text-4xl text-center md:text-8xl tracking-widest text-primary-strokes pb-40' data-content="Prizes & Domains">Prizes & Domains</h1>
            <div className='flex justify-center sm:flex-row mb-40'>
                <div className='flex flex-col gap-20 sm:flex-row'>
                    <div className='w-80 h-80 sm:mt-5 order-2 md:-order-none lg:-mr-10 card1 mt-12 transition-opacity duration-500 domainCard'>
                        <img src={trophy3} alt='trophy' className='h-32 absolute top-[-45px] left-[120px]' />
                        <h1 className='text-style mt-8'>30K</h1>
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center text-gray-400 font-semibold text-xl'>Overall Second Prize</h4>
                            <ul className="list-none p-5">
                                Certificate and Goodies!
                            </ul>
                        </div>
                    </div>
                    <div className='w-80 h-80 order-1 md:-order-none card2 z-10 domainCard'>
                        <img src={trophy1} alt='trophy' className='h-44 absolute top-[-85px] left-[120px]' />
                        <h1 className='text-style mt-8'>50K</h1>
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center text-yellow-400 font-semibold text-xl'>Overall First Prize</h4>
                            <ul className="list-none p-5">
                                Certificate and Goodies!

                            </ul>
                        </div>
                    </div>
                    <div className='w-80 h-80 order-3 md:-order-none lg:-ml-10 card3 mt-5 domainCard'>
                        <img src={trophy2} alt='trophy' className='h-32 absolute top-[-45px] left-[120px]' />
                        <h1 className='text-style mt-8'>20K</h1>
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center text-red-400 font-semibold text-xl'>Overall Third Prize</h4>
                            <ul className="list-none p-5">
                                Certificate and Goodies!

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="each_domain_prize">Each Domain winner will be Awarded a Prize of 10k</div>

            <div className='flex justify-center sm:flex-row mt-16'>
                <div className='flex flex-col gap-20 sm:flex-row'>
                    <div className='w-70 h-70 order-1 md:-order-none lg:-mr-10 domaincard1 domainCard'>
                        {/* <img src={trophy2} alt='trophy' className='h-24 absolute top-[-65px] left-[130px]' />
                        <h1 className='text-style mt-4'>10K</h1> */}
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center text-white font-semibold text-2xl'>Web/App</h4>
                            <p className='max-w-[270px] text-justify'>
                                Crafting seamless digital experiences, Web/App development merges creativity and functionality for enhanced user interactions.
                            </p>
                        </div>

                    </div>
                    <div className='w-70 h-70 order-2 md:-order-none domaincard2 domainCard z-10'>
                        {/* <img src={trophy2} alt='trophy' className='h-24 absolute top-[-65px] left-[130px]' />
                        <h1 className='text-style mt-4'>10K</h1> */}
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center text-white font-semibold text-2xl'>Web3</h4>
                            <p className='max-w-[270px] text-justify'>
                                Web3 emphasizes decentralization and blockchain technology for a more transparent and secure online environment.
                            </p>
                        </div>
                    </div>
                    <div className='w-70 h-70 order-3 md:-order-none lg:-ml-10 domaincard4 domainCard'>
                        {/* <img src={trophy2} alt='trophy' className='h-24 absolute top-[-65px] left-[130px]' />
                        <h1 className='text-style mt-4'>10K</h1> */}
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center text-white font-semibold text-2xl'>Gen AI (Generative AI)</h4>
                            <p className='max-w-[270px] text-justify    '>
                                Harness the transformative potential of Generative AI to create push the boundaries of creativity and drive unprecedented innovation across all industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center sm:flex-row mt-36'>
                <div className='flex flex-col gap-20 sm:flex-row'>
                    <div className='w-70 h-70 order-1 md:-order-none lg:-mr-10 domaincard3 domainCard'>
                        {/* <img src={trophy2} alt='trophy' className='h-24 absolute top-[-65px] left-[130px]' />
                        <h1 className='text-style mt-4'>10K</h1> */}
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center text-white font-semibold text-2xl'>ML (Machine Learning)</h4>
                            <p className='max-w-[270px] text-justify'>
                                Uncovering insights from data, ML fuels informed decision-making and drives innovation with advanced analytics and machine learning algorithms.
                            </p>
                        </div>

                    </div>
                    <div className='w-70 h-70 order-2 md:-order-none domaincard5 domainCard z-10'>
                        {/* <img src={trophy2} alt='trophy' className='h-24 absolute top-[-65px] left-[130px]' />
                        <h1 className='text-style mt-4'>10K</h1> */}
                        <div className="flex flex-col items-center justify-center">
                            <h4 className='mt-4 mb-2 text-center text-white font-semibold text-2xl'>Cybersecurity:</h4>
                            <p className='max-w-[270px] text-justify'>
                                Cybersecurity safeguards against threats, ensuring data integrity and privacy in an ever-evolving digital landscape.
                            </p>
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
