import { BlogCard } from "../components/BlogCard";
import { HomeTags } from "../components/HomeTags";

const machineLearningBlogs = [
    {
        title: 'Introduction to Machine Learning',
        description: 'Machine Learning is a subset of artificial intelligence that focuses on building systems that learn from data to make predictions or decisions. This blog introduces the basic concepts and types of machine learning.'
    },
    {
        title: 'Setting Up Your Machine Learning Environment',
        description: 'Learn how to set up a development environment for machine learning projects. This includes installing Python, Jupyter Notebook, and popular ML libraries like NumPy, Pandas, Scikit-Learn, and TensorFlow.'
    },
    {
        title: 'Supervised vs. Unsupervised Learning',
        description: 'Understand the difference between supervised and unsupervised learning, the two main types of machine learning. This blog explains the concepts with examples and use cases for each.'
    },
    {
        title: 'Data Preprocessing for Machine Learning',
        description: 'Data preprocessing is a crucial step in machine learning. This blog covers techniques for cleaning, transforming, and preparing data for training machine learning models.'
    },
    {
        title: 'Building a Linear Regression Model',
        description: 'Linear regression is a fundamental algorithm in machine learning. This blog walks you through building a linear regression model from scratch using Python and Scikit-Learn.'
    },
    {
        title: 'Understanding Decision Trees and Random Forests',
        description: 'Decision trees and random forests are powerful algorithms for classification and regression tasks. This blog explains how these algorithms work and how to implement them using Scikit-Learn.'
    },
    {
        title: 'Introduction to Neural Networks',
        description: 'Neural networks are the foundation of deep learning. This blog introduces the basic concepts of neural networks, including neurons, layers, activation functions, and forward/backward propagation.'
    },
    {
        title: 'Building a Convolutional Neural Network (CNN)',
        description: 'Convolutional Neural Networks (CNNs) are widely used for image recognition tasks. This blog guides you through building a simple CNN using TensorFlow and Keras.'
    },
    {
        title: 'Natural Language Processing (NLP) Basics',
        description: 'Natural Language Processing (NLP) deals with the interaction between computers and human language. This blog covers basic NLP concepts and techniques, such as tokenization, stemming, and sentiment analysis.'
    },
    {
        title: 'Deploying Machine Learning Models',
        description: 'Learn how to deploy machine learning models to production. This blog covers various deployment options, including using Flask for web deployment, deploying on cloud platforms like AWS, and using tools like Docker and Kubernetes.'
    },
];


export const MachineLearning = () => {
    return (
        <>
            <HomeTags />
            <div className="min-h-screen dark:bg-slate-800 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-md mb-4 text-center text-white">Machine Learning </h1>
                    <button className="bg-gray-500 rounded-full hover:bg-gray-700 text-gray-300 font-bold py-1 px-4  focus:outline-none">
                        Follow
                    </button>
                    <div className="border-b border-slate-600 my-8"></div>

                </div>

                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div>
                            {machineLearningBlogs.map(blog => <BlogCard
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
