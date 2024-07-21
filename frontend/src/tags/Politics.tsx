import { BlogCard } from "../components/BlogCard";
import { HomeTags } from "../components/HomeTags";

const politicsBlogs = [
    {
        title: 'The Basics of Political Systems',
        description: 'Understand the different types of political systems around the world, including democracy, authoritarianism, and monarchy.'
    },
    {
        title: 'The Role of Media in Politics',
        description: 'Explore how media influences politics, public opinion, and election outcomes in various countries.'
    },
    {
        title: 'Understanding Electoral Systems',
        description: 'Learn about different electoral systems, including proportional representation and first-past-the-post, and their impact on election results.'
    },
    {
        title: 'Political Parties and Their Functions',
        description: 'Discover the role of political parties in democratic societies, including how they are formed and their functions within the political system.'
    },
    {
        title: 'The Impact of Political Campaigns',
        description: 'Examine how political campaigns are conducted, including strategies, fundraising, and the role of digital media in modern campaigns.'
    },
    {
        title: 'Political Ideologies Explained',
        description: 'Understand the core principles of major political ideologies, such as liberalism, conservatism, socialism, and libertarianism.'
    },
    {
        title: 'The Intersection of Politics and Economics',
        description: 'Explore how political decisions impact economic policies, and how economic conditions influence political stability and elections.'
    },
    {
        title: 'International Relations and Global Politics',
        description: 'Learn about the key concepts in international relations, including diplomacy, conflict resolution, and the role of international organizations.'
    },
    {
        title: 'The Influence of Lobbying and Interest Groups',
        description: 'Examine how lobbying and interest groups affect political decisions, and the ethical considerations surrounding their influence.'
    },
    {
        title: 'Public Policy and Governance',
        description: 'Discover how public policies are formulated and implemented, and the role of government institutions in shaping policy decisions.'
    },
];




export const Politics = () => {
    return (
        <>
            <HomeTags />
            <div className="min-h-screen dark:bg-slate-800 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-md mb-4 text-center text-white">Politics</h1>
                    <button className="bg-gray-500 rounded-full hover:bg-gray-700 text-gray-300 font-bold py-1 px-4  focus:outline-none">
                        Follow
                    </button>
                    <div className="border-b border-slate-600 my-8"></div>

                </div>

                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div>
                            {politicsBlogs.map(blog => <BlogCard
                                id={0}
                                authorName={"James "}
                                title={blog.title}
                                content={blog.description}
                                publishedDate={"21 July 2024"}
                            />)}
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};
