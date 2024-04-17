import {Outlet} from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Root = () => {
    
    return (
        <div>
             <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;