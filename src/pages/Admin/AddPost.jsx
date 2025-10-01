import React, { useState } from "react";
import { post } from "../../services/EndPoints";

export const AddPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [postimage, setImage] = useState(null);
  const [boldpara, setBoldpara] = useState("");
  const [heading, setHeading] = useState("");
  const [category, setCategory] = useState("");
  console.log('postimage',postimage)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (postimage) {
          formData.append("postimage", postimage); 
      }
      formData.append("title", title);
      formData.append("desc", desc);
     
      formData.append("boldpara", boldpara);
      formData.append("heading", heading);
      formData.append("category", category);

      
      const response = await post("/blog/create", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      console.log("Post added:", response.data);

      // Clear form fields
      setTitle("");
      setDesc("");
      setImage(null);
      setBoldpara("");
      setHeading("");
      setCategory("");
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 w-full max-w-lg transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Add New Blog's Post
        </h2>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Post Image
          </label>
          <input
            type="file"
            id="postimage"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Post Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Heading
          </label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="Enter heading"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Bold Paragraph
          </label>
          <textarea
            value={boldpara}
            onChange={(e) => setBoldpara(e.target.value)}
            placeholder="Write bold paragraph..."
            rows="2"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 resize-none"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Post Description
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Write your post description..."
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 resize-none"
          ></textarea>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.02]"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
