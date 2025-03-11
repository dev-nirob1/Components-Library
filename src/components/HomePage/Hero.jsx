const Hero = () => {
    return (
        <div className="h-[calc(100vh-120px)] flex items-center">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    <span className="text-[#8b5cf6]">Raw</span>UI
                </h1>
                <p className="mt-6 text-xl font-semibold text-gray-600 dark:text-gray-300">
                    A minimal and lightweight component library. Built with pure HTML and CSS - no JavaScript, no dependencies, just clean UI. ✨ Also available in JSX & TailwindCSS for React.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#components" className="px-8 py-3 rounded-lg bg-[#7e4feb] hover:bg-[#6d28d9] text-white font-medium shadow-lg shadow-[#6d28d9]/25 transition-all duration-300">
                        Get Started
                    </a>
                    <a href="#docs" className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-all duration-300">
                        Documentation
                    </a>
                </div>   
            </div>
        </div>
    );
};

export default Hero;