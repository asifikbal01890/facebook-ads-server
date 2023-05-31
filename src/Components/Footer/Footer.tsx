import { Outfit } from 'next/font/google';
import Link from 'next/link';
import React from 'react';


const outfit = Outfit({ subsets: ['latin'] })

const Footer = () => {
    return (
        <footer className='lg:mt-[90px]'>
            <section className='lg:flex items-center justify-between lg:w-[1295px] mx-5 lg:mx-auto gradient-bg pl-[48px] pr-[42px] pt-[29px] pb-[34px] rounded-[10px]'>
                <h1 className={`${outfit.className} font-semibold text-2xl lg:text-[32px] lg:leading-[42px] lg:w-[530px]`}>It will help you improve your writing & bring ideas more c learly.</h1>
                <button className='font-semibold text-[#12141D] hover:text-white py-[18px] rounded-[5px] bg-white hover:bg-[#282A37] active:bg-[#12141D] mt-5 lg:mt-0 w-full lg:w-[220px]'>Start 14 Days Free Trial</button>
            </section>
            <div className=' pt-12 lg:pt-[93px] pb-[85px] lg:w-[1258px] lg:mx-auto mx-5'>
                <div className='lg:flex items-center justify-between'>
                    <section>
                        <h3 className='font-semibold leading-[28px]'>Company</h3>
                        <div className='mt-5'>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">About</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Feature</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Works</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Career</Link></p>
                        </div>
                    </section>
                    <section className='mt-8 lg:mt-0'>
                        <h3 className='font-semibold leading-[28px]'>Help</h3>
                        <div className='mt-5'>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Customer Support</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Delivery Details</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Terms & Conditions</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Privacy Policy</Link></p>
                        </div>
                    </section>
                    <section className='mt-8 lg:mt-0'>
                        <h3 className='font-semibold leading-[28px]'>Resources</h3>
                        <div className='mt-5'>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Free eBooks</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Development Tutorial</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">How to - Blog</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Youtube Playlist</Link></p>
                        </div>
                    </section>
                    <section className='mt-8 lg:mt-0'>
                        <h3 className='font-semibold leading-[28px]'>Links</h3>
                        <div className='mt-5'>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Free eBooks</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Development Tutorial</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">How to - Blog</Link></p>
                            <p><Link className='text-sm leading-10 font-light hover:underline' href="/">Youtube Playlist</Link></p>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    );
};

export default Footer;