import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo2 from '../assets/photo.png'
import '../index.css'
import Footer from '../components/Footer';
import { AiOutlineLine } from 'react-icons/ai';
import Head from '../components/Header';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from "react-router-dom";

import { BiPlay } from 'react-icons/bi';
export const Service = () => {
  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://crito-website-1.onrender.com/api/static/services")
      .then((res) => res.json())
      .then((data) => setServices(data));

    fetch("https://crito-website-1.onrender.com/api/static/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const visibleCards = showAll ? services : services.slice(0, 4);

  return (
    <div>
      <Head />

      <div className='md:ml-[9rem] mr-[4rem] ml-[4rem] md:mr-[9rem]'>
        <div className="section3">
          <h3 className="text-orange-500 md:text-left text-center pl-6 md:pl-12 font-bold pt-8">Our Services</h3>

          <div className="flex flex-col md:flex-row">
            {/* Left side heading */}
            <div className="md:basis-1/2 px-6 md:px-12">
              <h2 className="text-xl md:text-left text-center  md:text-2xl lg:text-[2rem] font-semibold mt-6 md:mt-8">
                We Provide The Best <br /> Service For Consulting
              </h2>
            </div>

            {/* Right side paragraph */}
            <div className="md:basis-1/2 px-6 md:px-12 mt-4 md:mt-8">
              <p className="text-gray-500 md:text-left text-center  text-sm md:text-[13px] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor
                sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet
                consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur
                adipisicing elit
              </p>
            </div>
          </div>



          <div className=" min-h-screen flex pb-[5rem] flex-col items-center justify-center py-16">



            <div className="grid  grid-cols-1 md:grid-cols-4 gap-6 w-11/12 max-w-6xl">
              {services.map((s) => (
                <div
                  key={s.id}
                  className={`p-6  shadow-sm flex flex-col justify-between ${s.active ? "bg-[#FAD783]" : "bg-white"
                    }`}
                > <div className='flex'> <AiOutlineLine size={18} /> <span className='ml-[-4px]'><AiOutlineLine size={18} /></span></div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                  </div>
                  <button
                    className={`mt-4 ml-[7rem] w-10 h-10 flex items-center justify-center rounded-full ${s.active ? "bg-white text-black" : "bg-black text-white"
                      }`}
                  >
                    <FaArrowRightLong size={18} />
                  </button>
                </div>
              ))}
            </div>





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
      <div className="section5 text-center">
        <h3 className='text-orange-500 font-bold mt-[4rem]'>Project & Case Studies</h3>
        <h2 className='text-[2rem] font-semibold mt-[2rem] '>Let's Looks<br />Our Global Projects</h2>
        <div className="py-16 flex flex-col items-center">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 pt-4 pb-4 border-t border-b border-gray-300">
                        <Link
                          to=" "
                          className="px-4 py-2 text-xs sm:text-sm font-medium bg-[#FAD783] rounded-full text-gray-900"
                        >
                          Discover All
                        </Link>
          
                        <Link
                          to="business-advice"
                          className="px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-black"
                        >
                          Business Advice
                        </Link>
          
                        <Link
                          to="startup-business"
                          className="px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-black"
                        >
                          Startup Business
                        </Link>
          
                        <Link
                          to="financial-advice"
                          className="px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-black"
                        >
                          Financial Advice
                        </Link>
          
                        <Link
                          to="risk-management"
                          className="px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-black"
                        >
                          Risk Management
                        </Link>
                      </div>

          {/* <Outlet /> */}


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-2/3 max-w-4xl">
            {projects.map((p) => (
              <div
                key={p.id}
                className="bg-white  overflow-hidden "
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-50 object-cover"
                />
                <div className="p-4 border-b border-black">
                  <h3 className="font-semibold text-left ml-[-1rem] text-[1rem]">{p.title}</h3>

                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                  <span>{p.date}</span>
                  <a href="#" className="flex items-center gap-1 hover:underline">
                    Read More <FaArrowRightLong size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            All Recent Projects →
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
