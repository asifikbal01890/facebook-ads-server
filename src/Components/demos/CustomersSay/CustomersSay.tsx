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
                <div>
                    {
                        customersInfo.slice(0,2).map((info, i) => {
                            return <ReviewCard key={i} info={info} />
                        })
                    }
                </div>
                <div>
                    {
                        customersInfo.slice(2,4).map((info, i) => {
                            return <ReviewCard key={i} info={info} />
                        })
                    }
                </div>
                <div>
                    {
                        customersInfo.slice(4,6).map((info, i) => {
                            return <ReviewCard key={i} info={info} />
                        })
                    }
                </div>
                <div>
                    {
                        customersInfo.slice(6,8).map((info, i) => {
                            return <ReviewCard key={i} info={info} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomersSay;