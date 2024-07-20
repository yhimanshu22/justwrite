import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { notifyError, notifySuccess } from "./Notification";
import axios from "axios";
import { BACKEND_URL } from "../config";


// Define the BlogCardProps interface
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
    description: string;
}

// BlogCard component
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="p-4 border-b border-slate-200 rounded-lg dark:bg-slate-800 dark:text-white max-w-screen-md cursor-pointer">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar name={authorName} />
                    <div className="font-extralight pl-2 text-sm">{authorName}</div>
                    <div className="flex flex-col items-center pl-2">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-slate-500 text-sm">
                        {publishedDate}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faThumbsUp} className="text-gray-600 dark:text-gray-300" />
                        <div className="pl-2 font-extralight text-sm">Upvote</div>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faComment} className="text-gray-600 dark:text-gray-300" />
                        <div className="pl-2 font-extralight text-sm">Comment</div>
                    </div>
                    <div className="relative">
                        <div onClick={toggleDropdown} className="cursor-pointer px-2">
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </div>
                        {isDropdownVisible && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">

                                <div
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={async (event) => {

                                        event.preventDefault(); // Prevent the default link behavior

                                        try {
                                            const response = await axios.put(`${BACKEND_URL}/api/v1/blog/update`, {
                                                headers: {
                                                    Authorization: `Bearer ${localStorage.getItem("token")}`
                                                }
                                            });

                                            // Handle successful response
                                            if (response.status === 200) {
                                                navigate(`/blog/${response.data.id}`);
                                                notifySuccess('Post Updated Successfully');
                                            } else {
                                                notifyError('Failed to update the post');
                                            }

                                        } catch (error) {
                                            console.log(error);
                                            notifyError('Error in updating');
                                        }

                                        setDropdownVisible(false);
                                    }}
                                >
                                    Update
                                </div>
                                <div
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={async (event) => {
                                        event.preventDefault(); // Prevent the default link behavior

                                        try {
                                            const response = await axios.post(`${BACKEND_URL}/api/v1/blog/delete`, {
                                                id // Ensure you have the blog ID available in the context
                                            }, {
                                                headers: {
                                                    Authorization: `Bearer ${localStorage.getItem("token")}`
                                                }
                                            });

                                            // Handle successful response
                                            if (response.status === 200) {
                                                navigate(`/blogs`);
                                                notifySuccess('Post Deleted Successfully');
                                            } else {
                                                notifyError('Failed to delete the post');
                                            }

                                        } catch (error) {
                                            if (error.response && error.response.status === 403) {
                                                notifyError('You do not have permission to delete this post');
                                            } else {
                                                notifyError('An error occurred while trying to delete the post');
                                            }
                                        }

                                        setDropdownVisible(false);
                                    }}
                                >
                                    Delete
                                </div>



                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Link to={`/blog/${id}`} className="block">
                <div className="text-xl dark:text-white font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md dark:text-white font-thin">
                    {content.slice(0, 100)}...
                </div>
                <div className="text-slate-500 dark:text-white text-sm font-thin pt-4">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            </Link>
        </div>
    );
};

// Circle component
export function Circle() {
    return (
        <div className="h-1 w-1 rounded-full bg-slate-500 dark:bg-slate-400"></div>
    );
}

// Avatar component
export function Avatar({ name, size = "small", onLogout }: { name: string, size?: "small" | "big", onLogout?: () => void }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="relative">
            <div
                className={`relative inline-flex items-center justify-center overflow-hidden
                     bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"} cursor-pointer`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <span
                    className={`${size === "small" ? "text-xs" : "text-md"} font-bold
                        text-gray-200 dark:text-gray-200`}
                >
                    {name[0]}
                </span>
            </div>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                    {onLogout && (
                        <button
                            onClick={onLogout}
                            title="Logout"
                            className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-center"
                        > Logout
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
