
import { Banner } from "./Banner/Banner";
import BuildingDetails from "./Building-Details/BuildingDetails";
import Coupons from "./coupons-section/Coupons";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Testimonial/Contact/Contact";
import FeatureProduct from "../../Components/FeatureProduct/FeatureProduct";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <BuildingDetails></BuildingDetails>
            <FeatureProduct/>
            <Coupons></Coupons>
            <Testimonial></Testimonial>
            <Contact/>
        </div>
    );
};

export default Home;