import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
    return (
        <div className="border-b flex dark:bg-slate-800 justify-between px-10 py-4">
            <Link to={'/blogs'} className="flex flex-col justify-center items-center cursor-pointer">
                <span className="text-5xl dark:text-white font-bold text-center"
                    style={{ fontFamily: 'Anton' }}>JustWrite</span>
            </Link>

            <div className="flex items-center">

                <Link to={`/publish`}>
                    <button type="button" className="px-6 mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5">
                        Write
                    </button>
                </Link>

                <Avatar size={"big"} name="Ajay" />

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
