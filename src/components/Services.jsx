import React from 'react'
import cal1 from '../assets/cal1.png'
import right_arrow from '../assets/right-arrow.png'

const Services = () => {
    return (
        <div id="services" data-aos="fade-right" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="mb-2 text-lg text-center font-Ovo">What i offer</h4>
            <h2 className="text-4xl text-center font-Ovo">My Timeline 💫</h2>
            {/* <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo">I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p> */}

            <div className="grid gap-6 my-10 grid-cols-auto">
                <div className="px-8 py-4 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <div data-aos="fade-right" className="flex items-center space-x-2">

                        <img src={cal1} alt="" className="w-4" />
                        <p className="text-sm leading-3 text-gray-600 dark:text-white/80">March 2023-Present</p></div>
                    <h3 data-aos="fade-right" className="my-4 text-lg text-gray-700 dark:text-white">DealDox Software pvt ltd.</h3>
                    <p data-aos="fade-right" className="text-sm leading-6 text-gray-600 dark:text-white/80">Successfully delivered projects showcasing expertise in React,
                        Node.js, and MongoDB, contributing to enhanced user experiences
                        and streamlined processes. Collaborated effectively within
                        cross-functional teams, ensuring timely project delivery and
                        alignment with business objectives.</p>
                    <a href="" data-aos="fade-right" className="flex items-center gap-2 mt-5 text-sm">Read more <img src={right_arrow} alt="" className="w-4" /></a>
                </div>
                <div className= "px-8 py-4 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <div data-aos="fade-right" className="flex items-center space-x-2">

                        <img src={cal1} alt="" className="w-4" />

                        <p className="text-sm leading-3 text-gray-600 dark:text-white/80">March 2022-May 2022</p></div>
                    <h3 data-aos="fade-right" className="my-4 text-lg text-gray-700 dark:text-white">Contriver</h3>
                    <p data-aos="fade-right" className="text-sm leading-6 text-gray-600 dark:text-white/80">Developed frontend websites using HTML, CSS, and JavaScript for two projects, with a strong grasp of the ecosystem. Gained 3 months of corporate experience, mastering solution implementation and corporate etiquette in dynamic environments.</p>
                    <a href="" data-aos="fade-right" className="flex items-center gap-2 mt-5 text-sm">Read more <img src={right_arrow} alt="" className="w-4" /></a>
                </div>
                <div className="px-8 py-4 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <div data-aos="fade-right" className="flex items-center space-x-2">

                        <img src={cal1} alt="" className="w-4" />

                        <p className="text-sm leading-3 text-gray-600 dark:text-white/80">Jan 2021-Oct 2022</p></div>
                    <h3 data-aos="fade-right" className="my-4 text-lg text-gray-700 dark:text-white">Student [MCA (Master of Computer Applications)] </h3>
                    <p data-aos="fade-right" className="text-sm leading-6 text-gray-600 dark:text-white/80">Completed studies at Maharaja Institute of Technology (MIT), Gained expertise in software development, algorithms, database management, and networking. Specialized in system design, web technologies, and cloud computing</p>
                    <a href="" data-aos="fade-right" className="flex items-center gap-2 mt-5 text-sm">Read more <img src={right_arrow} alt="" className="w-4" /></a>
                </div>
                {/* <div className="px-8 py-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={graphics_icon} alt="" className="w-10"/>
            <h3 className="my-4 text-lg text-gray-700 dark:text-white">Graphics design</h3>
            <p className="text-sm leading-5 text-gray-600 dark:text-white/80">Web development is the process of building, programming...</p>
            <a href="" className="flex items-center gap-2 mt-5 text-sm">Read more <img src={right_arrow} alt="" className="w-4"/></a>
        </div> */}
            </div>
        </div>
    )
}

export default Services
