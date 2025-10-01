import { error } from "console"
import PostBlog from "../models/Blogs.js"
import fs from 'fs'
import path from 'path'

const Create = async (req, res) => {
    try {

        const { title, desc, heading,category,boldpara } = req.body
        const imagePath = req.file.filename
        const CreateBlog = new PostBlog({
            title,
            desc,
            image: imagePath,
            heading,
            category,
            boldpara

        })



        await CreateBlog.save()
        return res.status(200).json({ success: true, message: "Post Created", post: CreateBlog });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Error" });


    }
}


const deletePost = async (req, res) => {
    try {
        const postId = req.params.postId
        const FindPost = await PostBlog.findById(postId)

        if (!FindPost) {
            return res.status(404).json({ success: false, message: "Post Not found" });
        }
        if (FindPost.image) {
            const profilepath = path.join('public/images', FindPost.image)
            fs.promises.unlink(profilepath)
                .then(() => console.log('post image deleted'))
                .catch(error => console.log('error deleting post image :', error))
        }

        const deletedpost = await PostBlog.findByIdAndDelete(postId)
        return res.status(200).json({ success: true, message: "Post deleted successfully", post: deletePost });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Error" });


    }
}



const GetPost = async (req, res) => {
    try {
        const posts = await PostBlog.find().sort({ createdAt: -1 });

        if (!posts) {
            return res.status(404).json({ success: false, message: "Post Not found" });
        }

        const categories = await PostBlog.aggregate([
            {
                $group: {
                    _id: "$category",
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);


        return res.status(200).json({ success: true, posts, categories });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Error" });

    }
}


const Update = async (req, res) => {
    try {
        const { title, desc, heading } = req.body
        const postId = req.params.postId;
        const UpdatePost = await PostBlog.findById(postId)
        if (!UpdatePost) {
            return res.status(500).json({ success: false, message: "Post not found" });

        }


        if (title) {
            UpdatePost.title = title
        }

        if (heading) {
            UpdatePost.heading = heading
        }
        if (desc) {
            UpdatePost.desc = desc
        }
        if (req.file) {
            UpdatePost.image = req.file.filename
        }

        await UpdatePost.save()
        return res.status(200).json({ success: true, message: "Post Updted successfully", post: UpdatePost });


    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Error" });


    }
}
export { Create, deletePost, GetPost, Update }