import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Home,
    Users,
    Calendar,
    Hospital,
    LogOut,
    Menu,
    X,
    Stethoscope,
} from "lucide-react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    
    return (
        <div className="flex">
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="p-2 md:hidden absolute top-4 left-4 z-50 bg-gray-100 rounded-lg shadow"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <aside
                className={`bg-gray-900 text-white h-screen p-4 flex flex-col shadow-xl transition-all duration-300 ${isOpen ? "w-64" : "w-20"
                    }`}
            >
                <div className="flex items-center justify-between mb-10">
                    <h1
                        className={`text-xl font-bold tracking-wide transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"
                            }`}
                    >
                        Admin Panel
                    </h1>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 space-y-2">
                    <Link to={'/admin'}>
                        <h3 className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-700 transition-colors">
                            <Home size={20} /> Dashboard

                        </h3>
                        <span
                            className={`text-base font-medium transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"
                                }`}
                        >

                        </span>
                    </Link>
                    <Link to={'/admin/addpost'}>
                        <h3 className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-700 transition-colors">
                            <Home size={20} /> Add Post
                        </h3>
                        <span
                            className={`text-base font-medium transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"
                                }`}
                        >

                        </span>
                    </Link>

                    <Link to={'/admin/users'}>
                        <h3 className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-700 transition-colors">
                            <Users size={20} /> All Users
                        </h3>
                        <span
                            className={`text-base font-medium transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"
                                }`}
                        >

                        </span>
                    </Link>
                     <Link to={'/admin/allposts'}>
                        <h3 className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-700 transition-colors">
                            <Home size={20} /> All Posts
                        </h3>
                        <span
                            className={`text-base font-medium transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"
                                }`}
                        >

                        </span>
                    </Link>


                </nav>

                {/* Logout */}
                <button className="flex items-center gap-4 p-3 rounded-xl hover:bg-red-600 transition-colors">
                    <LogOut size={20} />
                    <span
                        className={`text-base font-medium transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"
                            }`}
                    >
                        Logout
                    </span>
                </button>
            </aside>

        </div>
    );
}
