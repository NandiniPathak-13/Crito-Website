import mongoose from "mongoose";

// User Schema
const UserSchema = new mongoose.Schema(
  {
    Fullname: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    
    },
    Profile: {
      type: String,
      
    },
    Password: {
      type: String,
      required: true,
      minlength: 6,
    },
    PhoneNumber: {
      type: String,
      required: false,
     
    },
    Role: {
      type: String,
      enum: ["user", "admin"], 
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } 
);

const User = mongoose.model("Users", UserSchema);
export default User;
