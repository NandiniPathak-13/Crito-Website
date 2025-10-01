import User from "../models/user.js";
import bcrypt from "bcryptjs";
 import jwt from "jsonwebtoken"

const Register = async (req, res) => {
  try {
    const { Fullname, Email, Password, PhoneNumber } = req.body;

    // Check if user exists
    const existUser = await User.findOne({ Email });
    if (existUser) {
      return res.status(303).json({ success: false, message: "User Already Exist Please Login" });
    }

    
    const hashedPassword = await bcrypt.hash(Password, 10);

    // File
    const imagePath = req.file.filename
    console.log("FILE UPLOADED:", req.file);

    const NewUser = new User({
      Fullname,
      Email,
      Password: hashedPassword,
      PhoneNumber,
      Profile: imagePath,
    });

    await NewUser.save();

    return res.status(200).json({
      success: true,
      message: "User Registered",
      user: NewUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal Error" });
  }
};


const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body
    if (!Email || !Password) {
      return res.status(400).json({ success: false, message: "All feild are required" })
    }
    const FindUser = await User.findOne({ Email })
    if (!FindUser) {
      return res.status(400).json({ success: false, message: "Please Register" })

    }

    const ComaparePass = await bcrypt.compare(Password, FindUser.Password)
    if (!ComaparePass) {
      return res.status(400).json({ success: false, message: "Invalid Password" })


    }



    const token=jwt.sign({userId:FindUser._id},process.env.JWT_SECRET)

    res.cookie('token',token,{
    
      httpOnly: true,
      secure:false,
      maxAge: 3 * 24 * 60 * 60 * 1000
    })
      console.log("JWT Token:", token)
    return res.status(200).json({ success: true, message: "Login Successfully", user: FindUser, token })


  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: "Internal erver Error" })

  }
}


const Logout =async(req, res)=>{
  try {
    res.clearCookie('token')
  return res.status(200).json({ success: true, message: "Logout" })

  } catch (error) {
       console.log(error)
    return res.status(500).json({ success: false, message: "Internal erver Error" })
  }
}

export { Register, Login , Logout};
