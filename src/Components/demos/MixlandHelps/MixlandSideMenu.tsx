import Link from 'next/link';
import React from 'react';

const MixlandSideMenu = () => {
    return (
        <div className=''>
            <ul>
                <li className='font-semibold pt-[15px] pb-[14px] pl-[25px] mb-[10px] border border-[#282A37] rounded-[10px] gradient-hover'><Link  href="/">Blog Headlines</Link></li>
                <li className='font-semibold pt-[15px] pb-[14px] pl-[25px] mb-[10px] border border-[#282A37] rounded-[10px] gradient-hover'><Link href="/">Blog Intros</Link></li>
                <li className='font-semibold pt-[15px] pb-[14px] pl-[25px] mb-[10px] border border-[#282A37] rounded-[10px] gradient-hover'><Link href="/">Content Rewriter</Link></li>
                <li className='font-semibold pt-[15px] pb-[14px] pl-[25px] mb-[10px] border border-[#282A37] rounded-[10px] gradient-hover'><Link href="/">Facebook Ads</Link></li>
                <li className='font-semibold pt-[15px] pb-[14px] pl-[25px] mb-[10px] border border-[#282A37] rounded-[10px] gradient-hover'><Link href="/">Product Description</Link></li>
                <li className='font-semibold pt-[15px] pb-[14px] pl-[25px] mb-[10px] border border-[#282A37] rounded-[10px] gradient-hover'><Link href="/">PAS Copywriting Formula</Link></li>
            </ul>
        </div>
    );
};

export default MixlandSideMenu;