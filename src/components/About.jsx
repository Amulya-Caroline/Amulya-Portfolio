import React from 'react'
import trial from '../assets/trial.png'
import circular_text from '../assets/circular-text.png'
import dev_icon from '../assets/dev-icon.png'
import code_icon from '../assets/code-icon.png'
import code_icon_dark from '../assets/code-icon-dark.png'
import edu_icon from '../assets/edu-icon.png'
import edu_icon_dark from '../assets/edu-icon-dark.png'
import project_icon from '../assets/project-icon.png'
import project_icon_dark from '../assets/project-icon-dark.png'
import vscode from '../assets/vscode.png'
import Sublime from '../assets/Sublime.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import mongodb from '../assets/mongodb.png'



const About = () => {
  return (
    <div id="about" data-aos="fade-right" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="mb-2 text-lg text-center font-Ovo">Introduction</h4>
    <h2 className="text-5xl text-center font-Ovo">About me</h2>

    <div className="flex flex-col items-center w-full gap-20 my-20 lg:flex-row">
        <div className="relative mx-auto max-w-max">
            <img src={trial} alt="" className="w-64 h-89 sm:w-80 rounded-3xl max-w-none"/>

            <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                <img src={circular_text} alt="" className="w-full animate-spin_slow"/>
                <img src={dev_icon} alt="" className="absolute w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
            </div>
        </div>
        <div className="flex-1">
            <p className="max-w-2xl mb-4 font-Ovo">Hi everyone, my name is Amulya, and I am from Chamarajanagar, Karnataka, India. I have completed my post-graduation with an MCA (Master of Computer Applications) from the Maharaja Institute of Technology, Mysore (MITM).</p>
            {/* <h4 className="mb-10 font-Ovo">Terms That can describe me apart form Coding :</h4> */}

            <ul className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50
                ">
                    <img src={code_icon} alt="" className="mt-3 w-7 dark:hidden"/>
                    <img src={code_icon_dark} alt="" className="hidden mt-3 w-7 dark:block"/>

                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Languages</h3>
                    <p className="text-sm text-gray-600 dark:text-white/80">HTML, CSS,Tailwind CSS,JavaScript React Js, Next Js </p>
                </li>
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">

                    <img src={edu_icon} alt="" className="mt-3 w-7 dark:hidden"/>
                    <img src={edu_icon_dark} alt="" className="hidden mt-3 w-7 dark:block"/>

                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Education</h3>
                    <p className="text-sm text-gray-600 dark:text-white/80">Master of Computer Applications </p>
                </li>
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">

                    <img src={project_icon} alt="" className="mt-3 w-7 dark:hidden"/>
                    <img src={project_icon_dark} alt="" className="hidden mt-3 w-7 dark:block"/>


                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Projects</h3>
                    <p className="text-sm text-gray-600 dark:text-white/80">Built more than 5 projects </p>
                </li>
            </ul>
            <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

            <ul className="flex items-center gap-3 sm:gap-5">
                <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1">
                    <img src={vscode} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1">
                    <img src={Sublime} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1">
                    <img src={mongodb} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1">
                    <img src={figma} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1">
                    <img src={git} alt="" className="w-5 sm:w-7"/>
                </li>
            </ul>
        </div>
    </div>
 </div>
  )
}

export default About
