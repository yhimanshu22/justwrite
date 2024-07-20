import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md cursor-pointer">

                {/* Title */}
                <div className="mb-4">
                    <div className="h-4 bg-gray-200 rounded-full w-48"></div>
                </div>

                {/* Subtitle */}
                <div className="mb-4">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-32"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-24"></div>
                </div>

                {/* Avatar */}
                <div className="flex items-center space-x-2 mb-4">
                    <Circle />
                    <div className="font-thin text-slate-500 text-sm flex-1">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-24"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="text-xl font-semibold mb-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-48"></div>
                </div>

                <div className="text-md font-thin mb-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-full"></div>
                </div>

                {/* Footer */}
                <div className="text-slate-500 text-sm font-thin">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-32"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
