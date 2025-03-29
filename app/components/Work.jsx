import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

export default function Work() {
  return (
    <>
      <div id="work" className="w-full  px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
        <h3 className="text-center text-5xl font-ovo">My Leatest Work</h3>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          I have a strong background in HTML, CSS, JavaScript and React.js. I am
          always eager to learn and improve my skills.
        </p>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {
                workData.map((project,index)=>(
                    <div key={index} style={{backgroundImage:`url('${project.bgImage}')`}} className='aspect-square bg-no-repeat bg-cover rounded-lg relative cursor-pointer group'  >
                        <div className='bg-white  w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 flex items-center justify-between duration-300 group-hover:bottom-7'>
                            <div>
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                            <div className='flex items-center justify-center aspect-square w-9 border border-black rounded-full shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <Image src={assets.send_icon} alt="" className='w-5'/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 py-3 px-10 mx-auto my-20 rounded-full duration-400 cursor-pointer hover:bg-[#fcf4ff] '>Show more <Image src={assets.right_arrow_bold} alt='' className='w-4'/></a>
      </div>
    </>
  );
}
