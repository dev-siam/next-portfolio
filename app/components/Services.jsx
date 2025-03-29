import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

export default function Services() {
  return (
    <>
      <div id="services" className="w-full  px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
        <h3 className="text-center text-5xl font-ovo">My Services</h3>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          I have a strong background in HTML, CSS, JavaScript and React.js. I am
          always eager to learn and improve my skills. I am a frontend developer
          from Dhaka, Bangladesh with 5 years of experience in multiple
          companies like Microsoft, Tesla and Apple.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {
                serviceData.map(({icon, title, description, link}, index)=>(
                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:[box-shadow:4px_4px_0_#000] duration-400 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1'>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read More <Image src={assets.right_arrow} alt='' className='w-4'/></a>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  );
}
