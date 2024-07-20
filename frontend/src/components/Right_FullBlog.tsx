import { useNavigate, Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Blog as BlogType } from "../hooks";

// Define Blog type
type Blog = {
    id: number;
    title: string;
};

export const Right_FullBlog = ({ blog }: { blog: BlogType }) => {
    const navigate = useNavigate();

    const [topBlogs, setTopBlogs] = useState<Blog[]>([]);
    const capitalizeFirstLetter = (name: string | undefined) => {
        if (!name) return '';
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };


    useEffect(() => {
        // Define the DefaultBlogs array with the Blog type
        const DefaultBlogs: Blog[] = [
            { id: 14, title: "Blog 1: The Joys of Morning Walks" },
            { id: 15, title: "Blog 2: The Art of Cultivating Gratitude" },
            { id: 16, title: "Blog 3: Embracing Change: A Path to Personal Growth" },
            { id: 40, title: "write about how ai developed" }
        ];

        // Fetch the top blog picks from your API
        const fetchTopBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/top-picks`);

                if (response.data.length === 0) {
                    // Set default blogs if no top picks are available
                    setTopBlogs(DefaultBlogs);
                } else {
                    setTopBlogs(response.data);
                }
            } catch (error) {
                console.error("Error fetching top blogs:", error);
                setTopBlogs(DefaultBlogs);
            }
        };

        fetchTopBlogs();
    }, []);

    const recommendedTags = ["React", "JavaScript", "Devops", "WebDev", "AWS", "Cloudflare", "Machine Learning", "Node.js"];

    return (
        <div className="col-span-3 border-l border-slate-300 pl-6">
            <div className=" text-lg text-white">
                Author
            </div>

            <div className="flex items-center text-white">
                <div className="pr-4 flex flex-col justify-center">
                    <Avatar size="big" name={capitalizeFirstLetter(blog.author.name) || "Anonymous"} />
                </div>
                <div>
                    <div className="text-xl font-bold">
                        {capitalizeFirstLetter(blog.author.name) || "Anonymous"}
                    </div>
                    <div className="pt-2 text-slate-400">
                        Where words ignite worlds and curiosity finds its compass.
                    </div>
                </div>
            </div>


            <div className="text-white mt-3 text-lg flex-col">
                <div className="text-white text-lg">Top Picks for You</div>
                <div className="mt-2 mb-2 font-extralight">
                    {topBlogs.length > 0 ? (
                        topBlogs.map((topBlog) => (
                            <Link
                                key={topBlog.id}
                                to={`/blog/${topBlog.id}`}
                                className="block bg-gray-500 hover:bg-gray-700 text-sm p-2 mb-1 rounded-lg transition-colors"
                            >
                                {topBlog.title}
                            </Link>
                        ))
                    ) : (
                        <div className="text-gray-400">No top picks available</div>
                    )}
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
                <div className="text-white text-lg">Who to Follow</div>
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
                    Click on any story to easily add it to your reading list or a custom list that you can share.
                </div>
            </div>
        </div>
    );
};

export default Right_FullBlog;
