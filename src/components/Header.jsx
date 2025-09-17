import { useLocation, Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaClock } from "react-icons/fa";
import { MdOutlineCallMade } from "react-icons/md";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from '../assets/logoimage.PNG'
import '../index.css';

const Header = () => {

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const getPageName = () => {
        switch (location.pathname) {
            case "/":
                return "Home";
            case "/about":
                return "About Us";
            case "/services":
                return "Our Services";
            case "/blog":
                return "Blog";
            case "/contact":
                return "Contact";
            case "/service":
                return "Service";
            default:
                return "Page";
        }
    };

    const isActiveTab = (path) => location.pathname === path;

    return (
        <header className="w-full pl-[1rem] pr-[1rem] md:pl-[8rem]  justify-center  md:pr-[9rem] pb-[3rem] bg-[#F0EFEA] shadow-sm">
            <div className="navbar-container md:flex flex items-center ">

                <div className="logo-image">
                    <img src={logo} alt="logo image" className="w-35   h-auto" />
                </div>

               <button
                           className="md:hidden text-2xl absolute top-4 right-4"
                           onClick={() => setIsOpen(!isOpen)}
                         >
                           {isOpen ? <IoClose /> : <GiHamburgerMenu />}
                         </button>

                <div className="navbar-content hidden md:flex pt-[5px] pl-[1rem]  text-[11.5px] gap-[4rem] text-gray-500 justify-between items-center">
                    <div className="divider hidden md:flex  flex-col">

                        <div className="topsection  pb-[5px] flex gap-[6.5rem] border-b-1 border-gray-400">
                            <div className="right flex gap-2">
                                <div className='border-r border-gray-400 pr-[6.5px]'>
                                    <span className="flex items-center gap-1"><FiPhoneCall size={13} /> +1 (520) 256 3650</span>
                                </div>
                                <div className='border-r border-gray-400 pr-[6.5px]'>
                                    <span className="flex items-center gap-1"><HiOutlineMail size={15} /> info@bizcam24.com</span>
                                </div>
                                <div>
                                    <span className="flex items-center gap-1"><HiOutlineLocationMarker size={15} /> 120 F 2th YT, Melborn NY, 1259</span>
                                </div>
                            </div>

                            <div className="left flex">
                                <div className='border-r border-gray-400'>
                                    <span className="flex pr-[8px] items-center gap-2"><FaClock /> Mon - Fri: 09:00 - 05:00</span>
                                </div>

                                <div className="flex gap-3 pl-[3px] mt-[3px] text-gray-600">
                                    <FaFacebookF className="cursor-pointer hover:text-black" />
                                    <FaTwitter className="cursor-pointer hover:text-black" />
                                    <FaInstagram className="cursor-pointer hover:text-black" />
                                    <FaLinkedinIn className="cursor-pointer hover:text-black" />
                                </div>
                            </div>
                        </div>


                        <div className="bottomsection pt-[15px]  text-[13px] hidden md:flex space-x-8">
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


                            <div className="hidden ml-[20rem] mt-[-10px] md:flex">
                                <a
                                    href="#"
                                    className="px-4 py-2 bg-[#FAD783] text-black font-bold text-[12px] rounded-[20px] shadow hover:bg-yellow-700"
                                >
                                    <span className='flex gap-1'> Get Counseling <MdOutlineCallMade size={15} /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className=" absolute  bg-[#F0EFEA] right-4 shadow-lg rounded-lg p-4 flex flex-col items-end space-y-4 md:hidden z-50">
                    <Link onClick={() => setIsOpen(false)} to="/" className={`${isActiveTab('/') ? 'text-black font-bold' : 'text-gray-600'} hover:text-black`}>Home</Link>
                    <Link onClick={() => setIsOpen(false)} to="/about" className={`${isActiveTab('/about') ? 'text-black font-bold' : 'text-gray-600'} hover:text-black`}>About</Link>
                    <Link onClick={() => setIsOpen(false)} to="/service" className={`${isActiveTab('/service') ? 'text-black font-bold' : 'text-gray-600'} hover:text-black`}>Service</Link>
                    <Link onClick={() => setIsOpen(false)} to="/blog" className={`${isActiveTab('/blog') ? 'text-black font-bold' : 'text-gray-600'} hover:text-black`}>Blog</Link>
                    <Link onClick={() => setIsOpen(false)} to="/contact" className={`${isActiveTab('/contact') ? 'text-black font-bold' : 'text-gray-600'} hover:text-black`}>Contact</Link>
                    {/* <a href="#" className="px-4 py-2 bg-[#FAD783] text-black font-bold text-[12px] rounded-[20px] shadow hover:bg-yellow-700">Get Counseling</a> */}
                </div>
            )}

             <div className="secondnav">
                <div className="pt-10 pb-4 text-center px-2">
                    <Link to="/" className={`tab ${isActiveTab('/') ? 'activetab text-black ' : 'text-gray-500 hover:text-black'}`}>
                        Home<span className="ml-4 text-black">{getPageName()}</span>
                    </Link>
                    <h2 className="text-2xl md:text-4xl pt-2 font-semibold text-black">{getPageName()}</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
