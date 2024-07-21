import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { notifyError, notifySuccess } from '../components/Notification';
import { TextEditor } from './Publish';
import { Spinner } from '../components/Spinner';
import { Appbar } from '../components/Appbar';

const UpdateBlogPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`,
                    }
                });

                const blog = response.data.blog;

                setTitle(blog.title);
                setContent(blog.content);

                // Call notifySuccess only once after setting state
                if (!loading) {
                    notifySuccess('Blog data fetched successfully');
                }

                setLoading(false);

            } catch (error) {
                console.error("Error fetching blog:", error);
                notifyError("Failed to fetch blog data.");
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id, loading]); // Added loading to dependency array to handle state updates


    if (loading) {
        return <div className=" dark:bg-slate-800">
            <Appbar />

            <div className="h-screen flex flex-col justify-center">

                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }

    return (
        <div className="dark:bg-slate-800 min-h-screen">
            <Appbar />

            <div className="flex justify-center w-full pt-8">
                <div className="max-w-screen-lg w-full shadow-md rounded-lg p-6">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block p-2.5 focus:outline-none mb-4"
                        placeholder="Enter blog title"
                    />

                    <TextEditor
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <div className="flex justify-end  space-x-4 mt-4">
                        <button
                            onClick={async (event) => {
                                event.preventDefault();

                                try {
                                    const updateData = {
                                        title: title,
                                        content: content
                                    };

                                    const response = await axios.put(`${BACKEND_URL}/api/v1/blog/update/${id}`, updateData, {
                                        headers: {
                                            Authorization: localStorage.getItem("token"),
                                        }
                                    });

                                    if (response.status === 200) {
                                        notifySuccess("Blog updated successfully");
                                        navigate(`/blog/${id}`);
                                    } else {
                                        throw new Error("Failed to update blog");
                                    }
                                } catch (error) {
                                    console.log(error)
                                    console.error("Error updating blog:", error);
                                    notifyError("Failed to update blog. Please try again.");
                                }
                            }}
                            className="bg-blue-500  hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none"
                        >
                            Update Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlogPage;
