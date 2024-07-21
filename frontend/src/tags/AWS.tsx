import { BlogCard } from "../components/BlogCard";
import { HomeTags } from "../components/HomeTags";

const awsBlogs = [
    {
        title: 'Getting Started with AWS',
        description: 'Amazon Web Services (AWS) provides a comprehensive suite of cloud services. This blog covers the basics of AWS and how to get started with its core services.'
    },
    {
        title: 'AWS EC2: Scalable Virtual Servers in the Cloud',
        description: 'Amazon EC2 allows you to run scalable virtual servers in the cloud. Learn about EC2 instances, pricing models, and how to deploy applications on EC2.'
    },
    {
        title: 'Simplifying Storage with AWS S3',
        description: 'AWS S3 is a scalable object storage service. This blog explains how to use S3 for storing and retrieving data, and its features like versioning and lifecycle management.'
    },
    {
        title: 'AWS Lambda: Event-Driven Serverless Computing',
        description: 'AWS Lambda lets you run code without provisioning servers. Understand the benefits of serverless computing and how to create and manage Lambda functions.'
    },
    {
        title: 'Managing Databases with AWS RDS',
        description: 'Amazon RDS simplifies database management. This blog covers how to set up, manage, and scale relational databases using RDS.'
    },
    {
        title: 'Building a Global Application with AWS CloudFront',
        description: 'AWS CloudFront is a CDN that speeds up content delivery. Learn how to use CloudFront to distribute your content globally with low latency.'
    },
    {
        title: 'Automating Infrastructure with AWS CloudFormation',
        description: 'AWS CloudFormation allows you to model and set up your AWS resources using templates. Explore how to automate infrastructure deployment with CloudFormation.'
    },
    {
        title: 'Enhancing Security with AWS IAM',
        description: 'AWS Identity and Access Management (IAM) helps you manage access to AWS services and resources securely. Understand IAM policies, roles, and best practices.'
    },
    {
        title: 'Optimizing Costs with AWS Cost Management Tools',
        description: 'AWS offers various tools to help manage and optimize costs. This blog covers AWS Cost Explorer, budgets, and other cost management best practices.'
    },
    {
        title: 'Monitoring and Logging with AWS CloudWatch',
        description: 'AWS CloudWatch provides monitoring and logging for AWS resources. Learn how to set up CloudWatch alarms, dashboards, and logs to monitor your infrastructure.'
    },
];



export const AWS = () => {
    return (
        <>
            <HomeTags />
            <div className="min-h-screen dark:bg-slate-800 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-md mb-4 text-center text-white">Amazon Web Services</h1>
                    <button className="bg-gray-500 rounded-full hover:bg-gray-700 text-gray-300 font-md py-1 px-4  focus:outline-none">
                        Follow
                    </button>
                    <div className="border-b border-slate-600 my-8"></div>

                </div>

                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div>
                            {awsBlogs.map(blog => <BlogCard
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
