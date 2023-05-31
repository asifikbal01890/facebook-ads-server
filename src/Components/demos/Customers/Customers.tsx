import React from 'react';
import { Outfit } from 'next/font/google'
import waverio from "../../../../public/img/customersImg/waverio.png";
import stone from "../../../../public/img/customersImg/stone.png";
import martino from "../../../../public/img/customersImg/martino.png";
import virogan from "../../../../public/img/customersImg/Virogan.png";
import vertex from "../../../../public/img/customersImg/vertex.png";
import aromix from "../../../../public/img/customersImg/aromix.png";
import fireli from "../../../../public/img/customersImg/fireli.png";
import natroma from "../../../../public/img/customersImg/natroma.png";
import Image from 'next/image';


const outfit = Outfit({ subsets: ['latin'] })

const Customers = () => {

    const images = [
        {
            logo: waverio
        },
        {
            logo: stone
        },
        {
            logo: martino
        },
        {
            logo: virogan
        },
        {
            logo: vertex
        },
        {
            logo: aromix
        },
        {
            logo: fireli
        },
        {
            logo: natroma
        }
    ]
    return (
        <div className='mt-[125px]'>
            <p className='h-[1px] border border-[#252835] w-screen'></p>
            <div className='pt-[104px] max-w-[940.22px] mx-auto text-center'>
                <h2 className={`${outfit.className} font-medium text-2xl leading-[34px]`}>Trusted by nearly 5000+ paying customers</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[77.18px] gap-y-[50.98px] mx-5'>
                    {
                        images.map((image, i) =>
                            <div key={i}>
                            <div className='flex justify-center'>
                            <Image className='brightness-50' src={image.logo} alt=''/>
                            </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Customers;