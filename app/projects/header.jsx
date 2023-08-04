import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
const Header = () => {
    return (
        <header className='py-2  top-0 w-full shadow'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href="/">
                        <img src="/logo-2.png" alt="" width={125} />
                    </a>
                    <div>
                        <h1>All Projects</h1>
                    </div>
                    <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                        <span className='text-gradient btn-link'>Contact Me</span>
                        <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href="https://www.linkedin.com/in/jegadeeshn/" target='_blank' rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/j3gad335h" target='_blank' rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="mailto:ntjegadeesh@gmail.com" target='_blank' rel="noopener noreferrer">
                                <GrMail />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
