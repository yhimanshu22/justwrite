import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div className="dark:bg-slate-800 min-h-screen">
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
                    <div className="col-span-9 pr-10">
                        <div className="text-5xl font-extrabold text-white">
                            {blog.title}
                        </div>
                        <div className="text-slate-400 pt-2 ">
                            Post on 7th July 2024
                        </div>
                        <div className="pt-5  text-white text-lg">
                            {blog.content}
                        </div>
                    </div>

                    <div className="col-span-3 border-l  border-slate-300 pl-6">
                        <div className="text-slate-400 text-lg  pb-4">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullBlog;
