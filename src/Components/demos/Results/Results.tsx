import React from 'react';
import imgOne from '../../../../public/img/resultsImg/imgOne.png';
import imgOneThird from '../../../../public/img/resultsImg/imgOneThird.png';
import imgTwo from '../../../../public/img/resultsImg/ImgTwo.png';
import Image from 'next/image';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] })

const Results = () => {
    return (
        <div className=' mt-12 lg:mt-[171.49px] lg:w-[1192px] mx-5 xl:mx-auto text-center lg:text-start'>
            <div className='lg:flex items-center justify-between lg:w-[1121px]'>
                <div className=' relative w-full'>
                    <Image src={imgOne} alt='' />
                    <Image className='absolute top-[241px] left-[250px] hidden lg:block' src={imgOneThird} alt='' />
                </div>
                <div className='max-w-[497px] mt-5 lg:mt-0'>
                    <h1 className={`${outfit.className} font-semibold text-2xl lg:text-[42px] lg:leading-[48px]`}>Create content efficiently and quickly with great AI writing tools</h1>
                    <p className='text-[#FAFAFA]/[0.7] text-lg mt-[31px]'>150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc.</p>
                    <button className='gradient-btn font-semibold py-[18px] px-[20.5px] mt-[42px]'>Start 14 Days Free Trial</button>
                </div>
            </div>
            <div className='lg:flex items-center justify-between mt-12 lg:mt-36'>
                <div className='max-w-[453px]'>
                    <h1 className={`${outfit.className} font-semibold text-2xl lg:text-[42px] lg:leading-[48px]`}>Write what you want to convey through clear, & authentic writing</h1>
                    <p className='text-[#FAFAFA]/[0.7] text-lg mt-[31px]'>AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized.</p>
                    <button className='gradient-btn font-semibold py-[18px] px-[20.5px] mt-[42px]'>Start 14 Days Free Trial</button>
                </div>
                <div className=' mt-12 lg:mt-0'>
                    <Image src={imgTwo} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Results;