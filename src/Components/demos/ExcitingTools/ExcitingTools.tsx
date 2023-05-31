import { Outfit } from 'next/font/google';
import React from 'react';
import Headlines from '../../../../public/img/toolsImg/headlines.png';
import intros from '../../../../public/img/toolsImg/intros.png';
import outline from '../../../../public/img/toolsImg/outline.png';
import content from '../../../../public/img/toolsImg/content.png';
import Image from 'next/image';


const outfit = Outfit({ subsets: ['latin'] })

const ExcitingTools = () => {

    const toolsInfo = [
        {
            title: "Blog Headlines",
            describe: "Write a better blog title with our A.I tool.",
            logo: Headlines
        },
        {
            title: "Blog Intros",
            describe: "Generate a paragraph of blog content using Blog Intros tool",
            logo: intros
        },
        {
            title: "Blog Outline",
            describe: "Need an attention-grabbing headline for your article?",
            logo: outline
        },
        {
            title: "Blog Conclusions",
            describe: "Write a better conclusions with AI writing tool.",
            logo: Headlines
        },
        {
            title: "Content Rewriter",
            describe: "Get AI writer to rewrite your sentence in a different way.",
            logo: content
        },
        {
            title: "Product Description",
            describe: "Need an attention-grabbing headline for your article?",
            logo: intros
        },
        {
            title: "PAS Copywriting Formula",
            describe: "Get AI writer to rewrite your sentence in a different way.",
            logo: outline
        },
        {
            title: "Company About Us",
            describe: "Write a better blog title with our AI tool.",
            logo: Headlines
        }
    ]


    return (
        <div className='mt-12 lg:mt-[153px]'>
            <div className='text-center'>
                <h1 className={`${outfit.className} text-2xl lg:text-[42px] lg:leading-[48px] font-semibold`}>54 exciting writing tools</h1>
                <p className='mt-[26px] text-[#FAFAFA]/[0.7] text-lg max-w-[524px] mx-5 lg:mx-auto'>AI engines take information from various sources and read them like a human would do.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[26px] lg:w-[1294px] mx-5 lg:mx-auto mt-6 lg:mt-[61px]'>
                {
                    toolsInfo.map((info, i) =>
                        <div key={i}>
                            <div className='flex items-start gap-[17px] bg-[#282A37] rounded-[10px] w-full lg:w-[304px] py-[21px] px-[22px]'>
                                <Image src={info.logo} alt='' />
                                <div>
                                    <h4 className='font-semibold leading-6'>{info.title}</h4>
                                    <p className='text-sm text-[#FFFFFF]/[0.7]'>{info.describe}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='text-center mt-8 lg:mt-[68px]'>
                <button className='gradient-outline-btn py-[6.5px] px-[38.5px]'>See all 54 available tools</button>
            </div>
            <p className='h-[1px] border border-[#252835] w-screen mt-[100px]'></p>
        </div>
    );
};

export default ExcitingTools;