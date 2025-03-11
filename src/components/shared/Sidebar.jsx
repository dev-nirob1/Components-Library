import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen dark:bg-gray-900 border-r pl-2">
      <h3 className="text-lg font-bold my-2">Components</h3>
      <nav className="space-y-2 font-semibold text-gray-500">
        <Link
          to="/components/button"
          className="block rounded-lg hover:text-gray-600 dark:hover:bg-gray-800 transition"
        >
          Button
        </Link>
        <Link
          to="/components/accordion"
          className="block rounded-lg hover:text-gray-600 dark:hover:bg-gray-800 transition"
        >
          Accordion
        </Link>
        <Link
          to="/components/card"
          className="block rounded-lg hover:text-gray-600 dark:hover:bg-gray-800 transition"
        >
          Card
        </Link>
        <Link
          to="/components/modal"
          className="block rounded-lg hover:text-gray-600 dark:hover:bg-gray-800 transition"
        >
          Modal
        </Link>
        <Link
          to="/components/tooltip"
          className="block rounded-lg hover:text-gray-600 dark:hover:bg-gray-800 transition"
        >
          Tooltip
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
