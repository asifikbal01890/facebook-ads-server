import MixlandSideMenu from '@/Components/demos/MixlandHelps/MixlandSideMenu';
import { Outfit } from 'next/font/google';
import React, { ReactNode } from 'react';


const outfit = Outfit({ subsets: ['latin'] })

export default function MixlandLaouts({ children }: {children: React.ReactNode;}) {
    return (
      <section className='mb-[126px]'>
        <div>
            <h1 className={`${outfit.className} font-semibold text-2xl lg:text-[42px] lg:leading-[48px] text-center mt-[88px]`}>Mixland helps you <br/> build beautiful website</h1>
        </div>
          <div className='lg:flex items-start gap-[49px] mt-[83px]'>
            <nav className='lg:w-[302px]'>
                <MixlandSideMenu></MixlandSideMenu>
            </nav>
            <main className='lg:w-[734px] bg-[#282A37] rounded-[10px]'>{children}</main>
        </div>
      </section>
    );
}