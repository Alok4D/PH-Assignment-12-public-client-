import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseAgreementCarts from "../../hooks/UseAgreementCarts";
import useGetRoles from "../../hooks/UseGetRoles";

const FeatureProduct = () => {
  const [apartments, setApartments] = useState([]);
  const { user } = useContext(AuthContext);
  const { role } = useGetRoles();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseAgreementCarts();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("https://building-management-server-sigma.vercel.app/apartmentData")
      .then((res) => res.json())
      .then((data) => {
        setApartments(data.slice(0, 4)); 
      });
  }, []);

  const handleAddAgreement = (apartment) => {
    if (!user) {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to make an agreement?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
      return;
    }

    if (user && user.email) {
      if (role === "Member" || role === "Admin") {
        navigate(`/agreementDetails/${apartment._id}`);
        return;
      }

      if (role === "user") {
        const cartItem = {
          menuId: apartment._id,
          email: user.email,
          userName: user.displayName,
          blockName: apartment.blockName,
          rent: apartment.rent,
          apartmentNo: apartment.apartmentNo,
          floorNo: apartment.floorNo,
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
    <div className="container mx-auto py-12 px-4 md:px-10 lg:px-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Featured Apartments</h2>
        <Link
          to="/apartment"
          className="text-green-600 font-medium hover:underline flex items-center gap-1"
        >
          View All →
        </Link>
      </div>

      {/* Apartment Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apartments.map((apt) => (
          <div
            key={apt._id}
            className="space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B] 
                       transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
          >
            {/* Apartment image */}
            <img
              src={apt.apartmentImage}
              alt={`Apartment-${apt.apartmentNo}`}
              className="border rounded-xl h-[190px] w-full object-cover transition duration-300 hover:opacity-90"
            />

            {/* Details */}
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold transition duration-300 hover:text-green-600">
                Block Name : {apt.blockName}
              </h1>
              <p className="text-sm text-gray-500 dark:text-white/60">
                Floor No : #{apt.floorNo}
              </p>
              <div className="flex gap-6 text-sm">
                <div className="font-semibold">Rent : ${apt.rent}</div>
                <div className="font-semibold">
                  Apartment No : {apt.apartmentNo}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => handleAddAgreement(apt)}
                className="rounded-md border border-black px-4 py-2 duration-300 
                           hover:bg-gray-200 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white 
                           transform hover:scale-105"
              >
                Agreement
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
