import { Outfit } from 'next/font/google';
import React from 'react';
import darrell from '../../../../public/img/customersSayImg/darrell.png';
import leslie from '../../../../public/img/customersSayImg/leslie.png';
import jenny from '../../../../public/img/customersSayImg/jenny.png';
import kristin from '../../../../public/img/customersSayImg/kristin.png';
import guy from '../../../../public/img/customersSayImg/guy.png';
import marvin from '../../../../public/img/customersSayImg/marvin.png';
import annette from '../../../../public/img/customersSayImg/annette.png';
import floyd from '../../../../public/img/customersSayImg/floyd.png';
import ReviewCard from './ReviewCard';
import Image from 'next/image';
import { AiOutlineTwitter } from 'react-icons/ai';


const outfit = Outfit({ subsets: ['latin'] })

const CustomersSay = () => {

    const customersInfo = [
        {
            name: "Darrell Steward",
            userName: "@darrels",
            photo: darrell,
            review: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
            hashTag: "#another"
        },
        {
            name: "Guy Hawkins",
            userName: "@jennywilson",
            photo: guy,
            review: "This is a top quality product. No need to think twice before making it live on web.",
            hashTag: "#make_it_fast"
        },
        {
            name: "Leslie Alexander",
            userName: "@lesslie",
            photo: leslie,
            review: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
            hashTag: "#postcrafts"
        },
        {
            name: "Marvin McKinney",
            userName: "@jennywilson",
            photo: marvin,
            review: "With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.",
            hashTag: "#dev #tools"
        },

        {
            name: "Jenny Wilson",
            userName: "@jennywilson",
            photo: jenny,
            review: "This is a top quality product. No need to think twice before making it live on web.",
            hashTag: "#make_it_fast"
        },
        {
            name: "Annette Black",
            userName: "@jennywilson",
            photo: annette,
            review: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
            hashTag: "#another"
        },
        {
            name: "Kristin Watson",
            userName: "@kristinwatson2",
            photo: kristin,
            review: "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
            hashTag: "#postcrafts"
        },
        {
            name: "Floyd Miles",
            userName: "@jennywilson",
            photo: floyd,
            review: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
            hashTag: "#postcrafts"
        }
    ]

    return (
        <div className='customer-say-bg w-full text-center'>
            <h1 className={`${outfit.className} text-[42px] leading-[48px] font-semibold mt-[88px]`}>What our customers say</h1>
            <p className='w-[461px] mx-auto text-lg leading-7 text-[#FAFAFA]/[0.7] mt-[19px]'>Read why thousands of marketers, writers, and entrepreneurs love us so much.</p>
            <div className='lg:w-[1296px] mx-auto mt-[81px] grid grid-cols-1 lg:grid-cols-4 gap-x-6'>
                <div className='h-fit'>
                    {
                        customersInfo.slice(0, 2).map((info, i) => <ReviewCard key={i} info={info} />)
                    }
                </div>
                <div className='h-fit'>
                    {
                        customersInfo.slice(2, 4).map((info, i) => <ReviewCard key={i} info={info} />)
                    }
                </div>
                <div className='h-fit'>
                    {
                        customersInfo.slice(4, 6).map((info, i) => <ReviewCard key={i} info={info} />)
                    }
                </div>
                <div className='h-fit'>
                    {
                        customersInfo.slice(6, 8).map((info, i) => <>
                            <div className='pl-[22px] pr-[12px] py-[25px] bg-[#FFFFFF] rounded-[5px] text-[#12141D] mb-[27px]'>
                                <div className='flex items-start justify-between'>
                                    <div className='flex items-center gap-[11px]'>
                                        <Image src={info.photo} alt='' />
                                        <div className='text-start'>
                                            <h5 className='font-semibold'>{info.name}</h5>
                                            <small>{info.userName}</small>
                                        </div>
                                    </div>
                                    <p className='text-[17.53px] text-[#0EA5E9] pr-[9px]'><AiOutlineTwitter></AiOutlineTwitter></p>
                                </div>
                                <div className='text-start mt-[25px]'>
                                    <p className='text-base leading-6'>{info.review}</p>
                                    <p className='text-[#0EA5E9]'>{info.hashTag}</p>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomersSay;