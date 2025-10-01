import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Head from '../../components/Header';
import { BaseUrl, get } from '../../services/EndPoints';
import { Link } from "react-router-dom";
export const BlogDetails = () => {

    const { id } = useParams()
    const [singlepost, setsinglepost] = useState(null)
    console.log('singlepost', singlepost)
    const [post, setPost] = useState([])
    console.log('posts', post)
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        console.log("Fetching post for ID:", id);
        SinglePost()
        getpost();
        getcategories()
    }, []);

    const SinglePost = async () => {
        try {
            const response = await get(`/public/singlepost/${id}`)
            const data = response.data
            setsinglepost(data.Post)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getpost = async () => {
        try {
            const response = await get("/blog/getpost");
            const data = response.data;
            setPost(data.posts);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    const getcategories = async () => {
        try {
            const response = await get("/blog/getpost");

            setCategories(response.data.category);
        } catch (error) {
            console.log(error);
        }
    };






    return (
        <div>
            <div>
                <Head />
            </div>

            <div className=' mt-4 px-6 md:px-16 lg:px-28 xl:px-32'>
                <div className="flex flex-col md:flex-row gap-[5rem] p-4 bg-white  max-w-screen-xl mx-auto">

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{singlepost && singlepost.title}</h1>
                        <p className="text-sm text-gray-500 mb-4">{singlepost && singlepost.heading}</p>


                        <img src={singlepost && `${BaseUrl}/images/${singlepost.image}`} alt="titllee" className="w-auto object-cover " />

                        <p className="text-gray-400 leading-relaxed mb-4">
                            {singlepost && singlepost.desc} <span className="font-bold text-black"> <br /> " {singlepost && singlepost.boldpara} </span>  </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Frontend</span>
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Relative</span>
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Element</span>
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Scope</span>
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Work</span>

                        </div>
                    </div>


                    <aside className="w-full md:w-1/4 lg:w-1/3 lg:mt-20 p-4 ">
                        <div class="w-full max-w-sm space-y-6">


                            <div>
                                <input
                                    type="text"
                                    placeholder="Type to search..."
                                    class="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>


                            <div class="bg-white p-5 border border-gray-200  shadow-sm">
                                <h3 class="text-lg font-semibold mb-4 relative inline-block">Recent Posts
                                    <span className="absolute left-0 bottom-0 w-[40%] h-[2px] bg-black rounded-full"></span>
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {post.slice(0, 4).map((post) => (
                                        <div
                                            key={post._id}
                                            className="p-3 border-b border-gray-200 hover:shadow-md transition-shadow duration-300"
                                        >
                                            <Link
                                                to={`/blog/blogdetails/${id}`}
                                                className="block text-sm font-medium text-gray-900 hover:text-yellow-600 mb-1"
                                            >
                                                {post.title}
                                            </Link>
                                            <span className="text-xs text-gray-500">
                                                {new Date(post.createdAt).toLocaleDateString("en-US", {
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div class="bg-white p-5 border border-gray-200  shadow-sm">
                                <h3 class="text-lg font-semibold mb-4">Categories</h3>
                                <ul class="space-y-2 text-sm text-gray-700">
                                    <li>Technology – <span class="text-gray-500">{categories || 0} Posts</span></li>
                                    <li>Freelancing – <span class="text-gray-500">{categories || 0} Posts</span></li>
                                    <li>Writing – <span class="text-gray-500">{categories || 0} Posts</span></li>
                                    <li>Marketing – <span class="text-gray-500">{categories || 0} Posts</span></li>
                                    <li>Business – <span class="text-gray-500">{categories || 0} Posts</span></li>
                                    <li>Education – <span class="text-gray-500">{categories || 0} Posts</span></li>
                                </ul>
                            </div>

                        </div>

                    </aside>
                </div>
            </div>


            <div>
                <Footer />
            </div>
        </div>
    )
};

export default BlogDetails