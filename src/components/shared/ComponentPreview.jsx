import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme (you can change this)
import "prismjs/components/prism-jsx"; 
import { useEffect, useRef, useState } from "react";
import { FaCode, FaCopy, FaEye } from "react-icons/fa6";

const ComponentPreview = ({ title, code, children }) => {
    const [activeTab, setActiveTab] = useState('preview')
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [activeTab]);
    return (
        <div className="mb-8">
            <h3 className="text-3xl font-medium mb-5">{title}</h3>
            <div className="flex mb-4">
                <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-4 py-2 flex items-center gap-1 ${activeTab === "preview" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"
                        }`}
                >
                    <FaEye size={18} /> Preview
                </button>
                <button
                    onClick={() => setActiveTab("code")}
                    className={`px-4 py-2 flex items-center gap-1 ${activeTab === "code" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"
                        }`}
                >
                    <FaCode size={18} /> Code
                </button>
            </div>
            <div>
                {activeTab === "preview" ? (
                    <div className="p-4 border border-gray-200 rounded-md">{children}</div>
                ) : (
                    <div className="relative bg-gray-900 text-white rounded-md p-4">
                        <button
                            //   onClick={copyToClipboard}
                            className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded cursor-pointer"
                        >
                            <FaCopy size={16} />
                        </button>
                        <pre className="whitespace-pre-wrap">
                        <code ref={codeRef} className="language-jsx">
                                {code}
                            </code>
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComponentPreview;