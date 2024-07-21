import { Appbar } from "../components/Appbar";
import { useNavigate } from "react-router-dom";

const topics = {
    AWS: "AWS content goes here...",
    MachineLearning: "Machine Learning content goes here...",
    Devops: "DevOps content goes here...",
    Cloudflare: "AWS content goes here...",
    React: "React Component goes here",
    JavaScript: "JavaScript Component goes here",
    Nodejs: "React Component goes here",
    Finance: "finance here",
    Career: "finance here",
    Politics: "politics here",
    Explore: "explore goes here "
};

export const HomeTags = () => {
    const navigate = useNavigate();

    return (
        <>
            <Appbar />
            <div className="bg-gray-800 flex justify-center pt-2">
                {Object.keys(topics).map((tag) => (
                    <button
                        key={tag}
                        onClick={() => navigate(`/tags/${tag}`)}
                        className={`px-4 py-2 m-2 text-sm rounded-full hover:outline hover:outline-gray-400 transition-colors duration-300 bg-gray-700 text-gray-300 hover:bg-gray-600`}
                    >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </button>
                ))}
            </div>
        </>

    );
};