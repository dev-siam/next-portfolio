import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <>
    <div className=' w-11/12 max-w-3xl h-screen text-center mx-auto flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img}  alt='' className="w-32 rounded-full" />
        </div>
        <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo' >Hi! I'm Siam Sadhona <Image src={assets.hand_icon} alt='' className='w-6' /> </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Frontend Web Developer</h1>
        <p className='max-w-2xl mx-auto font-ovo'>I am a frontend developer from Dhaka, Bangladesh with 5 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className='flex flex-col sm:flex-row gap-4 mt-4 items-center'>
            <a href="#contact" className='flex items-center gap-2 px-10 py-3 border rounded-full border-white bg-black text-white'>Contact Me <Image src={assets.right_arrow_white}  alt='' className="w-4 " /></a>
            <a href="/sample-resume.pdf" download className='flex items-center gap-2 px-10 py-3 border rounded-full border-gray-500'>Resume  <Image src={assets.download_icon}  alt='' className="w-4" /></a>
        </div>
    </div>
    </>
  )
}
