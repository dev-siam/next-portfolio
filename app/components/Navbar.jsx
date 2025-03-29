import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const sideMenuRef = useRef()
    const [isScroll, setIsScroll] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0);


    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }
    // for dynamic navbar
    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    })
    // for side menu
     useEffect(() => {
       window.addEventListener("scroll", closeMenu);
       return () => {
         window.removeEventListener("scroll", closeMenu);
       };
     }, []);

  return (
    <>
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]"> 
            <Image src={assets.header_bg_color} className="w-full"  alt="" />
        </div>
        <nav className={`${isScroll ? 'bg-white/50 backdrop-blur-lg shadow-sm':''} w-full fixed py-2 px-5 lg:px-8 xl:px-[8%] flex justify-between items-center z-50`}>
            <a href="#top" className="">
                <Image src={assets.logo} className="w-28 cursor-pointer mr-14" alt="Logo"/>
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 py-3 px-6 lg:px-12 rounded-full ${isScroll? "":"bg-white/40 shadow-sm"}  `}>
                <li><a className="font-ovo" href="#top">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="flex items-center gap-4">
                {/* <button>
                    <Image src={assets.moon_icon} className="w-6 cursor-pointer" alt=""/>
                </button> */}
                <a href="#contact" className="hidden md:flex items-center gap-3 px-5 lg:px-10 py-2 border border-gray-500 rounded-full ">
                    Contact <Image src={assets.arrow_icon} className="w-3" alt="Arrow"/>
                </a>
                <button onClick={openMenu} className="block md:hidden">
                    <Image src={assets.menu_black} className="w-6 cursor-pointer" alt=""/>
                </button>
            </div>

            {/* {mobile menu} */}
            <ul ref={sideMenuRef} className="flex md:hidden h-screen flex-col items-end gap-4 px-10 py-20 fixed top-0 bottom-0 -right-64 w-64 z-50 bg-rose-50 trasition duration-500">
                <div className="absolute top-6 right-10" onClick={closeMenu}>
                    <Image src={assets.close_black} alt="" className="w-5 cursor-pointer"/>
                </div>
                <li><a onClick={closeMenu} className="font-ovo" href="#top">Home</a></li>
                <li><a onClick={closeMenu} href="#about">About</a></li>
                <li><a onClick={closeMenu} href="#services">Services</a></li>
                <li><a onClick={closeMenu} href="#work">Work</a></li>
                <li><a onClick={closeMenu} href="#contact">Contact</a></li>
            </ul>
        </nav>
    </>
  );
}
