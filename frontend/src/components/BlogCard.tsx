import { Link } from "react-router-dom";

// Define the BlogCardProps interface
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

// BlogCard component
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="p-4 border-b border-slate-200 rounded-lg dark:bg-slate-800 dark:text-white max-w-screen-md cursor-pointer">
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

                <div className="text-xl dark:text-white font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md dark:text-white font-thin">
                    {content.slice(0, 100)}...
                </div>
                <div className="text-slate-500 dark:text-white text-sm font-thin pt-4">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            </div>
        </Link>
    );
};

// Circle component
export function Circle() {
    return (
        <div className="h-1 w-1 rounded-full bg-slate-500 dark:bg-slate-400"></div>
    );
}

// Avatar component
export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return (
        <div
            className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}
        >
            <span
                className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}
            >
                {name[0]}
            </span>
        </div>
    );
}
