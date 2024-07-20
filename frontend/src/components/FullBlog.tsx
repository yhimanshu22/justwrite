import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import { useNavigate } from "react-router-dom";
import { faBookmark, faComment, faEllipsisH, faMinus, faPlus, faShareAlt, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const navigate = useNavigate();

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const recommendedTags = ["React", "JavaScript", "Devops", "WebDev", "AWS", "Cloudflare", "Machine Learning", "Node.js"];

    return (
        <div className="dark:bg-slate-800 min-h-screen">
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12  w-full pt-12 max-w-screen-xl">
                    <div className="col-span-9 pl-5 pr-10">

                        {/* Blog Content */}
                        <div
                            className="text-5xl font-bold text-white mb-4"
                            style={{ fontFamily: 'Anton' }}
                        >
                            {blog.title}
                        </div>
                        <div className="border-b border-slate-600 my-4"></div>
                        <div className="flex flex-row items-center ">
                            <div className="text-slate-300">
                                Posted on 7th July 2024
                            </div>
                            <div className=" ml-3 text-white dark:text-white">
                                Follow
                            </div>
                            <div className="ml-3 text-gray-300 font-extralight text-sm text-center">
                                2min read
                            </div>
                            <div className="ml-3 text-gray-300 font-extralight text-sm text-center">
                                10 day ago
                            </div>


                        </div>

                        <div className="border-b border-slate-600 my-4"></div>

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
                                                className=" items-start px-4 py-1 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
                                                onClick={async () => { /* logic for show more */ }}
                                            >
                                                <div className="flex items-center">
                                                    <div className="flex items-center justify-center w-5 h-5 border border-gray-800 rounded-full">
                                                        <FontAwesomeIcon icon={faPlus} className="text-gray-600 w-3 h-3" />
                                                    </div>
                                                    <span className="ml-2 text-md font-md">Show More</span>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    Recommend more stories like this
                                                </p>
                                            </div>
                                            {/* Show Less Section */}
                                            <div
                                                className="items-start px-4 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
                                                onClick={async () => { /* logic for show less */ }}
                                            >
                                                <div className="flex items-center">
                                                    <div className="flex items-center justify-center w-5 h-5 border border-gray-800 rounded-full">
                                                        <FontAwesomeIcon icon={faMinus} className="text-gray-600 w-3 h-3" />
                                                    </div>
                                                    <span className="ml-2 text-md font-md">Show Less</span>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    Show less stories like this
                                                </p>
                                            </div>

                                            <div
                                                className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                                                onClick={async () => { {/* logic for follow author */ } }}
                                            >Follow Author</div>

                                            <div
                                                className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                                                onClick={async () => { {/* logic for mute author */ } }}
                                            >Mute Author
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-slate-600 my-4"></div>

                        <div className="text-white text-lg leading-relaxed whitespace-pre-wrap break-words">
                            {blog.content}
                        </div>

                        {/* Bottom Horizontal Line */}
                        <div className="border-b border-slate-600 my-4 shadow-sm"></div>

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
                                                className=" items-start px-4 py-1 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
                                                onClick={async () => { /* logic for show more */ }}
                                            >
                                                <div className="flex items-center">
                                                    <div className="flex items-center justify-center w-5 h-5 border border-gray-800 rounded-full">
                                                        <FontAwesomeIcon icon={faPlus} className="text-gray-600 w-3 h-3" />
                                                    </div>
                                                    <span className="ml-2 text-md font-md">Show More</span>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    Recommend more stories like this
                                                </p>
                                            </div>
                                            {/* Show Less Section */}
                                            <div
                                                className="items-start px-4 text-gray-800 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
                                                onClick={async () => { /* logic for show less */ }}
                                            >
                                                <div className="flex items-center">
                                                    <div className="flex items-center justify-center w-5 h-5 border border-gray-800 rounded-full">
                                                        <FontAwesomeIcon icon={faMinus} className="text-gray-600 w-3 h-3" />
                                                    </div>
                                                    <span className="ml-2 text-md font-md">Show Less</span>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    Show less stories like this
                                                </p>
                                            </div>
                                            <div
                                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                onClick={async () => { {/* logic for updates  */ } }}
                                            >Follow Author</div>
                                            <div
                                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                onClick={async () => { {/* logic for delete  */ } }}
                                            >Mute Author</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>


                        <div className="border-b border-slate-600 my-4"></div>
                    </div>


                    <div className="col-span-3 border-l border-slate-300 pl-6">
                        <div className="text-slate-400 text-lg pb-4">
                            Author
                        </div>

                        <div className="flex items-center text-white">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-400">
                                    Where words ignite worlds and curiosity finds its compass.
                                </div>
                            </div>
                        </div>

                        <div className="text-white text-lg  flex-col">Top Picks for You
                            <div className="mt-2 mb-2 font-extralight">
                                <div className="bg-red-500 text-sm">blog1</div>
                                <div className="bg-red-500 text-sm">blog2</div>
                                <div className="bg-red-500 text-sm">blog3</div>
                                <div className="bg-red-500 text-sm">blog4</div>
                            </div>

                        </div>

                        <div>
                            <div className="text-white text-lg">Recommended Topics</div>
                            <div className="flex flex-wrap gap-2 mt-2 mb-3">
                                {recommendedTags.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => navigate(`/tags/${tag}`)}
                                        className="bg-gray-500 hover:bg-gray-700 text-white text-sm font-extralight py-1 px-2 rounded-full focus:outline-none"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="text-white text-lg ">Who to Follow</div>
                            <div className="text-gray-500 dark:text-white font-extralight">
                                <div>User 1</div>
                                <div>User 2</div>
                                <div>User 3</div>
                                <div>User 4</div>

                            </div>
                        </div>


                        <div>
                            <div className="text-white text-lg mt-1">Reading List</div>
                            <div className="pt-1 font-extralight text-slate-400">
                                Click the on any story to easily add it to your reading list or a custom list that you can share.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullBlog;

