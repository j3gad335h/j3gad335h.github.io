"use client"
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Breadcrumbs } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Projects = () => {
    return (
        <>
            <div className='bg-site bg-no-repeat bg-cover overflow-hidden h-screen'>

                <section className='px-4'>
                    <div >
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
                            <a href="projects">Projects</a>
                        </Breadcrumbs>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:items-center">
                            <div className='my-2 flex justify-center items-center'>
                                <a href="projects/weather-app">
                                    <Card className=" max-w-[24rem] overflow-hidden border-2 hover:border-green-500">
                                        <CardHeader
                                            floated={false}
                                            shadow={false}
                                            color="transparent"
                                            className="m-0 rounded-none "
                                        >
                                            <img className='border-1 border-black'
                                                src="/weather.png"
                                                alt="ui/ux review check"
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Typography variant="h4" color="blue-gray">
                                                Weather Application
                                            </Typography>
                                            <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                                NextJS Weather Application powered by OpenWeatherMap's API
                                            </Typography>
                                        </CardBody>
                                        <CardFooter className="flex items-center justify-end">

                                            <Typography className="font-normal">May 27</Typography>
                                        </CardFooter>
                                    </Card>
                                </a>

                            </div>
                        </div>
                    </div>

                </section>
            </div>

        </>
    )
}

export default Projects
