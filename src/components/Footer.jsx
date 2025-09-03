import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/logo3.png'

export default function Footer() {
  return (
    <footer className="bg-[#0d0d25] text-gray-300">

      {/* Newsletter Section */}
      <div className="bg-[#f5f3ee] md:pl-[6rem] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 px-6 md:px-16 py-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center md:text-left">
          Get update by <br className="hidden md:block" /> signup newsletter
        </h2>

        <div className="flex md:pr-[2rem] w-[40%] md:w-1/2 max-w-md">
          <input
            type="email"
            placeholder="your email..."
            className="flex-1 px-4 py-2 rounded-l-[20px] border border-gray-300 focus:outline-none"
          />
          <button className="bg-[#FAD783] hover:bg-yellow-400 text-white md:px-6 md:py-2 rounded-r-[20px]">
            Subscribe →
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="px-6 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

      
        <div className="col-span-2 text-center md:text-left">
          <img src={logo} className="mx-auto md:mx-0 w-[12rem] h-auto" alt="logo" />
          <p className="mt-4 text-sm md:ml-[2rem] leading-relaxed">
            We denounce with righteous indignation and dislike men who are so beguiled 
            and demoralized by the charms of pleasure of the moment, so blinded by desire, 
            that they cannot foresee.
          </p>
        </div>

        {/* Company */}
        <div className="md:mt-[2rem] md:ml-[2rem]">
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        {/* Help */}
        <div className="md:mt-[2rem] ">
          <h3 className="font-semibold text-lg mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:mt-[2rem]">
          <h3 className="font-semibold  text-lg mb-4">Resources</h3>
          <ul className="space-y-2  text-sm">
            <li><a href="#">Free eBooks</a></li>
            <li><a href="#">Development Tutorial</a></li>
            <li><a href="#">How to – Blog</a></li>
            <li><a href="#">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom  */}
      <div className="border-t border-gray-700 px-6 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-center md:ml-[2rem] md:text-left">© 2021 Bizcam - Consulting Company Inc. All Rights Reserved.</p>
        <div className="flex gap-4 md:mr-[3rem] mt-4 md:mt-0 text-lg">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
