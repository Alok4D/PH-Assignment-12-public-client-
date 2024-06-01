import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Home/Shared-Pages/Footer/Footer";
import Navbar from "../../Pages/Home/Shared-Pages/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;