import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseAgreementCarts from "../../hooks/UseAgreementCarts";



const ApartmentData = ({data}) => {
    // console.log(data);
    const { apartmentImage, floorNo, blockName, apartmentNo, rent, _id} = data;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = UseAgreementCarts();
    const handleAddAgreement =  () => {
      if(user && user.email){
       //send cart item to the database
        const cartItem = {
          menuId: _id,
          email: user.email,
          userName : user.displayName,
          blockName,
          rent,
          apartmentNo,
          floorNo
        }
        axiosSecure.post('/agreementCarts', cartItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${blockName} block added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update the cart item count
            refetch();
          }
        })
       }
      else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please login to add to the card?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login it!"
        }).then((result) => {
          if (result.isConfirmed) {
           // send the user to the login page
           navigate('/login', {state: {from: location}});
          }
        });
      }
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
       onClick={handleAddAgreement}
        className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Agreement</button>
       </Link>
     
        
      </div>
        </div>
        </div>
    );
};

export default ApartmentData;