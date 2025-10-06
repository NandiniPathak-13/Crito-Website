import { useEffect, useState } from "react";
import { BaseUrl, get } from "../../services/EndPoints";

import { Link, useNavigate } from "react-router-dom";


export const AllPosts = () => {
  const [post, setPost] = useState([])
  console.log('posts', post)
  const [blogs, setblogposts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    const GetAllData = async () => {
      try {
        const response = await get("/blog/getpost");
        const data = response.data;
        setPost(data.posts);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    GetAllData()
  })
  // const openEditModal = (post) => {
  //   setCurrentPost(blogs);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setCurrentPost(null);
  // };

  // const handleUpdate = () => {
  //   if (currentPost) {
  //     setBlogs((prevPosts) =>
  //       prevPosts.map((p) =>
  //         p.id === currentPost.id ? currentPost : p
  //       )
  //     );
  //     closeModal();
  //   }
  // };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">All Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {post && post.map((post, index) => {
            return (

              <div className=" pt-[2rem] border-b  border-gray-300 transition duration-300">
                <div className="relative">
                  <img src={`${BaseUrl}/images/${post.image}`} alt="titllee" className="w-full h-48 object-cover " />
                  <div className="absolute top-2 left-2 bg-yellow-200 text-black px-2 py-1 rounded">
                    {post.createdAt ? new Date(post.createdAt).getDate() : ""}
                  </div>
                </div>
                <div className="p-2 pl-0">
                  <p className="text-sm text-gray-500">{post.heading}</p>
                  <div >
                    <h3 className="text-lg font-semibold mt-1   " onClick={() => handlenavigate(post._id)}>
                      {post.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-[0.9rem] mt-2">
                    {post.desc && post.desc.length > 30
                      ? post.desc.slice(0, 30) + "..."
                      : post.desc}
                  </p>
                  <div className="flex justify-end mt-3 space-x-2">
                    <button
                      onClick={() => openEditModal(blogs)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        setBlogs((prev) =>
                          prev.filter((p) => p.id !== blogs.id)
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

            )
          })}
        </div>
      </div>

      {/* Edit Modal */}
      {/* {isModalOpen && currentPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Edit Post</h3>

            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={currentPost.title}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, title: e.target.value })
              }
            />

            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              value={currentPost.desc}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, desc: e.target.value })
              }
            ></textarea>

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={closeModal}
                className="px-3 py-1 rounded border hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AllPosts;
