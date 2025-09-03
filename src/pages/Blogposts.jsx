import React from "react";
import blog from '../assets/blog.webp'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'



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
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        }
    ]
};
const blogPosts = [
    {
        id: 1,
        date: "25 Mar",
        category: "Business",
        title: "Guide To Newly Supported Modern CSS Pseudo",
        description:
            "Busto auctor lectus bot comodo euismod nicest rhoncus parturient convallis in parturient",
        image: blog,
    },
    {
        id: 2,
        date: "25 Mar",
        category: "Business",
        title: "Guide To Newly Supported Modern CSS Pseudo",
        description:
            "Busto auctor lectus bot comodo euismod nicest rhoncus parturient convallis in parturient",
        image: blog,
    },
    {
        id: 3,
        date: "25 Mar",
        category: "Business",
        title: "Guide To Newly Supported Modern CSS Pseudo",
        description:
            "Busto auctor lectus bot comodo euismod nicest rhoncus parturient convallis in parturient",
        image: blog,
    },
];

const BlogSection = () => {
    return (
        <div className="bg-white pb-[5rem] mt-[7rem] pr-[5rem] pl-[5rem] md:pr-[8rem] md:pl-[8rem]">

            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-4">
                    <div>
                        <p className="text-sm text-orange-600 md:text-left text-center font-semibold mb-2">
                            Article & News
                        </p>
                        <h2 className="text-2xl md:text-left text-center md:text-3xl font-bold">
                            Get every single <br /> news & blogs
                        </h2>
                    </div>

                    <button className="border border-gray-300 md:ml-[0] ml-[3rem] text-sm px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition self-start md:self-center">
                        Browse Services →
                    </button>
                </div>




                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white">
                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                <div className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 text-xs font-semibold rounded">
                                    {post.date}
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-xs text-gray-500 mb-1">{post.category}</p>
                                <h3 className="font-semibold text-lg mb-2 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div >
        </div >
    );
};

export default BlogSection;
