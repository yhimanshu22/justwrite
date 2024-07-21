import { Link } from 'react-router-dom';
import { Appbar } from '../components/Appbar';

export const HomePage = () => {
    const quotes = [
        {
            text: "Where words fail, music speaks.",
            author: "Hans Christian Andersen"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Start where you are. Use what you have. Do what you can.",
            author: "Arthur Ashe"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Appbar />
            <div className="max-w-screen-lg mx-auto p-8">
                <div style={{ fontFamily: 'Anton' }} className="text-5xl md:text-7xl font-bold mb-6 text-center">
                    Human Stories & Ideas
                </div>
                <p className="text-lg md:text-xl text-center mb-6">

                    A place to read, write, and deepen your understanding</p>

                {/* Quotes section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {quotes.map((quote, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6">
                            <div className="text-lg italic">{quote.text}</div>
                            <div className="text-sm mt-2">- {quote.author}</div>
                        </div>
                    ))}
                </div>

                {/* Start Reading button */}
                <div className="mt-8 flex justify-center">
                    <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300">
                        Start Reading
                    </Link>
                </div>
            </div>
        </div>
    );
}


