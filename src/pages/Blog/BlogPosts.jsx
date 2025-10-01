import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from '../../components/Footer';
import Head from '../../components/Header';
import RecentBlogs from "../../components/RecentBlogs";




export const BlogPosts = ({ title, filter }) => {


    return (
        <div>
            <div>
                <Head />
            </div>


            <div className=' px-6 md:px-16 lg:px-28 xl:px-32'>
                <RecentBlogs />
                
            </div>


            <div>
                <Footer />
            </div>
        </div>
    )
};

export default BlogPosts