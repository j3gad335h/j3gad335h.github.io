"use client"
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Breadcrumbs } from "@material-tailwind/react";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Projects = () => {
    return (
        <>
            <div className='bg-site bg-no-repeat bg-cover overflow-hidden h-screen'>
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
                <Breadcrumbs>
                    <a href="/" className="opacity-60">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </a>
                    <a href="#" className="opacity-60">
                        <span>Components</span>
                    </a>
                    <a href="#">Breadcrumbs</a>
                </Breadcrumbs>
                <section>
                    <div className='container'>
                        <h1 className='text-white'>This iss Refsrssesh</h1>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Projects
