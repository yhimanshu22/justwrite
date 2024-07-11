
export const Quote = () => {
    const quoteText = "Let your life lightly dance on the edges of Time like dew on the tip of a leaf.";
    const author = " Rabindranath Tagore";

    return (
        <div className="bg-slate-200  dark:bg-slate-800 dark:text-white h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="max-w-lg">
                    <div style={{ fontFamily: 'Anton' }} className="text-6xl font-bold">
                        {quoteText}
                    </div>
                    <div style={{ fontFamily: 'Anton' }} className="max-w-md text-xl font-semibold text-left mt-4">
                        — {author}
                    </div>
                    <div className="max-w-md text-mi font-light text-slate-500">
                        { }
                    </div>
                </div>
            </div>
        </div>
    );
}
