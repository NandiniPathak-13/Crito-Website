import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl, get } from "../services/EndPoints";
export const RecentBlogs = () => {
const navigate =useNavigate()
    const [post, setPost] = useState([])
    console.log('posts', post)

    const handlenavigate=(id)=>{
        navigate(`/post/${id}`)
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

    useEffect(() => {
        getpost();
    }, []);



    return (
        <div>

            <div className="Container">
                <div className="my-8">
                    <h2 className="text-3xl  font-bold mb-6"> Latest Articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {post && post.map((post, index) => {
                            return (

                                <div className=" transition duration-300">
                                    <div className="relative">
                                        <img src={`${BaseUrl}/images/${post.image}`} alt="titllee" className="w-full h-48 object-cover rounded-md " />
                                        <div className="absolute top-2 left-2 bg-yellow-200 text-black px-2 py-1 rounded">
                                            34
                                        </div>
                                    </div>
                                    <div className="p-2 pl-0">
                                        <p className="text-xs text-gray-500 mb-1">{post.heading}</p>
                                        <Link to={`blogdetails/${post._id}`}>
                                            <h3 className="font-semibold text-lg mb-2 leading-tight" onClick={()=>handlenavigate(post._id)}>
                                                {post.title}
                                            </h3>
                                        </Link>
                                        <p className="text-gray-600 text-sm">{post.desc.length > 40 ? post.desc.substring(0, 40) + "..." : post.desc}
</p>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>



        </div>
    )
};

export default RecentBlogs