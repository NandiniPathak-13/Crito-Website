import React, { useState } from "react";
import profile from '../assets/profile.webp'
const testimonials = [
  {
    name: "Wanda Warren",
    role: "Business Manager",
    quote:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
    image: profile,
    stars: 5,
  },
  {
    name: "James Smith",
    role: "Product Lead",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    image: profile,
    stars: 5,
  },
  {
    name: "Sophie Turner",
    role: "Marketing Head",
    quote:
      "Consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: profile,
    stars: 5,
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    quote:
      "Et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: profile,
    stars: 5,
  },
  {
    name: "Anna Bell",
    role: "HR Manager",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: profile,
    stars: 5,
  },
];

const TestimonialSection = () => {
  const [showAll, setShowAll] = useState(false);


  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <div className="bg-white  py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl text-left "
            >
   
              <div className="text-orange-500 text-lg mb-4">
                {"★".repeat(testimonial.stars)}
              </div>

       
              <p className="italic text-gray-700 h-[110px] mb-6 font-medium text-[15px]">
                "{testimonial.quote}"
              </p>

 
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-orange-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

  
        <div className="mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            {showAll ? "Show Less" : "All Reviews →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
