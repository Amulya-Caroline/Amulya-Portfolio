import React from 'react'
import logoo from '../assets/logoo.png'
import logo_darkk from '../assets/logo_darkk.png'
import mail_icon from '../assets/mail_icon.png'
import mail_icon_dark from '../assets/mail_icon_dark.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

// import PhoneIcon from "@material-ui/icons/Phone";

const Footer = () => {
    return (
        <div data-aos="fade-right" className="mt-20">
            <div className="text-center">
                <img src={logoo} alt="" className="mx-auto mb-2 w-36 dark:hidden" />
                <img src={logo_darkk} alt="" className="hidden mx-auto mb-2 w-36 dark:block" />


                <div className="flex items-center gap-2 mx-auto w-max">
                    <img src={mail_icon} alt="" className="w-6 dark:hidden" />
                    <img src={mail_icon_dark} alt="" className="hidden w-6 dark:block" />
                    amulyaps2000@gmail.com
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>© 2024 Amulya. All rights reserved.</p>
                {/* <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">

                    <li >
                        <a
                            target="_blank"
                            href="https://instagram.com/greatstackdev"
                            // className="duration-500 hover:text-pink-500 hover:underline group-hover:bottom-7"
                        >
                            <GitHubIcon className="duration-500 hover:text-pink-500 hover:underline group-hover:bottom-7"/>
                        </a>
                    </li>
                    <li><a target='_blank' href="https://instagram.com/greatstackdev"><LinkedInIcon />
                    </a></li>
                    <li><a target='_blank' href="https://instagram.com/greatstackdev"><PhoneIcon /></a></li>
                </ul> */}
                <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
  <li>
    <a
      target="_blank"
      href="https://github.com/Amulya-Caroline"
      className="py-2 mx-1 transition duration-500 ease-in-out hover:text-[#b820e6] hover:border-b-2 hover:border-[#b820e6]">

      <GitHubIcon className="duration-500" />
    </a>
  </li>
  <li>
    <a
      target="_blank"
      href="https://linkedin.com/in/amulya-54b38a220"
      className="py-2 mx-1 transition duration-500 ease-in-out hover:text-[#b820e6] hover:border-b-2 hover:border-[#b820e6]">

      <LinkedInIcon className="duration-500" />
    </a>
  </li>
  <li>
    <a
      target="_blank"
     href="tel:+919972934208"
      className="relative py-2 mx-1 transition: width 0.2s ease-in hover:text-[#b820e6] hover:border-b-2 hover:border-[#b820e6]">

      <PhoneIcon className="duration-500" />
    </a>
  </li>
</ul>

            </div>
        </div>
    )
}

export default Footer
