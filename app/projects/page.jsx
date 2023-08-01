"use client"
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const page = () => {
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
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb" className='text-white'>
                        <Link
                            className='flex '
                            underline="hover"
                            sx={{ alignItems: 'center' }}
                            color="inherit"
                            href="/"
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Portfolio
                        </Link>
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}

                        >
                            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Projects
                        </Typography>
                    </Breadcrumbs>
                </div>
                <section>
                    <div className='container'>
                        <h1 className='text-white'>This is Refresh</h1>
                    </div>
                </section>
            </div>

        </>
    )
}

export default page
