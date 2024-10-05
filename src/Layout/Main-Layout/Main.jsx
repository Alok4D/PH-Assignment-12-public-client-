import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Pages/Home/Shared-Pages/Footer/Footer";
import Navbar from "../../Pages/Home/Shared-Pages/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('register');
    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar>}
           <Outlet></Outlet>
           { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;