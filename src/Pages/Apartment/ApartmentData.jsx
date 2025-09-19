import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseAgreementCarts from "../../hooks/UseAgreementCarts";
import useGetRoles from "../../hooks/UseGetRoles";

const ApartmentData = ({ data }) => {
  const { role } = useGetRoles();
  const { apartmentImage, floorNo, blockName, apartmentNo, rent, _id } = data;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseAgreementCarts();

  const handleAddAgreement = () => {
    if (!user) {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
      return;
    }

    if (user && user.email) {
      if (role === "Member" || role === "Admin") {
        navigate(`/agreementDetails/${_id}`);
        return;
      }

      if (role === "user") {
        const cartItem = {
          menuId: _id,
          email: user.email,
          userName: user.displayName,
          blockName,
          rent,
          apartmentNo,
          floorNo,
          status: "pending",
          agreementReqDate: new Date(),
        };

        axiosSecure.post("/agreementCarts", cartItem).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your agreement request submitted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    }
  };

  return (
    <div>
      <div
        className="container mx-auto space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B] mb-10
                   transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
      >
        <img
          src={apartmentImage}
          alt={`Apartment-${apartmentNo}`}
          className="border rounded-xl h-[190px] w-full object-cover transition duration-300 hover:opacity-90"
        />
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold transition duration-300 hover:text-green-600">
            Block Name : {blockName}
          </h1>
          <p className="text-sm text-gray-500 dark:text-white/60 flex-grow">
            Floor No : #{floorNo}
          </p>
          <div className="flex gap-10">
            <div className="text-lg font-semibold">Rent : ${rent}</div>
            <div className="text-lg font-semibold">
              Apartment No : {apartmentNo}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAddAgreement}
            className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200
                       dark:border-white dark:hover:text-slate-800 dark:hover:bg-white transform hover:scale-105"
          >
            Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentData;
