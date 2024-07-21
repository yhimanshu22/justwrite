import { useState } from "react";

import { HomeTags } from "../components/HomeTags";

export const Explore = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <HomeTags />
            <div className="min-h-screen p-8 dark:bg-slate-800 dark:text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-md mt-2 mb-8">Explore Topics</h1>

                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Search topics..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-80 h-15  p-2 pl-4 rounded-full text-gray-600 border border-gray-500 dark:border-gray-700 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
                        />
                    </div>
                </div>

                <div className="border-b border-slate-600 my-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-200 dark:bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600">
                        <div className="font-extrabold">Life</div>
                        <div className="ml-4 mt-2">
                            <div className="font-semibold">Family</div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Adoption</li>
                                <li>Children</li>
                                <li>Elder Care</li>
                                <li>Fatherhood</li>
                                <li>Motherhood</li>
                            </ul>
                            <div className="mt-4">
                                <div className="font-semibold">Health</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Aging</li>
                                    <li>Coronavirus</li>
                                    <li>Covid-19</li>
                                    <li>Death and Dying</li>
                                    <li>Disease</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <div className="font-semibold">Relationships</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Dating</li>
                                    <li>Divorce</li>
                                    <li>Friendship</li>
                                    <li>Love</li>
                                    <li>Marriage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600">
                        <div className="font-extrabold">Self Improvement</div>
                        <div className="ml-4 mt-2">
                            <div className="font-semibold">Mental Health</div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Anxiety</li>
                                <li>Counseling</li>
                                <li>Grief</li>
                                <li>Life Lessons</li>
                                <li>Self-awareness</li>
                            </ul>
                            <div className="mt-4">
                                <div className="font-semibold">Productivity</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Career Advice</li>
                                    <li>Coaching</li>
                                    <li>Goal Setting</li>
                                    <li>Morning Routines</li>
                                    <li>Pomodoro Technique</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <div className="font-semibold">Mindfulness</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Guided Meditation</li>
                                    <li>Journaling</li>
                                    <li>Meditation</li>
                                    <li>Transcendental Meditation</li>
                                    <li>Yoga</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600">
                        <div className="font-extrabold">Career</div>
                        <div className="ml-4 mt-2">
                            <div className="font-semibold">Business</div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Entrepreneurship</li>
                                <li>Freelancing</li>
                                <li>Small Business</li>
                                <li>Startups</li>
                                <li>Venture Capital</li>
                            </ul>
                            <div className="mt-4">
                                <div className="font-semibold">Marketing</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Advertising</li>
                                    <li>Branding</li>
                                    <li>Content Marketing</li>
                                    <li>Content Strategy</li>
                                    <li>Digital Marketing</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <div className="font-semibold">Leadership</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Employee Engagement</li>
                                    <li>Leadership Coaching</li>
                                    <li>Leadership Development</li>
                                    <li>Management</li>
                                    <li>Meetings</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600">
                        <div className="font-extrabold">Technology</div>
                        <div className="ml-4 mt-2">
                            <div className="font-semibold">Artificial Intelligence</div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Conversational AI</li>
                                <li>Deep Learning</li>
                                <li>Large Language Models</li>
                                <li>Machine Learning</li>
                            </ul>
                            <div className="mt-4">
                                <div className="font-semibold">Blockchain</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Bitcoin</li>
                                    <li>Cryptocurrency</li>
                                    <li>Decentralized Finance</li>
                                    <li>Ethereum</li>
                                    <li>NFT</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <div className="font-semibold">Data Science</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Analytics</li>
                                    <li>Data Engineering</li>
                                    <li>Data Visualization</li>
                                    <li>Database Design</li>
                                    <li>SQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600">
                        <div className="font-extrabold">Software Development</div>
                        <div className="ml-4 mt-2">
                            <div className="font-semibold">Web Development</div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Frontend Development</li>
                                <li>Backend Development</li>
                                <li>Full Stack Development</li>
                            </ul>
                            <div className="mt-4">
                                <div className="font-semibold">Mobile Development</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>iOS Development</li>
                                    <li>Android Development</li>
                                    <li>Cross-platform Development</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <div className="font-semibold">Software Engineering</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>System Design</li>
                                    <li>Architecture Patterns</li>
                                    <li>Testing and QA</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600">
                        <div className="font-extrabold items-center content-center">Media</div>
                        <div className="ml-4 mt-2">
                            <div className="font-semibold">Writing</div>
                            <ul className="list-disc list-inside ml-4">
                                <li>30 Day Challenge</li>
                                <li>Book Reviews</li>
                                <li>Books</li>
                                <li>Creative Nonfiction</li>
                                <li>Diary</li>
                            </ul>
                            <div className="mt-4">
                                <div className="font-semibold">Art</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Comics</li>
                                    <li>Contemporary Art</li>
                                    <li>Drawing</li>
                                    <li>Fine Art</li>
                                    <li>Generative Art</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <div className="font-semibold">Gaming</div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Game Design</li>
                                    <li>Game Development</li>
                                    <li>Indie Game</li>
                                    <li>Metaverse</li>
                                    <li>Nintendo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
