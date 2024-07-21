import { HomeTags } from "../components/HomeTags";

const NodejsBlogs = [
    {
        title: 'Introduction to Node.js',
        description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to build scalable network applications using JavaScript on the server-side.'
    },
    {
        title: 'Setting Up a Node.js Development Environment',
        description: 'Learn how to set up a Node.js development environment on your machine. This includes installing Node.js and npm, setting up a code editor, and running your first Node.js application.'
    },
    {
        title: 'Understanding Node.js Modules',
        description: 'Node.js uses a module system to manage dependencies and organize code. This blog covers the basics of creating and using modules in Node.js.'
    },
    {
        title: 'Building a RESTful API with Node.js',
        description: 'RESTful APIs are a common way to structure server-side applications. This blog walks you through building a simple RESTful API using Node.js and Express.js.'
    },
    {
        title: 'Asynchronous Programming in Node.js',
        description: 'Asynchronous programming is a core concept in Node.js. Learn about callbacks, Promises, and async/await, and how to use them to handle asynchronous operations in your Node.js applications.'
    },
    {
        title: 'Working with Databases in Node.js',
        description: 'Node.js can be used with various databases, such as MongoDB, MySQL, and PostgreSQL. This blog covers the basics of connecting to and interacting with a database using Node.js.'
    },
    {
        title: 'Real-time Communication with WebSockets in Node.js',
        description: 'WebSockets provide a way to establish real-time communication between the server and the client. This blog explains how to set up a WebSocket server using Node.js and Socket.io.'
    },
    {
        title: 'Building and Deploying a Node.js Application',
        description: 'Learn the steps to build and deploy a Node.js application. This includes packaging your application, setting up a production environment, and deploying to a cloud platform like Heroku or AWS.'
    },
    {
        title: 'Error Handling in Node.js',
        description: 'Proper error handling is crucial for building robust Node.js applications. This blog covers various techniques for handling errors, including try/catch blocks, error events, and custom error handling middleware.'
    },
    {
        title: 'Testing Node.js Applications',
        description: 'Testing is an important part of the development process. This blog introduces different testing frameworks and libraries for Node.js, such as Mocha, Chai, and Jest, and shows how to write unit and integration tests for your applications.'
    },
];


export const Nodejs = () => {
    return (
        <>
            <HomeTags />
            <div className="min-h-screen dark:bg-slate-800 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-8 text-center text-white">Nodejs</h1>
                    <button className="bg-gray-500 rounded-full hover:bg-gray-700 text-gray-300 font-bold py-2 px-4  focus:outline-none">
                        Follow
                    </button>
                    <div className="border-b border-slate-600 my-8"></div>

                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ml-20 mr-20">
                        {NodejsBlogs.map((info, index) => (
                            <div key={index} className="bg-gray-400 p-6 rounded-lg shadow-lg h-60">
                                <h2 className="text-2xl font-bold mb-4">{info.title}</h2>
                                <p className="text-gray-700">{info.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">

                    </div>

                </div>
            </div>
        </>

    );
};
