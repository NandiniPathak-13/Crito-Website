import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Head from '../components/Header';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'
import professional from '../assets/professional.webp'
import { MdOutlineCallMade } from 'react-icons/md';
import photo2 from '../assets/photo.png'
import photo1 from '../assets/photo1.png'
import photo3 from '../assets/eye.png'


import { BiPlay } from 'react-icons/bi';
// import { ArrowRight } from "lucide-react";
import { FaArrowRightLong } from 'react-icons/fa6';
import { AiOutlineLine } from 'react-icons/ai';
import { createBrowserRouter } from 'react-router-dom';
// import { ArrowRight } from "lucide-react";

import TestimonialSection from "./Testimonials";
import BlogSection from "./Blogposts";
export const About = () => {

    const members = [
        { name: "Kimberly 1 Hansen", role: "Senior Consultant", img: professional },
        { name: "Kimberly 2 Hansen", role: "Senior Consultant", img: professional },
        { name: "Kimberly 3 Hansen", role: "Senior Consultant", img: professional },
        { name: "Kimberly 4 Hansen", role: "Senior Consultant", img: professional },
        { name: "Kimberly 5 Hansen", role: "Senior Consultant", img: professional },
        { name: "Kimberly 6 Hansen", role: "Senior Consultant", img: professional },
        { name: "Kimberly 7 Hansen", role: "Senior Consultant", img: professional },
        { name: "Kimberly 8 Hansen", role: "Senior Consultant", img: professional }
    ];
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4, // desktop default
        slidesToScroll: 1,
        speed: 900,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024, // tablet and below
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // mobile and below
                settings: {
                    slidesToShow: 2, // mobile me bhi 2 hi
                },
            },
        ],
    };
    const [stats, setStats] = useState([]);
    useEffect(() => {
        fetch("https://crito-website-1.onrender.com/api/static/services")
            .then((res) => res.json())
            .then((data) => setServices(data));

        fetch("https://crito-website-1.onrender.com/api/static/stats")
            .then((res) => res.json())
            .then((data) => setStats(data));

        fetch("https://crito-website-1.onrender.com/api/static/tabs")
            .then((res) => res.json())
            .then((data) => setTabs(data));


        fetch("https://crito-website-1.onrender.com/api/static/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div>
            <div>
                <Head />
            </div>
            <div className="section2 flex md:pt-[0] pt-[2rem] flex-col md:flex-row">
                {/* Left Image Section */}
                <div className="basis-1/2 pl-0 md:pl-[8rem] pt-[2rem] md:pt-[4rem] flex justify-center">
                    <img src={photo1} className="w-[80%] md:w-120 h-auto" alt="" />
                </div>

                {/* Right Text Section */}
                <div className="basis-1/2 text-center md:text-left px-6 md:px-0">
                    <h3 className="text-orange-500 font-bold mt-[2rem] md:mt-[4rem] md:ml-[5rem]">
                        About Company
                    </h3>

                    <h2 className="text-[1.5rem] md:text-[2rem] font-semibold mt-[1rem] md:mt-[2rem] md:ml-[5rem]">
                        We Are Business <br /> Consulting & Credit <br /> Repair Experts
                    </h2>

                    <p className="text-gray-500 text-[13px] mt-[1rem] md:mt-[1.5rem] md:mr-[7rem] md:ml-[5rem]">
                        Grass our abundantly given make in may thema our you abundantly..
                        Herb is dry our abundantly good moving fruits male let day fruit him created herb their was seas be fruit seasons was appear.
                        Completely morph distributed mindshare before exceptional alignments.
                    </p>

                    <p className="text-gray-500 text-[13px] mt-[1rem] md:mt-[1.5rem] md:mr-[7rem] md:ml-[5rem]">
                        Dramatically whiteboard sustainable growth strategies vis-a-vis future-proof e-business.
                        Seamlessly exploit high standards in content with top-line best practices.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-5 mt-[30px] justify-center md:justify-start md:ml-[5rem]">
                        <a
                            href="#"
                            className="px-4 py-2 bg-[#1b1b1b] text-white font-bold text-[12px] rounded-[20px] shadow hover:bg-yellow-700"
                        >
                            <span className="flex gap-1"> Learn More <MdOutlineCallMade size={15} color="white" /></span>
                        </a>

                        <a
                            href="#"
                            className="px-2 py-2 bg-transparent border border-black text-black font-bold text-[12px] rounded-full shadow hover:bg-yellow-700"
                        >
                            <span><BiPlay size={20} /></span>
                        </a>

                        <span className="mt-[0.3rem] font-bold">Intro Video</span>
                    </div>
                </div>
            </div>

            <div className="section4">
                <div className="flex md:flex-row flex-col md:text-left text-center md:ml-[7rem]">
                    <div className='basis-1/2 '>


                        <h3 className='text-orange-500 font-bold md:ml-[5rem] mt-[4rem]'>Why Choose Us</h3>
                        <h2 className='md:text-[2rem] text-[1.5rem] font-semibold mt-[2rem] md:ml-[5rem]'>Reasons Why We<br />are Best Business <br />Consulting Agency</h2>
                        <div className='mt-[2rem]'>

                            <span className='pt-[2rem] md:ml-[8rem] font-bold'>Intro Video</span>
                        </div>

                        <p className='text-gray-500 text-left text-[13px] mr-[7rem] ml-[8rem] md:ml-[8rem] mt-[0.2rem]'>
                            In their lights she does lights.
                        </p>
                        <div className='mt-[-2rem]  ml-[5rem]'>  <span > <BiPlay size={20} /></span>
                        </div>
                        <div className='mt-[2rem]'>

                            <span className='pt-[2rem] md:ml-[8rem] font-bold'>Intro Video</span>
                        </div>

                        <p className='text-gray-500  text-[13px] mr-[7rem] ml-[8rem] mt-[0.2rem]'>
                            In their lights she does lights.
                        </p>
                        <div className='mt-[-2rem] ml-[5rem]'>  <span > <BiPlay size={20} /></span>
                        </div>
                        <div className='mt-[2rem]'>

                            <span className='pt-[2rem] md:ml-[8rem] font-bold'>Intro Video</span>
                        </div>

                        <p className='text-gray-500  text-[13px] mr-[7rem] ml-[8rem] mt-[0.2rem]'>
                            In their lights she does lights.
                        </p>
                        <div className='mt-[-2rem] ml-[5rem]'>  <span > <BiPlay size={20} /></span>
                        </div>
                        <div className='mt-[2rem]'>

                            <span className='pt-[2rem] md:ml-[8rem] font-bold'>Intro Video</span>
                        </div>

                        <p className='text-gray-500  text-[13px] mr-[7rem] ml-[8rem] mt-[0.2rem]'>
                            In their lights she does lights.
                        </p>
                        <div className='mt-[-2rem] ml-[5rem]'>  <span > <BiPlay size={20} /></span>
                        </div>


                    </div>
                    <div className='basis-1/2  pt-[15rem]'>
                        <div className='bg-[#F0EFEA] relative pl-[4rem] pt-[-4rem] md:pl-[6rem] pb-[15rem] md:pb-[20rem] pr-[6rem]'>

                            <img src={photo2} className='absolute mt-[-5rem] w-90 md:w-120 h-auto' alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="md:pr-[8rem] md:pl-[8rem] mb-[4rem] border-t border-gray-600 border-b 
  pt-[1rem] pb-[1rem] md:pt-[2rem] md:pb-[2rem] 
  grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 
  mt-16 w-11/12 mx-auto text-center justify-items-center">

                {stats.map((s) => (
                    <div key={s.id}>
                        <h2 className="md:text-3xl text-[1rem] font-bold">{s.value}</h2>
                        <p className="text-gray-600 md:text-[1rem] text-[12px]">{s.label}</p>
                    </div>
                ))}
            </div>




            <div className='text-center bg-[#F0EFEA] pb-[5rem] pt-[4rem]'>
                <h3 className='text-orange-500 font-bold  mt-[4rem]'>Why Choose Us</h3>
                <h2 className='text-[2rem] font-semibold mt-[2rem] '>We Are Business Consulting &<br /> Credit Repair Experts</h2>
                <p className='text-gray-500  text-wrap text-[13px] mt-[2rem]'>
                    Effective communication is the foundation of any successful  relationship.  <br />Whether personal or professional, the ability to listen  <br /> actively and respond thoughtfully builds  trust and understanding.
                </p>
                <div className='flex justify-center pt-[4rem] pb-[2rem]'>
                    <img src={photo3} className='ali w-[35rem] h-[20rem]' alt="" />
                </div>

                <p className='text-gray-500 ml-[4rem] mr-[4rem] md:ml-[20rem] md:mr-[20rem] text-wrap text-[13px] mt-[2rem]'>
                    In today’s fast-paced world, meaningful conversations often get overshadowed by digital noise and distractions. Yet, it is through open and honest dialogue that individuals truly connect. Sitting across from someone, making eye contact, and engaging in a genuine exchange of thoughts fosters empathy, reduces misunderstandings, and strengthens human bonds. Whether in a business setting or a casual chat between friends, these moments of real connection are invaluable. They not only help us understand others better but also reflect on our own perspectives and emotions, leading to personal growth and stronger communities.   </p>
            </div>

            <div className="w-4/4 pr-[1rem] pl-[1rem]  md:pr-[8rem] md:pl-[8rem] m-auto">
                <div className="pt-20 md:px-4">
                    <Slider {...settings}>
                        {members.map((d, index) => (
                            <div
                                key={index}
                                className="cards md:h-[400px] text-black md:px-2"
                            >
                                <div className="image flex flex-col justify-center items-center md:h-[250px]">
                                    <img
                                        className="md:h-[16rem] h-[10rem] w-auto"
                                        src={d.img}
                                        alt={d.name}
                                    />
                                </div>
                                <div className="texts flex flex-col justify-center items-center gap-4 p-4">
                                    <h1 className="text-black text-[0.8rem] md:text-[1rem] font-[800] md:font-bold">{d.name}</h1>
                                    <p className="text-black md:text-[1rem] text-[0.7rem] ">{d.role}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )

};

export default About