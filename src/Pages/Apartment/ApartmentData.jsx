import { Link } from "react-router-dom";


const ApartmentData = ({data}) => {
    console.log(data);
    const {apartmentImage, floorNo, blockName, apartmentNo, rent} = data;

    const handleAddAgreement =  agreement => {
      console.log(agreement);
    }
    return (
        <div>
               <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]  mb-10">
     <img src={apartmentImage} alt="Industrial-Products-Images" className="border rounded-xl h-[190px] " />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold ">Block Name : {blockName}</h1>
        <p className="text-sm text-gray-500 dark:text-white/60 flex-grow">Category : #{floorNo}</p>
       <div className="flex gap-10 ">
       <div className="text-lg font-semibold">Price : ${rent}</div>
        <div className="text-lg font-semibold">Apartment No : {apartmentNo}</div>
       </div>
      </div>
      <div className="flex gap-4">
       <Link to="">
       <button
       onClick={() => handleAddAgreement(data)}
        className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Agreement</button>
       </Link>
     
        
      </div>
        </div>
        </div>
    );
};

export default ApartmentData;