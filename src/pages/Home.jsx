import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from '../assets/logoimage.PNG'
import { FaPhoneAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineCallMade } from 'react-icons/md';
import women from '../assets/women1.png'
import waves from '../assets/waves.png'
import image from '../assets/image.png'
import cube from '../assets/cube.png'
import handshake from '../assets/handshake.png'
import chart from '../assets/data-analysis.png'
import bulb from '../assets/light-bulb.png'
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo.png'
import professional from '../assets/professional.webp'

import { Link } from "react-router-dom";

import { BiPlay } from 'react-icons/bi';

import { FaArrowRightLong } from 'react-icons/fa6';
import { AiOutlineLine } from 'react-icons/ai';

import Footer from '../components/Footer';
import TestimonialSection from "./Testimonials";
import BlogSection from "./Blogposts";

export default function Home() {

  const location = useLocation();
  const isActiveTab = (path) => location.pathname === path;
  const [services, setServices] = useState([]);
  const [stats, setStats] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? services : services.slice(0, 4);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetch("https://crito-website.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));

    fetch("https://crito-website.onrender.com/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));

    fetch("https://crito-website.onrender.com/tabs")
      .then((res) => res.json())
      .then((data) => setTabs(data));


    fetch("https://crito-website.onrender.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

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
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 900,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };



  return (
    <div >
      {/* Navbar for HOME PAGE */}
      <header className="w-full pb-[5rem] bg-[#F0EFEA] ">
        {/* Main Navbar */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-28 xl:px-32">
          <div className="flex items-center justify-between py-2 relative">

            {/* Logo */}
            <div className="logo-image flex-shrink-0">
              <img src={logo} alt="logo image" className="w-35  h-auto md:mt-[-18px]" />
            </div>


            <div className="hidden lg:flex flex-col w-full ml-8">
              {/* Top Section */}
              <div className="flex justify-between items-center border-b border-gray-300 pb-2 text-xs text-gray-500">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1 border-r border-gray-300 pr-2">
                    <FiPhoneCall size={13} /> +1 (520) 256 3650
                  </span>
                  <span className="flex items-center gap-1 border-r border-gray-300 pr-2">
                    <HiOutlineMail size={15} /> info@bizcam24.com
                  </span>
                  <span className="flex items-center gap-1">
                    <HiOutlineLocationMarker size={15} /> 120 F 2th YT, Melborn NY, 1259
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 border-r border-gray-300 pr-3">
                    <FaClock /> Mon - Fri: 09:00 - 05:00
                  </span>
                  <div className="flex gap-3 text-gray-600">
                    <FaFacebookF className="cursor-pointer hover:text-black" />
                    <FaTwitter className="cursor-pointer hover:text-black" />
                    <FaInstagram className="cursor-pointer hover:text-black" />
                    <FaLinkedinIn className="cursor-pointer hover:text-black" />
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between pt-2 text-sm">
                <div className="flex space-x-8">
                  <Link
                    to="/"
                    className={`tab ${isActiveTab('/') ? 'activetab text-black ' : 'text-gray-500 hover:text-black'}`}
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className={`tab ${isActiveTab('/about') ? 'activetab text-black ' : 'text-gray-500 hover:text-black'}`}
                  >
                    About
                  </Link>
                  <Link
                    to="/service"
                    className={`tab ${isActiveTab('/service') ? 'activetab text-black ' : 'text-gray-500 hover:text-black'}`}
                  >
                    Service
                  </Link>

                  <Link
                    to="/blog"
                    className={`tab ${isActiveTab('/blog') ? 'activetab text-black ' : 'text-gray-500 hover:text-black'}`}
                  >
                    Blog
                  </Link>

                  <Link
                    to="/contact"
                    className={`tab ${isActiveTab('/contact') ? 'activetab text-black ' : 'text-gray-500 hover:text-black'}`}
                  >
                    Contact
                  </Link>
                </div>
                <a href="#" className="px-5 py-2 bg-[#FAD783] text-black font-semibold text-xs rounded-full shadow hover:bg-yellow-600">
                  <span className="flex items-center gap-1">
                    Get Counseling <MdOutlineCallMade size={14} />
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-2xl absolute top-4 right-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 right-4 bg-[#F0EFEA] shadow-lg rounded-lg p-4 flex flex-col items-end space-y-4 md:hidden z-50">
            <Link onClick={() => setIsOpen(false)} to="/" className={`${isActiveTab('/') ? 'text-black font-bold' : 'text-gray-600'} hover:text-black`}>Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/about" className={`${isActiveTab('/about') ? 'text-black font-bold' : 'text-gray-600'} hover:text-black`}>About</Link>
            <Link onClick={() => setIsOpen(false)} to="/service" className={`${isActiveTab('/service') ? 'text-black font-bold' : 'text-gray-600'} hover:text-black`}>Service</Link>
            <Link onClick={() => setIsOpen(false)} to="/blog" className={`${isActiveTab('/blog') ? 'text-black font-bold' : 'text-gray-600'} hover:text-black`}>Blog</Link>
            <Link onClick={() => setIsOpen(false)} to="/contact" className={`${isActiveTab('/contact') ? 'text-black font-bold' : 'text-gray-600'} hover:text-black`}>Contact</Link>
          </div>
        )}

      </header>



      {/* SECTION - 1 */}
      <div className="section1 mb-[8rem] bg-[#F0EFEA] relative min-h-[auto] h-auto px-6 sm:px-8 md:px-16 lg:px-28 xl:px-32 2xl:px-45 flex flex-col md:flex-row items-center md:items-start justify-between">
                                                                                   

        {/* RIGHT SECTION */}
        <div className="right-sec w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-[500] text-black leading-snug">
            We Provide <br /> Best Business <br /> Solutions
          </h1>
          <p className="text-gray-500 text-sm md:text-[1rem]  xl:text-[1.5rem] mt-4">
            Establish your vision and value proposition <br /> and turn them into
          </p>

          <div className="mt-6 sm:flex-row  sm:gap-4 flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="px-4 py-2 bg-[#FAD783] text-black font-bold text-[12px] rounded-[20px] shadow hover:bg-yellow-700"
            >
              <span className="flex gap-1 items-center">
                Get Counseling <MdOutlineCallMade size={15} />
              </span>
            </a>

            <a
              href="#"
              className="px-4 py-2 bg-transparent border border-black text-black font-bold text-[12px] rounded-[20px] shadow hover:bg-yellow-700"
            >
              <span className="flex gap-1 items-center">
                Learn More <MdOutlineCallMade size={15} />
              </span>
            </a>
          </div>
        </div>

        {/* LEFT SECTION */}
        <div className="left-sec mt-[0] relative md:mt-[-8rem] lg:mt-[-8rem] xl:mt-[-8rem] w-full md:w-1/2 flex justify-center md:justify-end ">
          <img src={women} alt="" className="w-auto md:h-[40rem] object-contain" />
        </div>
        <div className="absolute top-10 right-0 w-32 h-32 bg-blue-200 rounded-full -z-10"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-black rounded-full opacity-30 -z-10"></div>

      </div>


      {/* <img src={waves} className='mt-[-20rem] overflow-hidden w-100 h-auto' alt="" /> */}

      {/* SECTION - 2 */}
      <div className='bg-white  '>
        <div className='section1_2 '>
          <img src={image} className='pt-[5rem] mb-[5rem] mt-[-10rem] max-w-400 mx-auto w-full h-auto' alt="" />
          <div className="section2 md:ml-[5rem] mr-[2rem] ml-[2rem] md:mr-[5rem]  md:pb-[4rem] bg-white border-1 border-gray-300">

            <div className="container  md:flex">
              <div className='basis-1/2 text-center md:text-left'>
                <h3 className='text-orange-500 font-bold mt-[2rem] md:ml-[5rem] md:mt-[4rem]'>Fetures</h3>
                <h2 className='md:text-[2rem] text-2xl font-semibold mt-[2rem] md:ml-[5rem]'>Less Accounting is <br />trusted by thousand <br />of companies</h2>
                <div className="hidden mt-[40px] md:flex gap-5">
                  <a
                    href="#"
                    className="px-4 py-2 ml-[5rem] bg-[#FAD783] text-black font-bold text-[12px] rounded-[20px] shadow hover:bg-yellow-700"
                  >
                    <span className='flex gap-1'> Get Counseling <MdOutlineCallMade size={15} /></span>
                  </a>
                </div>

              </div>
              <div className='  basis-1/2'>

                <div className='flex mt-[4rem] md:mb-[0] mb-[2rem] md:ml-[0] ml-[15px] flex-col gap-20 sm:gap-20'>
                  <div className='flex gap-6 sm:gap-6 md:gap-[30px]'>
                    <div className='basis-1/2'>
                      <img src={handshake} className='w-8 h-auto' alt="" />
                      <h1 className='mt-[1.5rem] font-bold'> Business Advice</h1>
                      <p className='text-gray-500 text-sm pr-[12px] mt-[0.5rem]'> Essentially formula for how a business is going to compete.</p>
                    </div>

                    <div className='basis-1/2'>
                      <img src={bulb} className='w-8 h-auto' alt="" />

                      <h1 className='mt-[1.5rem] font-bold'> Startup Business</h1>
                      <p className='text-gray-500 text-sm pr-[12px] mt-[0.5rem]'> Essentially formula for how a business is going to compete.</p>
                    </div>
                  </div>
                  <div className='flex gap-6 sm:gap-6 md:gap-[30px]'>
                    <div className='basis-1/2'>
                      <img src={chart} className='w-8 h-auto' alt="" />
                      <h1 className='mt-[1.5rem] font-bold'>Financial Advice</h1>
                      <p className='text-gray-500 text-sm pr-[12px] mt-[0.5rem]'> Essentially formula for how a business is going to compete.</p>
                    </div>
                    <div className='basis-1/2'>
                      {/* <FaCube className="text-4xl text-black mb-3" /> */}


                      <img src={cube} className='w-8 h-auto' alt="" />
                      <h1 className='mt-[1.5rem] font-bold'> Risk Management</h1>
                      <p className='text-gray-500 text-sm pr-[12px] mt-[0.5rem]'> Essentially formula for how a business is going to compete.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section2 flex md:pt-[0] pt-[2rem] flex-col md:flex-row">
          {/* Left-Image Section */}
          <div className="basis-1/2 pl-0 md:pl-[8rem] pt-[2rem] md:pt-[4rem] flex justify-center">
            <img src={photo1} className="w-[80%] md:w-120 h-auto" alt="" />
          </div>

          {/* Right-Text Section */}
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


        {/* SECTION - 3 */}
        <div className='bg-[#F0EFEA] mt-[4rem]'>
          <div className="section3">
            <h3 className="text-orange-500 md:ml-[10rem] font-bold md:text-left text-center pt-[2rem] md:pt-[4rem]">
              Our Services
            </h3>

            <div className="flex flex-col md:ml-[2rem] md:flex-row items-center md:items-start px-6 md:px-[8rem]">
              {/* Left */}
              <div className="basis-1/2 text-center md:text-left">
                <h2 className="text-[1.5rem] md:text-[2rem] font-semibold mt-[1.5rem] md:mt-[2rem]">
                  We Provide The Best <br /> Service For Consulting
                </h2>
              </div>

              {/* Right  */}
              <div className="basis-1/2 mt-[1rem] md:mt-[20px]">
                <p className="text-gray-500 text-[13px] text-center md:text-left ml-[2rem] mr-[2rem] md:ml-[5rem] mr-0 md:mr-[rem] mt-[1rem] md:mt-[1.5rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorem id doloribus est,
                  dignissimos possimus nesciunt beatae quam minima inventore libero magni tenetur maxime amet?
                  Consectetur eum fugit maxime ad.
                </p>
              </div>
            </div>



            <div className="min-h-screen flex flex-col items-center justify-center py-16">
              {/*Cards */}
              <div className="grid md:pr-[8rem] md:pl-[8rem] pr-[4rem] pl-[4rem] grid-cols-1 md:grid-cols-4 gap-6  w-11/12 max-w-6xl">
                {visibleCards.map((s) => (
                  <div
                    key={s.id}
                    className={`p-6 pt-[1rem] rounded-lg shadow-sm flex flex-col justify-between ${s.active ? "bg-[#FAD783]" : "bg-white"}`}
                  >
                    <div className='flex'>
                      <AiOutlineLine size={18} />
                      <span className='ml-[-4px]'><AiOutlineLine size={18} /></span>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-600">{s.desc}</p>
                    </div>

                    <button
                      className={`mt-4 ml-[7rem] w-10 h-10 flex items-center justify-center rounded-full ${s.active ? "bg-white text-black" : "bg-black text-white"}`}
                    >
                      <FaArrowRightLong size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {!showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="mt-10 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
                >
                  Browse Services →
                </button>
              )}

              <div className=" md:pr-[8rem] md:pl-[8rem]  border-t border-gray-600 border-b pt-[1rem] pb-[1rem] md:pt-[2rem]  md:pb-[2rem] grid grid-cols-4 md:grid-cols-4 gap-6 md:gap-8 mt-16 w-11/12 text-center">
                {stats.map((s) => (
                  <div key={s.id}>
                    <h2 className="md:text-3xl text-[1rem] font-bold">{s.value}</h2>
                    <p className="text-gray-600 md:text-[1rem] text-[12px]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
        {/* SECTION - 4 */}
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


        {/* SECTION - 5 */}
        <div className="section5 text-center">
          <h3 className='text-orange-500 font-bold mt-[4rem]'>Project & Case Studies</h3>
          <h2 className='text-[2rem] font-semibold mt-[2rem] '>Let's Looks<br />Our Global Projects</h2>
          <div className="py-16 flex flex-col items-center">

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

        {/* SECTION - 6 */}
        <div className="yellowcontainer pb-[8rem] pt-[2rem] md:pl-[8rem] pr-[2rem] pl-[2rem] md:pr-[8rem] bg-[#FAD783]">

          <div className="flex flex-col md:flex-row items-center md:items-start">

            <div className="md:basis-1/2 text-center md:text-left">
              <h3 className="text-orange-500 font-bold mt-8 md:mt-[4rem]">
                Meet Our Teams
              </h3>
              <h2 className="text-2xl md:text-[2rem] text-black font-semibold mt-6 md:mt-[2rem]">
                Experience <br /> Team Members
              </h2>
            </div>


            <div className="md:basis-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
              <button className="px-4 md:mt-40 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                Browse Services →
              </button>
            </div>
          </div>



          <div className="w-full bg-[#FAD783] m-auto">
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

          {/* SECTION - 7 */}

          <div className="whitecontainer justify-center items-center text-center  bg-white">
            <h3 className='text-orange-500 pt-[5rem] font-bold mt-[4rem]'>Testimonials</h3>
            <h2 className='text-[2rem] text-black font-semibold mt-[2rem] '>What Our Client Says</h2>
            <div >
              <TestimonialSection />
            </div>
          </div>

        </div>

        {/* SECTION - 8 */}
        <div className="lastnewscontainer">

          <BlogSection />
        </div>

        {/* SECTION - FOOTER */}
        <div>
          <Footer />
        </div>
      </div>








    </div>

  );

}
