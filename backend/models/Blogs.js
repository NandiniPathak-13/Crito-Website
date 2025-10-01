import mongoose from "mongoose";



const PostSchema = new mongoose.Schema({

    title: {
        type: String
    },
    heading: {
        type: String
    },
    desc: {
        type: String
    },
    image: {
        type: String
    },
    
    category: {
        type: String
    },
    boldpara:{
        type: String
    }
}, { timestamps: true })


const PostBlog = mongoose.model("Posts", PostSchema)

export default PostBlog