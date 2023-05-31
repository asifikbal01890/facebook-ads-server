import Link from 'next/link';
import React from 'react';
import NavLogo from "../../../public/img/NavLogo.png";
import Image from 'next/image';

const navbar = () => {
    const menuContent = <React.Fragment>
        <li className='text-[#FAFAFA]  text-base font-medium transition-colors ease-in-out hover:text-primary duration-300'><Link href="/">Demos</Link></li>
        <li className='text-[#FAFAFA] font-[Inter] text-base font-medium transition-colors ease-in-out hover:text-primary duration-300'><Link href="/">About</Link></li>
        <li className='text-[#FAFAFA] font-[Inter] text-base font-medium transition-colors ease-in-out hover:text-primary duration-300'><Link href="/">Blog</Link></li>
        <li className='text-[#FAFAFA] font-[Inter] text-base font-medium transition-colors ease-in-out hover:text-primary duration-300'><Link href="/">Pages</Link></li>
        <li className='text-[#FAFAFA] font-[Inter] text-base font-medium transition-colors ease-in-out hover:text-primary duration-300'><Link href="/">Contact</Link></li>
    </React.Fragment>
    return (
        <div className='z-50'>
            <div className="navbar max-w-[1296px] mx-auto pt-[21px]">
                <div className="navbar-start">
                    <Image src={NavLogo} alt="" />
                    <div className="hidden lg:flex pl-[58.07px]">
                        <ul className=" flex items-center justify-between w-[446px]">
                            {menuContent}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end">
                    <button className="font-[Inter] font-medium gradient-outline-btn py-[13px] px-[20px] border border-[#FFFFFF4D] rounded-[5px] hidden lg:flex">Sign in</button>
                    <button className="font-[Inter] text-xs lg:text-base font-medium gradient-btn py-[13px] px-[20px] ml-[14px]">Get started free</button>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 items-center bg-[#12141D]">
                        {menuContent}
                        <button className="font-[Inter] font-medium gradient-outline-btn py-[13px] px-[20px] border border-[#FFFFFF4D] rounded-[5px]">Sign in</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default navbar;