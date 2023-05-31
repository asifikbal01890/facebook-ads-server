import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';

interface CustomerInfo {
    name: string;
    userName: string;
    photo: StaticImageData;
    review: string;
    hashTag: string;
  }

interface ChildComponentProps {
    info: CustomerInfo;
  }

const ReviewCard:  React.FC<ChildComponentProps> = ({info}) => {
    return (
        <div className='pl-[20px] pr-[28px] py-[25px] bg-[#FFFFFF] rounded-[5px] text-[#12141D] mb-[27px]'>
            <div className='flex items-start justify-between'>
                <div className='flex items-center gap-[11px]'>
                    <Image src={info.photo} alt='' />
                    <div className='text-start'>
                        <h5 className='font-semibold'>{info.name}</h5>
                        <small>{info.userName}</small>
                    </div>
                </div>
                <p className='text-[17.53px] text-[#0EA5E9]'><AiOutlineTwitter></AiOutlineTwitter></p>
            </div>
            <div className='text-start mt-[25px]'>
                <p className='text-base leading-6'>{info.review}</p>
                <p className='text-[#0EA5E9]'>{info.hashTag}</p>
            </div>
        </div>
    );
};

export default ReviewCard;