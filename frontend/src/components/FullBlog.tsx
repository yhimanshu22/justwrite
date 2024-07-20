import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import { useNavigate } from "react-router-dom";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const navigate = useNavigate();

    const recommendedTags = ["React", "JavaScript", "Devops", "WebDev", "AWS", "Cloudflare", "Machine Learning", "Node.js"];

    return (
        <div className="dark:bg-slate-800 min-h-screen">
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12  w-full pt-12 max-w-screen-xl">
                    <div className="col-span-9 pl-5  pr-10">
                        <div
                            className="text-5xl font-bold text-white mb-4 shadow-md"
                            style={{ fontFamily: 'Anton' }}
                        >
                            {blog.title}
                        </div>

                        <div className="text-slate-400 pt-2">
                            Posted on 7th July 2024
                        </div>

                        <div className="text-white text-lg leading-relaxed whitespace-pre-wrap break-words">
                            {blog.content}
                        </div>
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

