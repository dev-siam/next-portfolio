import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

export default function About() {
  return (
    <>
      <div id="about" className="w-full  px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
        <h3 className="text-center text-5xl font-ovo">About Me</h3>
        <div className='flex   flex-col lg:flex-row w-ful items-center justify-center gap-20 my-20 '>
            <div className='w-64  sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='' className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1  max-w-fit'>
                <p className='mb-10 max-w-2xl font-ovo'>I have a strong background in HTML, CSS, JavaScript and React.js. I am always eager to learn and improve my skills.</p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title,description},index) =>(
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 transition duration-300 hover:[box-shadow:4px_4px_0_#000]'>
                            <Image src={icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-600'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='my-6 text-gray-700 font-ovo'>Tool I use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                  {
                    toolsData.map((tool,index)=> (
                      <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-300 hover:[box-shadow:4px_4px_0_#000]'>
                        <Image src={tool} alt={tool} className='w-5 sm:w-7' />                        
                      </li>
                    ))
                  }
                </ul>
            </div>
        </div>
      </div>
    </>
  );
}
