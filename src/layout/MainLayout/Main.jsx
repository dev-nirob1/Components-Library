import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import Sidebar from "../../components/shared/Sidebar";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto grid grid-cols-4 min-h-screen">
                <Sidebar />
                <div className="col-span-3">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Main;