import { BlogCard } from "../components/BlogCard";
import { HomeTags } from "../components/HomeTags";

const careerBlogs = [
    {
        title: 'How to Build a Successful Career in Tech',
        description: 'Discover essential tips and strategies for building a successful career in the tech industry, including networking, skill development, and job hunting.'
    },
    {
        title: 'The Importance of Continuous Learning in Your Career',
        description: 'Continuous learning is crucial for career advancement. Learn about different ways to stay updated with industry trends and enhance your skills.'
    },
    {
        title: 'Effective Resume Writing Tips',
        description: 'A strong resume is key to getting noticed by employers. This blog provides practical tips for writing an effective resume that stands out.'
    },
    {
        title: 'Mastering Job Interviews: Tips and Techniques',
        description: 'Prepare for job interviews with these tips and techniques. Learn how to answer common interview questions and make a great impression.'
    },
    {
        title: 'Navigating Career Transitions',
        description: 'Career transitions can be challenging. This blog offers guidance on how to successfully navigate career changes and find new opportunities.'
    },
    {
        title: 'The Role of Mentorship in Career Growth',
        description: 'Mentorship can significantly impact career growth. Understand the benefits of having a mentor and how to find the right one for your career.'
    },
    {
        title: 'Work-Life Balance: Tips for Maintaining It',
        description: 'Maintaining a work-life balance is essential for overall well-being. Discover strategies for achieving a healthy balance between work and personal life.'
    },
    {
        title: 'Networking Strategies for Career Success',
        description: 'Networking is a powerful tool for career advancement. Learn effective networking strategies to build professional relationships and open up new opportunities.'
    },
    {
        title: 'Remote Work: Challenges and Opportunities',
        description: 'Remote work is becoming increasingly common. This blog explores the challenges and opportunities of working remotely and how to thrive in a remote work environment.'
    },
    {
        title: 'Personal Branding: How to Build and Promote Your Brand',
        description: 'Personal branding is essential for career success. Learn how to build and promote your personal brand to stand out in your industry.'
    },
];




export const Career = () => {
    return (
        <>
            <HomeTags />
            <div className="min-h-screen dark:bg-slate-800 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-md mb-4 text-center text-white">Ace in Career</h1>
                    <button className="bg-gray-500 rounded-full hover:bg-gray-700 text-gray-300 font-bold py-1 px-4  focus:outline-none">
                        Follow
                    </button>
                    <div className="border-b border-slate-600 my-8"></div>

                </div>

                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div>
                            {careerBlogs.map(blog => <BlogCard
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
