'use client'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from './components/About';
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMood, setIsDarkMood]= useState(true)


  
  useEffect(() => {
    if(localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark')).matches) {
      setIsDarkMood(true)
    } else {
      setIsDarkMood(false)
    }
  },[])

  useEffect(() => {
    if(isDarkMood){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = ''
    }
  },[isDarkMood])


  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}
