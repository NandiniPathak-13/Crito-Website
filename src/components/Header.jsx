import { useLocation, Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaClock } from "react-icons/fa";
import { MdOutlineCallMade } from "react-icons/md";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from '../assets/logoimage.PNG';
import '../index.css';

const Header = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const getPageName = () => {
        switch (location.pathname) {
            case "/": return "Home";
            case "/about": return "About Us";
            case "/services": return "Our Services";
            case "/blog": return "Blog";
            case "/contact": return "Contact";
            case "/service": return "Service";
              case "/blog/blogdetails/": return "Blog";
            default: return "Page";
        }
    };

    const isActiveTab = (path) => location.pathname === path;

    return (
        <header className="w-full bg-[#F0EFEA] shadow-sm">
            {/* Main Navbar */}
            <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-28 xl:px-32">
                <div className="flex items-center justify-between py-2 relative">

                    {/* Logo */}
                    <div className="logo-image flex-shrink-0">
                        <img src={logo} alt="logo image" className="w-35  h-auto md:mt-[-18px]" />
                    </div>

                    {/* Desktop Navbar Content */}
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

            {/* Second Nav / Breadcrumb */}
            <div className="text-center pt-10 pb-4">
                <Link to="/" className={`hover:text-black ${isActiveTab('/') ? 'font-bold text-black' : 'text-gray-500'}`}>
                    Home <span className="ml-4 text-black">{getPageName()}</span>
                </Link>
                <h2 className="text-2xl md:text-4xl pt-2 font-semibold text-black">{getPageName()}</h2>
            </div>
        </header>
    );
};

export default Header;
