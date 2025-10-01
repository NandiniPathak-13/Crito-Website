import express from "express"
import { Create , deletePost, GetPost, Update,} from "../controllers/Blog.js"
import { IsAdmin } from "../middleware/Admin.js"
import upload from '../middleware/Multer.js'


const BlogsRoutes= express.Router()

BlogsRoutes.post('/create', IsAdmin,upload.single('postimage'),Create)
BlogsRoutes.delete('/delete/:postId', IsAdmin,deletePost)
BlogsRoutes.get('/getpost', GetPost)
BlogsRoutes.put('/update/:postId', IsAdmin, upload.single('postimage'), Update)


export default BlogsRoutes