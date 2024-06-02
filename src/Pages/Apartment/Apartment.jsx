import { useEffect, useState } from "react";
import ApartmentData from "./ApartmentData";


const Apartment = () => {
    const [apartment, setApartment] = useState([]);
    console.log(apartment);
    useEffect( () => {
        fetch('apartment.json')
        .then(res => res.json())
        .then(data => setApartment(data))
    }, [])
    return (
        <div>
            <div className="mt-10 mb-10 w-full h-[310px]  bg-cover  bg-[url('https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?cs=srgb&dl=pexels-pixabay-258160.jpg&fm=jpg')]">
          <h2 className="flex justify-center items-center text-[60px] leading-[60px] font-bold text-[#ffffff] pt-28">
          Our apartments are available
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 ">
            {
                apartment.map(data => <ApartmentData key={data.Rent} data={data}></ApartmentData>)
            }
        </div>
        </div>
    );
};

export default Apartment;