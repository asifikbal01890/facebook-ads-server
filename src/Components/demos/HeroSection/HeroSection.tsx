import React from 'react';
import { Outfit } from 'next/font/google'
import { MdPlayCircle } from "react-icons/md";

const outfit = Outfit({ subsets: ['latin'] })

const HeroSection = () => {
    return (
        <div className='max-w-[526px] text-center'>
            <div className={`${outfit.className} text-5xl lg:text-6xl lg:leading-[66px] font-medium`}>
                <h1>Write better content for your</h1>
                <h1 className='facebook-color underline'>Facebook Ads</h1>
            </div>
            <div className='pt-[34px]'>
                <p className='text-[#FAFAFA]/[0.7]'>Artificial intelligence writting tool helps you create blogs, social media websites and much more.</p>
                <button className='gradient-btn mt-[46px] px-[20.5px] py-[18px]'>Start 14 Days Free Trial</button>
            </div>
            <div className='flex justify-center'>
                <button className='gradient-outline-btn py-[6.5px] px-[38px] mt-[13px] flex items-center gap-[11.8px]'><MdPlayCircle></MdPlayCircle>Watch A Demo</button>
            </div>
        </div>
    );
};

export default HeroSection;