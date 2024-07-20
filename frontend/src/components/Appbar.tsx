import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";
import { notifySuccess } from "./Notification";

export const Appbar = () => {
    const navigate = useNavigate();


    const handleLogout = () => {
        // Clear the token from local storage and redirect
        localStorage.removeItem("token");

        navigate('/signin')
        notifySuccess('Logout Successfull');
    };

    return (
        <div className="border-b flex dark:bg-slate-800 justify-between px-10 py-4">
            <Link to={'/blogs'} className="flex flex-col justify-center items-center cursor-pointer">
                <span className="text-5xl dark:text-white font-bold text-center"
                    style={{ fontFamily: 'Anton' }}>JustWrite</span>
            </Link>


            <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="relative w-1/3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="block w-full px-4 py-2 text-gray-900 dark:text-gray-100 border rounded-full focus:outline-none shadow-sm dark:bg-slate-700 dark:border-slate-600 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>


                <Link to={`/publish`}>
                    <button type="button" className="px-6 mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5">
                        Write
                    </button>
                </Link>

                <Avatar size={"big"} name="Himanshu" onLogout={handleLogout} />

                <div className="ml-4">
                    <Link to="/signin">
                        <button type="button" className="text-gray-700 dark:text-white hover:text-gray-900 font-medium">
                            Sign In
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button type="button" className="ml-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
