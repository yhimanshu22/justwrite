
export const Quote = () => {
    const quoteText = "Join us to express your passions, connect with fellow bloggers and readers through vibrant discussions, and effortlessly grow your audience on our platform.";
    const author = "Himanshu Yadav"; // Replace with the name of the famous writer

    return (
        <div className="bg-slate-200 h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="max-w-lg">
                    <div className="text-3xl font-bold">
                        {quoteText}
                    </div>
                    <div className="max-w-md text-xl font-semibold text-left mt-4">
                        — {author}
                    </div>
                    <div className="max-w-md text-mi font-light text-slate-500">
                        {'JustWrite Founder'}
                    </div>
                </div>
            </div>
        </div>
    );
}
