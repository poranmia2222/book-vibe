import Image from 'next/image';
import React from 'react';
import image from '@/assets/hero-img.png'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex gap-4 justify-center items-center p-12 py-20 my-6 bg-[#13131310] rounded-4xl'>
            <div className='space-y-14'>
                <h1 className='text-8xl font-bold'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-2xl py-7 px-6 rounded-lg text-white font-medium'>View The List</button>
            </div>
            <div>
                <Image width={600} src={image} alt=''></Image>
            </div>
            </div>
        </div>
    );
};

export default Banner;