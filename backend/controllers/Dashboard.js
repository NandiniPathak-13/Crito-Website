import PostBlog from "../models/Blogs.js"
import User from "../models/user.js"
import fs from 'fs'
import path from 'path'




const GetAllData = async (req, res) => {

    try {
        const Users = await User.find()
        const Posts = await PostBlog.find()
        // any other things

        if (!Users && !Posts) {
            return res.status(404).json({ success: false, message: "No Data Found" });

        }

        return res.status(200).json({ success: true, Users, Posts });


    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Error" });


    }
}


const GetUser = async (req, res) => {
    try {
        const Users = await User.find()

        // any other things

        if (!Users) {
            return res.status(404).json({ success: false, message: "No Data Found" });

        }

        return res.status(200).json({ success: true, Users });


    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Error" });


    }
}


const DeleteUser = async (req, res) => {
    try {

        const userId = req.params.userId
        const ExistUSer = await User.findById(userId)
        if (!ExistUSer) {
             return res.status(404).json({ success: false, message: "No Data Found" });

        }

        if (ExistUSer.Role == 'admin') {
        return res.status(404).json({ success: false, message: "Sorry Yur Are Admin, You can't Delete Your Account" });

        }


        if (ExistUSer.Profile) {
                    const profilepath = path.join('public/images', ExistUSer.Profile)
                    fs.promises.unlink(profilepath)
                        .then(() => console.log('post image deleted'))
                        .catch(error => console.log('error deleting post image :', error))
                }
        const UserDelete = await User.findByIdAndDelete(userId)
         return res.status(200).json({ success: true, message: "User's Account Deleted" });


    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Error" });


    }
}

export { GetAllData, GetUser, DeleteUser }