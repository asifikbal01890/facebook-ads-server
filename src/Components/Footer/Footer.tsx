import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='pt-[93px] pb-[85px] lg:w-[1258px] mx-5 lg:mx-auto'>
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
    );
};

export default Footer;