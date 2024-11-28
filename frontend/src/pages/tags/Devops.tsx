import { BlogCard } from "../../components/BlogCard";
import { HomeTags } from "../../components/HomeTags";

const devopsBlogs = [
    {
        title: 'Introduction to DevOps',
        description: 'DevOps is a set of practices that combines software development and IT operations. This blog covers the basics of DevOps, its principles, and benefits for organizations.'
    },
    {
        title: 'Continuous Integration and Continuous Deployment (CI/CD) Explained',
        description: 'CI/CD is a key practice in DevOps. This blog explains the concepts of continuous integration and continuous deployment, their importance, and how to implement them.'
    },
    {
        title: 'Automating Infrastructure with Infrastructure as Code (IaC)',
        description: 'Infrastructure as Code allows you to manage and provision infrastructure through code. Learn about tools like Terraform and CloudFormation and how to use them in your DevOps pipeline.'
    },
    {
        title: 'Monitoring and Logging in DevOps',
        description: 'Monitoring and logging are crucial for maintaining application health and performance. This blog covers popular tools and techniques for monitoring and logging in a DevOps environment.'
    },
    {
        title: 'Containerization with Docker',
        description: 'Docker is a popular tool for containerization. This blog explains the basics of Docker, how to create and manage containers, and its benefits for DevOps.'
    },
    {
        title: 'Orchestrating Containers with Kubernetes',
        description: 'Kubernetes is a powerful container orchestration tool. Learn how Kubernetes helps manage, scale, and deploy containerized applications in a DevOps workflow.'
    },
    {
        title: 'DevSecOps: Integrating Security into DevOps',
        description: 'DevSecOps emphasizes security at every stage of the DevOps lifecycle. This blog discusses the principles of DevSecOps and tools for integrating security into your DevOps practices.'
    },
    {
        title: 'Using Jenkins for Continuous Integration',
        description: 'Jenkins is a widely-used tool for continuous integration. This blog covers how to set up and use Jenkins to automate the build and deployment process in your projects.'
    },
    {
        title: 'The Role of Automation in DevOps',
        description: 'Automation is a cornerstone of DevOps. Explore the different aspects of automation in DevOps, from code testing to deployment, and the tools that can help.'
    },
    {
        title: 'DevOps Best Practices and Anti-Patterns',
        description: 'This blog discusses best practices for implementing DevOps in your organization and common pitfalls to avoid. Learn how to create a culture that supports DevOps principles.'
    },
];


export const Devops = () => {
    return (
        <>
            <HomeTags />
            <div className="min-h-screen dark:bg-slate-800 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-md mb-4 text-center text-white">DevOps is future</h1>
                    <button className="bg-gray-500 rounded-full hover:bg-gray-700 text-gray-300 font-bold py-1 px-4  focus:outline-none">
                        Follow
                    </button>
                    <div className="border-b border-slate-600 my-8"></div>

                </div>

                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div>
                            {devopsBlogs.map(blog => <BlogCard
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
