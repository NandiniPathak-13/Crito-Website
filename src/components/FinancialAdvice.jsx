import React from "react";
import { FaChartLine, FaCogs, FaBullseye, FaRocket } from "react-icons/fa";

const BizcamSection = () => {
  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center px-8 md:px-16 py-12">
        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1600880292089-90e6a0b87a2a"
            alt="team discussion"
            className="rounded-2xl shadow-md"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why choose Bizcam for <br /> Your business consulting services?
          </h2>
          <p className="text-gray-600 mb-4">
            We can help you develop and execute a clear and strategic IT roadmap
            with priorities that are closely linked to business goals. We will
            work one-on-one with your team to understand your goals.
          </p>
          <p className="text-gray-600">
            Dramatically synergize world-class e-business before ubiquitous
            quality vectors. Interactively strategize sustainable content after
            out-of-the-box supply chains.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center px-8 md:px-16 py-12">
        {/* Left Process */}
        <div>
          <p className="text-red-500 font-semibold mb-2">Working Process</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How We Works <br /> for Your Service
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                <FaChartLine className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">01 Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise definition is - a project or undertaking that
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                <FaBullseye className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">02 Strategy</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise definition is - a project or undertaking that
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                <FaCogs className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">03 Performance</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise definition is - a project or undertaking that
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                <FaRocket className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">04 Improvements</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise definition is - a project or undertaking that
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
            alt="team meeting"
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BizcamSection;
