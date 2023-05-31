import { Outfit } from 'next/font/google';
import React from 'react';


const outfit = Outfit({ subsets: ['latin'] })

const Plans = () => {

    const plansInfo = [
        {
            planName: "Starter",
            price: "29",
            describe: "This package is suitable for teams 1-15 people.",
            featureOne: "10 GB Dedicated Hosting Free",
            featureTwo: "Best for Developers, Freelancers",
            featureThree: "1 Year Support"
        },
        {
            planName: "Basic",
            price: "79",
            describe: "This package is suitable for teams 1-50 people.",
            featureOne: "15 GB Dedicated Hosting Free",
            featureTwo: "Best for Developers, Freelancers",
            featureThree: "5 Year Support",
            featureFour: "Free Custom Domain",
            featureFive: "Basic Statistics",
        },
        {
            planName: "Basic",
            price: "129",
            describe: "This package is suitable for teams 1-100 people.",
            featureOne: "20 GB Dedicated Hosting Free",
            featureTwo: "Best for Developers, Freelancers",
            featureThree: "Unlimited Support",
            featureFour: "Free Custom Domain",
            featureFive: "Full Statistics",
        }
    ]


    return (
        <div className='mt-[88px] text-center'>
            <h1 className={`${outfit.className} font-semibold text-2xl lg:text-[42px] lg:leading-[48px]`}>Make the wise decision for <br /> your business</h1>
            <p className='text-lg text-[#FAFAFA]/[0.7] mt-5'>Choose from our affordable 3 packages</p>
            <div className='lg:flex items-center gap-6 mt-[67px] text-start'>
                {
                    plansInfo.map(info => <>
                        <div className='bg-[#282A37] pl-[30px] py-[30px] pr-[50px] rounded-[15px] lg:w-[330px] mt-5 lg:mt-0'>
                            <h5>{info.planName} Plan</h5>
                            <h5 className={`${outfit.className} text-lg leading-[23px] mt-8`}><span className='font-semibold text-[42px] leading-[48px]'>${info.price}</span>/month</h5>
                            <p className='text-sm text-[#FAFAFA]/[0.7] mt-[17px]'>{info.describe}</p>
                            <h5 className='font-bold leading-7 mt-[42px]'>What’s included:</h5>
                            <div className='mt-[15px] h-[170px]'>
                                <p className='font-medium leading-[34px] text-[#FAFAFA]/[0.7]'>{info?.featureOne}</p>
                                <p className='font-medium leading-[34px] text-[#FAFAFA]/[0.7]'>{info?.featureTwo}</p>
                                <p className='font-medium leading-[34px] text-[#FAFAFA]/[0.7]'>{info?.featureThree}</p>
                                <p className='font-medium leading-[34px] text-[#FAFAFA]/[0.7]'>{info?.featureFour}</p>
                                <p className='font-medium leading-[34px] text-[#FAFAFA]/[0.7]'>{info?.featureFive}</p>
                            </div>
                            <button className='gradient-hover py-[13.5px] border border-[#12141D] hover:border-none rounded-[10px] font-bold leading-7 mt-[30px] w-full'>Get Started</button>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Plans;