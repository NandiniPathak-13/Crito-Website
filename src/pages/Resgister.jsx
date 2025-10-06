import React, { useState } from "react";
import { post } from "../services/EndPoints"; // yeh tumhara custom axios wrapper hai

const Register = () => {
  const [formData, setFormData] = useState({
    Fullname: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    Profile: null 
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await post(
        "/auth/register",
        formData,
        {
          headers: {
            "Content-Type":  "multipart/form-data", // ✅ JSON ke liye correct
          },
        }
      );
      setMessage("Account created successfully ✅");
    } catch (err) {
      setMessage("Error: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

        {message && (
          <p className="text-center text-sm mb-4 text-red-500">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Fullname */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="Fullname"
              value={formData.Fullname}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* PhoneNumber */}
          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
