import { FaTrashAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

const AgreementRequestDashboard = () => {
  const axiosSecure = UseAxiosSecure();
  const [agreementCarts, setAgreementCarts] = useState([]);

  const { data = [], refetch } = useQuery({
    queryKey: ["agreementCarts"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/agreementCarts`);
      return data;
    },
  });

  useEffect(() => {
    setAgreementCarts(data);
  }, [data]);

  // Reject agreement
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to reject this agreement request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, reject it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/agreementCarts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setAgreementCarts((prev) => prev.filter((item) => item._id !== id));
            Swal.fire("Rejected!", "Agreement request rejected.", "success");
          }
        });
      }
    });
  };

  // Accept agreement & save details
  // Accept agreement & save details
const handleMakeMember = (item) => {
  const agreementInfo = {
    email: item.email,
    role: "Member",
    status: "checked",
    agreementDate: new Date().toISOString(),
    floor: item.floorNo,
    block: item.blockName,
    room: item.apartmentNo,
    rent: item.rent,
  };

  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to accept this agreement request?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, accept it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.patch(`/agreement/${item._id}`, agreementInfo).then((res) => {
        if (res.data.success) {
          setAgreementCarts((prev) =>
            prev.map((i) => (i._id === item._id ? { ...i, status: "checked" } : i))
          );
          Swal.fire(
            "Accepted!",
            "User is now a Member & agreement details saved.",
            "success"
          );
        }
      });
    }
  });
};


  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Dashboard | Agreement Requests</title>
      </Helmet>

      {/* Header */}
      <header className="text-center py-6">
        <h2 className="text-4xl font-bold text-yellow-500 mb-2">
          Agreement Requests
        </h2>
        <div className="w-36 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-2">Total Requests: {agreementCarts.length}</p>
      </header>

      {/* Table */}
      <div className="overflow-x-auto max-w-7xl mx-auto px-4 md:px-0">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-lg">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-center">Floor</th>
              <th className="p-3 text-center">Block</th>
              <th className="p-3 text-center">Room</th>
              <th className="p-3 text-right">Rent</th>
              <th className="p-3 text-center">Date</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agreementCarts.map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-gray-50 transition-colors even:bg-gray-100"
              >
                <td className="p-3 font-medium">{index + 1}</td>
                <td className="p-3 font-medium">{item.userName}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3 text-center">{item.floorNo}</td>
                <td className="p-3 text-center">{item.blockName}</td>
                <td className="p-3 text-center">{item.apartmentNo}</td>
                <td className="p-3 text-right font-semibold text-green-600">
                  ${item.rent}
                </td>
                <td className="p-3 text-center">
                  {new Date(item.agreementReqDate).toLocaleString()}
                </td>
                <td className="p-3 text-center">
                  {item.status === "checked" ? (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium inline-flex items-center gap-1">
                      <TiTick /> Accepted
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                      Pending
                    </span>
                  )}
                </td>
                <td className="p-3 text-center flex justify-center gap-2">
                  {item.status !== "checked" && (
                    <button
                      onClick={() => handleMakeMember(item)}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm font-medium transition duration-300"
                    >
                      Accept
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm font-medium flex items-center gap-1 transition duration-300"
                  >
                    <FaTrashAlt /> Reject
                  </button>
                </td>
              </tr>
            ))}
            {agreementCarts.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No agreement requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgreementRequestDashboard;
