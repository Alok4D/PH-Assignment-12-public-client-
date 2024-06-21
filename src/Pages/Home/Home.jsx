import ApartmentsMaps from "./Apartments-location/ApartmentsMaps";
import { Banner } from "./Banner/Banner";
import BuildingDetails from "./Building-Details/BuildingDetails";
import Coupons from "./coupons-section/Coupons";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <BuildingDetails></BuildingDetails>
            <Coupons></Coupons>
            <ApartmentsMaps></ApartmentsMaps>
        </div>
    );
};

export default Home;