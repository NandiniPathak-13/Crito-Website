import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/logo3.png'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d25]  text-gray-300">

      {/* Newsletter Section */}
      <div className="bg-[#f5f3ee] px-6 md:px-16 lg:px-28 xl:px-32  flex flex-col items-center justify-center  py-8 md:flex-row lg:flex-row md:justify-between lg:justify-between  ">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl lg:text-3xl md:text-2xl font-semibold text-gray-900 text-center  lg:text-left md:text-left  mb-4  lg:mb-0 md:mb-0">
          Get update by <br className="hidden   lg:block md:block" /> signup newsletter
        </h2>

        {/* Input + Button */}
        <div className="flex  w-full max-w-sm sm:max-w-md lg:w-1/2 md:w-1/2">
          <input
            type="email"
            placeholder="your email..."
            className="flex-1 px-3 py-2 text-sm sm:text-base rounded-l-[20px] border border-gray-300 focus:outline-none"
          />
          <button className="bg-[#FAD783] hover:bg-yellow-400 text-white px-4 sm:px-6 py-2 rounded-r-[20px]">
            Subscribe →
          </button>
        </div>
      </div>


      {/* Links */}
      <div className=" px-6 md:px-16 lg:px-28 xl:px-32 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5   lg:grid-cols-5 gap-8">


        <div className="col-span-2 lg:mt-[2rem] text-center lg:text-left md:text-left">
          <img src={logo} className="mx-auto md:mx-0 w-[11rem] h-auto" alt="logo" />
          <p className="mt-3 text-sm lg:pt-3 md:pt-3 leading-relaxed">
            We denounce with righteous indignation and dislike men who are so beguiled
            and demoralized by the charms of pleasure of the moment, so blinded by desire,
            that they cannot foresee.
          </p>
        </div>

        {/* Company */}
        <div className="md:mt-[2rem] md:ml-[2rem] lg:mt-[2rem] lg:ml-[2rem]">
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="hover:text-white transition-colors duration-300"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                className="hover:text-white transition-colors duration-300"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="hover:text-white transition-colors duration-300"
              >
                Career
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:mt-[2rem] md:ml-[2rem] lg:mt-[2rem] lg:ml-[2rem]">
          <h3 className="font-semibold text-lg mb-4">Help</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-white transition-colors duration-300"
              >
                Customer Support
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="hover:text-white transition-colors duration-300"
              >
                Delivery Details
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                className="hover:text-white transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:mt-[2rem] md:ml-[2rem] lg:mt-[2rem] lg:ml-[2rem]">
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-white transition-colors duration-300"
              >
               Free eBooks
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="hover:text-white transition-colors duration-300"
              >
             Development Tutorial
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                className="hover:text-white transition-colors duration-300"
              >
            How to – Blog
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="hover:text-white transition-colors duration-300"
              >
              Youtube Playlist
              </Link>
            </li>
          </ul>
        </div>


        {/* Resources */}
       
      </div>

      {/* Bottom  */}
      <div className="border-t px-6 md:px-16 lg:px-28 xl:px-32 border-gray-700  py-6 flex flex-col md:flex-row  lg:flex-row justify-between items-center text-sm">
        <p className="text-center  lg:text-left md:text-left">© 2021 Bizcam - Consulting Company Inc. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0 lgs:mt-0 text-lg">
          <a href="https://www.facebook.com/"><FaFacebookF /></a>
          <a href="https://x.com/?lang=en-in"><FaTwitter /></a>
          <a href="https://www.instagram.com/"><FaInstagram /></a>
          <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
