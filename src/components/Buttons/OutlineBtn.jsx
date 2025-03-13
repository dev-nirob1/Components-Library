import ComponentPreview from "../shared/ComponentPreview";

const OutlineBtn = () => {
    const outlineBtn = `<button className="border-2 border-blue-600 text-blue-600 hover:text-white bg-white hover:bg-blue-600 px-5 py-3 font-semibold text-lg rounded-md cursor-pointer transition-all ease-in-out duration-300">Click Me</button>\n<button className="border-2 border-red-600 text-red-600 hover:text-white bg-white hover:bg-red-600 px-5 py-3 font-semibold text-lg rounded-md cursor-pointer transition-all ease-in-out duration-300">Click Me</button>`
    return (
        <div>
            <ComponentPreview title="Outline Button" code={outlineBtn}>
                <div className="flex flex-wrap justify-center gap-4">
                <button className="border-2 border-blue-600 text-blue-600 hover:text-white bg-white hover:bg-blue-600 px-5 py-3 font-semibold text-lg rounded-md cursor-pointer transition-all ease-in-out duration-300">Click Me</button>
                <button className="border-2 border-red-600 text-red-600 hover:text-white bg-white hover:bg-red-600 px-5 py-3 font-semibold text-lg rounded-md cursor-pointer transition-all ease-in-out duration-300">Click Me</button>
                </div>
            </ComponentPreview>
        </div>
    );
};

export default OutlineBtn;