import { BlogCard } from "../../components/BlogCard";
import { HomeTags } from "../../components/HomeTags";

const financeBlogs = [
    {
        title: 'Introduction to Personal Finance',
        description: 'Learn the basics of personal finance, including budgeting, saving, and managing debt effectively.'
    },
    {
        title: 'Investing for Beginners',
        description: 'Understand the fundamentals of investing, including different types of investments and strategies for building a diversified portfolio.'
    },
    {
        title: 'Understanding the Stock Market',
        description: 'Gain insights into how the stock market works, including key concepts like stock valuation, market indices, and trading.'
    },
    {
        title: 'Retirement Planning Strategies',
        description: 'Discover effective strategies for planning your retirement, including the importance of starting early and different retirement account options.'
    },
    {
        title: 'Managing and Reducing Debt',
        description: 'Learn practical tips for managing and reducing debt, including strategies for paying off credit cards, student loans, and mortgages.'
    },
    {
        title: 'Building an Emergency Fund',
        description: 'Understand the importance of having an emergency fund and how to build and maintain one for financial security.'
    },
    {
        title: 'Tax Planning Tips',
        description: 'Explore tips and strategies for effective tax planning, including deductions, credits, and ways to minimize your tax liability.'
    },
    {
        title: 'Understanding Cryptocurrency',
        description: 'Get an introduction to cryptocurrency, including how it works, popular cryptocurrencies, and considerations for investing in digital assets.'
    },
    {
        title: 'Real Estate Investment Basics',
        description: 'Learn the basics of real estate investment, including different types of properties, financing options, and potential returns.'
    },
    {
        title: 'Financial Independence and Early Retirement (FIRE)',
        description: 'Discover the principles of the FIRE movement, including strategies for achieving financial independence and retiring early.'
    },
];



export const Finance = () => {
    return (
        <>
            <HomeTags />
            <div className="min-h-screen dark:bg-slate-800 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-md mb-4 text-center text-white">Manage Your Finances</h1>
                    <button className="bg-gray-500 rounded-full hover:bg-gray-700 text-gray-300 font-bold py-1 px-4  focus:outline-none">
                        Follow
                    </button>
                    <div className="border-b border-slate-600 my-8"></div>

                </div>

                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div>
                            {financeBlogs.map(blog => <BlogCard
                                id={0}
                                authorName={"Himanshu Yadav"}
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
