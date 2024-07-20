import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { faBookmark, faComment, faEllipsisH, faMinus, faPlus, faShareAlt, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Right_FullBlog } from "./Right_FullBlog";
import { useState } from "react";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="dark:bg-slate-800 min-h-screen">
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 w-full pt-12 max-w-screen-xl">
                    <div className="col-span-9 pl-5 pr-10">
                        {/* Blog Title */}
                        <div
                            className="text-5xl font-bold text-white mb-4"
                            style={{ fontFamily: 'Anton' }}
                        >
                            {blog.title}
                        </div>

                        {/* Horizontal Line */}
                        <div className="border-b border-slate-600 my-4"></div>

                        {/* Blog Details */}
                        <div className="flex flex-row items-center">
                            <div className="text-slate-300">Posted on 7th July 2024</div>
                            <div className="ml-3 text-white dark:text-white">Follow</div>
                            <div className="ml-3 text-gray-300 font-extralight text-sm text-center">2 min read</div>
                            <div className="ml-3 text-gray-300 font-extralight text-sm text-center">10 days ago</div>
                        </div>

                        {/* Horizontal Line */}
                        <div className="border-b border-slate-600 my-4"></div>

                        {/* Interaction Section */}
                        <div className="flex ml-10 justify-between items-center">
                            {/* Left Section */}
                            <div className="flex space-x-10">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faThumbsUp} className="text-gray-600 dark:text-gray-300" />
                                    <div className="pl-2 text-gray-400 font-extralight text-sm">Upvote</div>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faComment} className="text-gray-600 dark:text-gray-300" />
                                    <div className="pl-2 text-gray-400 font-extralight text-sm">Comment</div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="flex mr-10 space-x-10">
                                <div className="flex items-center text-white font-extralight">
                                    <FontAwesomeIcon icon={faBookmark} className="text-white" />
                                    <div className="pl-2 text-white font-extralight text-sm">Save</div>
                                </div>
                                <div className="flex items-center text-white font-extralight">
                                    <FontAwesomeIcon icon={faShareAlt} className="text-white" />
                                    <div className="pl-2 text-white font-extralight text-sm">Share</div>
                                </div>
                                <div className="relative">
                                    <div onClick={toggleDropdown} className="cursor-pointer px-2">
                                        <FontAwesomeIcon icon={faEllipsisH} className="text-white text-lg" />
                                    </div>
                                    {isDropdownVisible && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                            <div
                                                className="items-start px-4 py-1 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
                                                onClick={async () => { /* logic for show more */ }}
                                            >
                                                <div className="flex items-center">
                                                    <div className="flex items-center justify-center w-5 h-5 border border-gray-800 rounded-full">
                                                        <FontAwesomeIcon icon={faPlus} className="text-gray-600 w-3 h-3" />
                                                    </div>
                                                    <span className="ml-2 text-md font-medium">Show More</span>
                                                </div>
                                                <p className="text-sm text-gray-500">Recommend more stories like this</p>
                                            </div>
                                            <div
                                                className="items-start px-4 py-1 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
                                                onClick={async () => { /* logic for show less */ }}
                                            >
                                                <div className="flex items-center">
                                                    <div className="flex items-center justify-center w-5 h-5 border border-gray-800 rounded-full">
                                                        <FontAwesomeIcon icon={faMinus} className="text-gray-600 w-3 h-3" />
                                                    </div>
                                                    <span className="ml-2 text-md font-medium">Show Less</span>
                                                </div>
                                                <p className="text-sm text-gray-500">Show less stories like this</p>
                                            </div>
                                            <div
                                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                onClick={async () => { /* logic for follow author */ }}
                                            >Follow Author</div>
                                            <div
                                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                onClick={async () => { /* logic for mute author */ }}
                                            >Mute Author</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Horizontal Line */}
                        <div className="border-b border-slate-600 my-4"></div>

                        {/* Blog Content */}
                        <div className="text-white text-lg leading-relaxed whitespace-pre-wrap break-words">
                            {blog.content}
                        </div>

                        {/* Bottom Horizontal Line */}
                        <div className="border-b border-slate-600 my-4 shadow-sm"></div>
                    </div>

                    {/* Right Sidebar Component */}
                    <Right_FullBlog blog={blog} />
                </div>
            </div>
        </div>
    );
}

export default FullBlog;
