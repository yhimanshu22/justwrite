import { BlogCard } from "../../components/BlogCard";
import { HomeTags } from "../../components/HomeTags";

const javascriptBlogs = [
    {
        title: 'Understanding the Basics of JavaScript',
        description: 'JavaScript is a versatile programming language used for web development. This blog covers the basic syntax, variables, data types, and basic operations in JavaScript.'
    },
    {
        title: 'JavaScript Functions: An Introduction',
        description: 'Functions are the building blocks of any JavaScript application. This blog explains how to define and invoke functions, including the differences between function declarations and function expressions.'
    },
    {
        title: 'Exploring JavaScript ES6 Features',
        description: 'ES6 introduced many new features to JavaScript. This blog covers some of the most important ES6 features like let and const, arrow functions, template literals, and destructuring.'
    },
    {
        title: 'JavaScript Asynchronous Programming: Promises and Async/Await',
        description: 'Asynchronous programming is essential for JavaScript applications. This blog explains how to work with promises and async/await to handle asynchronous operations in JavaScript.'
    },
    {
        title: 'Manipulating the DOM with JavaScript',
        description: 'The Document Object Model (DOM) is a key concept in web development. This blog covers how to use JavaScript to manipulate the DOM, including selecting and modifying HTML elements.'
    },
    {
        title: 'Event Handling in JavaScript',
        description: 'Event handling is crucial for interactive web applications. This blog explains how to handle events in JavaScript, including how to use event listeners and event delegation.'
    },
    {
        title: 'JavaScript Object-Oriented Programming',
        description: 'JavaScript supports object-oriented programming. This blog introduces OOP concepts in JavaScript, including classes, objects, inheritance, and polymorphism.'
    },
    {
        title: 'Understanding Closures in JavaScript',
        description: 'Closures are a powerful feature in JavaScript. This blog explains what closures are, how they work, and some common use cases for closures in JavaScript development.'
    },
    {
        title: 'JavaScript Modules: Import and Export',
        description: 'Modules help organize JavaScript code into reusable pieces. This blog covers how to use the import and export syntax to create and use modules in JavaScript.'
    },
    {
        title: 'Debugging JavaScript: Tools and Techniques',
        description: 'Debugging is an essential skill for any JavaScript developer. This blog introduces various tools and techniques for debugging JavaScript code, including using browser dev tools and debugging best practices.'
    },
];

export const JavaScript = () => {
    return (
        <>
            <HomeTags />
            <div className="min-h-screen dark:bg-slate-800 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-md mb-4 text-center text-white">JavaScript The Heart of Websites</h1>
                    <button className="bg-gray-500 rounded-full hover:bg-gray-700 text-gray-300 font-bold py-1 px-4  focus:outline-none">
                        Follow
                    </button>
                    <div className="border-b border-slate-600 my-8"></div>

                </div>

                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div>
                            {javascriptBlogs.map(blog => <BlogCard
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
