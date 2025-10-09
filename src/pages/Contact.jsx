import Footer from '../components/Footer';
import Head from '../components/Header';
import { IoLocationSharp } from 'react-icons/io5';
import { MdCall } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';

export const Contact = () => {
    return (
        <div>
            <Head />

            <div className="px-6 md:px-16 lg:px-28 xl:px-32 mt-6">
                <div className="py-12 bg-white">

                    {/* --- Contact Info Boxes --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                        {/* Location */}
                        <div className="border border-gray-400 flex items-center gap-4 p-6 text-left shadow-sm rounded-lg">
                            <div className="w-10 h-10 flex items-center justify-center bg-black rounded-full">
                                <IoLocationSharp size={16} color="white" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Visit us</h3>
                                <p className="text-gray-500 text-sm">
                                    34 Madison Street,<br /> NY, USA 10005
                                </p>
                            </div>
                        </div>

                        {/* Call */}
                        <div className="border border-gray-400 flex items-center gap-4 p-6 text-left shadow-sm rounded-lg">
                            <div className="w-10 h-10 flex items-center justify-center bg-black rounded-full">
                                <MdCall size={16} color="white" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Call us</h3>
                                <p className="text-gray-500 text-sm">
                                    +1-492-4918-395<br />+14-394-409-591
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="border border-gray-400 flex items-center gap-4 p-6 text-left shadow-sm rounded-lg">
                            <div className="w-10 h-10 flex items-center justify-center bg-black rounded-full">
                                <IoIosMail size={16} color="white" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Email us</h3>
                                <p className="text-gray-500 text-sm">
                                    info@mail.com<br />support@mail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- Contact Form --- */}
                    <div className="bg-[#F0EFEA] p-6 sm:p-10 pt-12 rounded-lg">
                        <div className="text-center mb-8">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                                Leave us a message<br />for any information.
                            </h2>
                        </div>

                        <form className="max-w-xl mx-auto space-y-5">
                            <input
                                type="text"
                                placeholder="Name*"
                                className="w-full px-4 py-2 bg-white rounded-full focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email*"
                                className="w-full px-4 py-2 bg-white rounded-full focus:outline-none"
                            />
                            <textarea
                                placeholder="Your Message*"
                                rows="4"
                                className="w-full px-4 py-3 bg-white rounded-3xl resize-none focus:outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-[#FAD783] hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-all"
                            >
                                Send Message →
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
