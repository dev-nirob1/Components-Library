import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import Sidebar from "../../components/shared/Sidebar";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto grid grid-cols-12 gap-5 min-h-screen">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 p-5">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Main;