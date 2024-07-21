import { BlogCard } from "../components/BlogCard";
import { HomeTags } from "../components/HomeTags";

const reactBlogs = [
    {
        title: 'Introduction to React',
        description: 'React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.'
    },
    {
        title: 'Understanding JSX',
        description: 'JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like.'
    },
    {
        title: 'Components and Props',
        description: 'Components are the building blocks of a React application. Props (short for properties) are inputs to components that allow data to be passed from one component to another.'
    },
    {
        title: 'State and Lifecycle',
        description: 'State is a built-in object that allows components to create and manage their own data. The lifecycle methods are special methods that get called at specific points in a component’s lifecycle.'
    },
    {
        title: 'Handling Events in React',
        description: 'Handling events in React is similar to handling events in regular HTML. However, there are some syntactic differences, such as using camelCase for event names.'
    },
    {
        title: 'Conditional Rendering',
        description: 'Conditional rendering in React allows you to create dynamic components that change based on the state or props of the component.'
    },
    {
        title: 'Lists and Keys',
        description: 'Lists and keys help React efficiently update and render components. Keys are unique identifiers that help React identify which items have changed.'
    },
    {
        title: 'Forms in React',
        description: 'Handling forms in React involves managing state and using controlled components, where the form elements are controlled by React state.'
    },
    {
        title: 'Lifting State Up',
        description: 'Lifting state up is a pattern where the state is shared between multiple components by moving it up to their common ancestor.'
    },
    {
        title: 'React Hooks',
        description: 'React Hooks are functions that let you use state and other React features without writing a class. The most commonly used hooks are useState and useEffect.'
    },
];

export const React = () => {
    return (
        <>
            <HomeTags />
            <div className="min-h-screen dark:bg-slate-800 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-md mb-4 text-center text-white">ReactJs </h1>
                    <button className="bg-gray-500 rounded-full hover:bg-gray-700 text-gray-300 font-bold py-1 px-4  focus:outline-none">
                        Follow
                    </button>
                    <div className="border-b border-slate-600 my-8"></div>

                </div>

                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div>
                            {reactBlogs.map(blog => <BlogCard
                                id={0}
                                authorName={"Andrew"}
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
