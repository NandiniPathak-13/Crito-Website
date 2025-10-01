import Footer from '../components/Footer';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../services/EndPoints"; 

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
     email: "", password: "" 
    });
    
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, 
        [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    setLoading(true);
    setError("");

    try {
      const response = await post('/auth/login', formData, { withCredentials: true });
      const data = response.data
      
      navigate("/admin"); 
    } catch (err) {
      console.error(err);
    
    } finally {
      setLoading(false);
    }
  };

    return (
        <div>


            <div className=' px-6 md:px-16 lg:px-28 xl:px-32'>
                <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
                    <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
                        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>

                        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="Email"
                                    name="Email"
                                    value={formData.Email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="Password"
                                    name="Password"
                                    value={formData.Password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors disabled:opacity-50"
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>

                        {/* Extra Links */}
                        <p className="text-sm text-center text-gray-600 mt-4">
                            Don’t have an account?{" "}
                            <a href="/register" className="text-blue-600 hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>
        </div>
    )
};

export default Login