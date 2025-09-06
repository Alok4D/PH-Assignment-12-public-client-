import { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const ManageCoupons = () => {
  const axiosSecure = UseAxiosSecure();
  const [showModal, setShowModal] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");

  // Fetch all coupons
  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/coupons");
      return data;
    },
  });

  // Add coupon
  const handleAddCoupon = async (e) => {
    e.preventDefault();
    if (!couponCode || !discount)
      return Swal.fire("Error", "Fill all required fields", "error");

    const newCoupon = {
      couponCode,
      discount: parseFloat(discount),
      description,
      available: true, // default active
    };
    const res = await axiosSecure.post("/coupons", newCoupon);

    if (res.data.insertedId) {
      Swal.fire("Success", "Coupon added successfully", "success");
      refetch();
      setShowModal(false);
      setCouponCode("");
      setDiscount("");
      setDescription("");
    }
  };

  // Delete coupon
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this coupon!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/coupons/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Coupon has been deleted.", "success");
          refetch();
        }
      }
    });
  };

  // Toggle availability
  const handleToggle = async (id, currentStatus) => {
    const updatedStatus = !currentStatus;
    const res = await axiosSecure.put(`/coupons/${id}`, {
      available: updatedStatus,
    });

    if (res.data.modifiedCount > 0) {
      Swal.fire(
        "Updated!",
        `Coupon is now ${updatedStatus ? "Active" : "Inactive"}.`,
        "success"
      );
      refetch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Helmet>
        <title>Admin Dashboard || Manage Coupons</title>
      </Helmet>

      {/* Top Navbar */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-yellow-500">Manage Coupons</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-all"
        >
          <FaPlus /> Add Coupon
        </button>
      </div>

      {/* Coupons Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="table w-full border-collapse">
          <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Coupon Code</th>
              <th className="p-3">Discount %</th>
              <th className="p-3">Description</th>
              <th className="p-3">Availability</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((item, index) => (
              <tr
                key={item._id}
                className="even:bg-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="p-3 font-medium">{index + 1}</td>
                <td className="p-3 font-semibold">{item.couponCode}</td>
                <td className="p-3 text-center text-green-600 font-medium">
                  {item.discount}%
                </td>
                <td className="p-3">{item.description || "-"}</td>
                <td className="p-3">
                  {item.available ? (
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="p-3 flex gap-2 justify-center">
                  <button
                    onClick={() => handleToggle(item._id, item.available)}
                    className={`px-3 py-1 rounded text-white text-sm ${
                      item.available
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {item.available ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm flex items-center gap-1"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {coupons.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  No coupons found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Coupon Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
            <h3 className="text-2xl font-semibold mb-4">Add New Coupon</h3>
            <form onSubmit={handleAddCoupon} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="number"
                placeholder="Discount %"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCoupons;
