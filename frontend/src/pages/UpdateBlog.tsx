import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { notifyError, notifySuccess } from '../components/Notification';
import { TextEditor } from './Publish';
import { Spinner } from '../components/Spinner';

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
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                });

                const blog = response.data.blog;

                setTitle(blog.title);
                setContent(blog.content);
                setLoading(false);
                notifySuccess('Blog data fetched successfully');

            } catch (error) {
                console.error("Error fetching blog:", error);
                notifyError("Failed to fetch blog data.");
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Update Blog</h1>

            <div className="max-w-screen-lg w-full">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block p-2.5 focus:outline-none"
                    placeholder="Title"
                />
                <TextEditor
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                />
                <div className="flex items-center justify-between">
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
                                        Authorization: `${localStorage.getItem("token")}`,

                                    }
                                });

                                if (response.status === 200) {
                                    notifySuccess("Blog updated successfully");
                                    navigate(`/blog/${id}`);
                                } else {
                                    throw new Error("Failed to update blog");
                                }
                            } catch (error) {
                                console.error("Error updating blog:", error);
                                notifyError("Failed to update blog. Please try again.");
                            }
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none mt-4"
                    >
                        Update Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlogPage;
