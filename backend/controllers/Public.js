import PostBlog from "../models/Blogs.js";


const GetSinglePost = async(req , res)=>{
    try {
         const postId= req.params.id
         const FindPost= await PostBlog.findById(postId)
         

         if (!FindPost) {
              return res.status(400).json({ success: false, message: "Post not found" });
         }
           return res.status(200).json({ success: true, Post:FindPost });
    } catch (error) {
          console.log(error);
        return res.status(500).json({ success: false, message: "Internal Error" });


    }
}

export {GetSinglePost}