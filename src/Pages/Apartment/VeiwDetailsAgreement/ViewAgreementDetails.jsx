import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useViewAgreementCart from "../../../hooks/useViewAgreementCart";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useGetRoles from "../../../hooks/UseGetRoles";

const ViewAgreementDetails = () => {

  const {role} = useGetRoles();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const [, refetch] = useViewAgreementCart();
  const axiosSecure = UseAxiosSecure();

  const { id } = useParams();
  const { data: agreementData = {} } = useQuery({
    queryKey: ["agreementData"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/agreementDetails/${id}`);
      return data;
    },
  });
  // console.log(agreementData);

  const handleAddCraftItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const floor = form.floor.value;
    const rent = form.rent.value;
    const blockName = form.blockName.value;
    const apartmentNo = form.apartmentNo.value;
    const date = form.date.value;
    // console.log(name, email, floor, rent, blockName, apartmentNo, date);

    const newAgreementView = {
      name: user?.displayName,
      email: user?.email,
      floor,
      rent: parseInt(rent),
      blockName,
      apartmentNo,
      date,
      payment: "pending",
    };

    axiosSecure.post("/agreementView", newAgreementView).then((res) => {
      if (res.data.insertedId) {
        navigate('/dashboard/Payment');
        // console.log("submit successfully!");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "submit successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        // refetch cart to update
        refetch();
        // console.log({newAgreementView, res});
        event.target.reset();
        // navigate('/');
      }
    });
  };

  return (
    <div className="gadgetContainer pt-10 w-[80%] mx-auto mb-10">
      <Helmet>
        <title>View Agreement</title>
      </Helmet>
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5] rounded-xl">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#FF497C]"></span>
              View Agreement Cart Details
            </span>
          </p>
        </div>

        {/* form */}
        <div className=" mb-10">
          <form
            onSubmit={handleAddCraftItem}
            className=" w-full p-5 bg-gray-300"
          >
            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="mb-6">
                  <h3 className="font-bold">User Name :</h3>
                  <label className="input  input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="User Name"
                      readOnly
                      defaultValue={agreementData?.userName}
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold">User Email :</h3>
                  <label className="input  input-bordered flex items-center gap-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="email Name"
                      readOnly
                      defaultValue={agreementData?.email}
                    />
                  </label>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold">Floor:</h3>
                  <label className="input input-bordered flex items-center gap-2 mb-4">
                    <input
                      type="url"
                      name="floor"
                      placeholder="floor"
                      readOnly
                      defaultValue={agreementData?.floorNo}
                    />
                  </label>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="font-bold">Block Name:</h3>
                  <label className="input  input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      name="blockName"
                      placeholder="block Name"
                      readOnly
                      defaultValue={agreementData?.blockName}
                    />
                  </label>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold">Apartment no :</h3>
                  <label className="input input-bordered flex items-center gap-2 mb-4">
                    <input
                      type="text"
                      name="apartmentNo"
                      placeholder="apartment no"
                      readOnly
                      defaultValue={agreementData?.apartmentNo}
                    />
                  </label>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold">Rent :</h3>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      name="rent"
                      placeholder="rent"
                      readOnly
                      defaultValue={agreementData?.rent}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="pb-4">
              <label className="label">
                <span className="label-text">Month to Pay : </span>
              </label>
              <input
                type="Date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
                required
              />
            </div>
            <button
            disabled = {role === 'Admin'}
              type="submit"
             
              // onClick={() => handleAgreementView(agreementData)}
              className="btn bg-emerald-400 w-full text-2xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewAgreementDetails;
