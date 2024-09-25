import React from 'react'
import profile from '../assets/profile.png'
import right_arrow_white from '../assets/right-arrow-white.png'
import download_icon from '../assets/download-icon.png'
import { Type } from './Type'

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center">
    <img src={profile} alt="" className="w-32 rounded-full"/>
    <h3 data-aos="fade-right" className="flex items-end gap-2 mb-3 text-xl md:text-2xl font-Ovo animate-fadeIn">
        Hi! I'm Amulya</h3>
        <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-Ovo"> <Type/></h1>
    {/* <h1 className="text-2xl sm:text-6xl lg:text-[56px] font-Ovo">Frontend Web Developer|React Developer.</h1> */}
    <p data-aos="fade-right" className="max-w-2xl mx-auto font-Ovo">Passionate and creative Frontend Web Developer having proficiency in React. Attired with a variety of tools & technologies and keen to learn new one</p>
    <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
        <a href="#contact"
        className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
        contact me <img src={right_arrow_white} alt="" className="w-4"/></a>

        <a href="https://drive.google.com/file/d/1jK6K4gkjcMUKMmO10ga3hHMxXEI8E4WW/view?usp=drive_link" download
        className="flex items-center gap-2 px-10 py-3 bg-white border border-gray-500 rounded-full dark:text-black">
        my resume <img src={download_icon} alt="" className="w-4"/></a>
    </div>
</div>
  )
}

export default Header
