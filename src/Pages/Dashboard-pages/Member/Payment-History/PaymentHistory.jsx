import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const PaymentHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  // Fetch all payments
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/payments");
      return data;
    },
  });

  // Filter current user's payments
  const userPayments = payments.filter((p) => p.email === user?.email);

  // Filter payments based on search term (month name or number)
  const filteredPayments = userPayments.filter((p) => {
    if (!searchTerm) return true;

    const dateObj = new Date(p.date);
    const monthNameFull = dateObj.toLocaleString("default", { month: "long" }).toLowerCase(); // e.g., january
    const monthNameShort = dateObj.toLocaleString("default", { month: "short" }).toLowerCase(); // e.g., jan
    const monthNumber = (dateObj.getMonth() + 1).toString(); // 1-12

    const term = searchTerm.trim().toLowerCase();

    return monthNameFull.includes(term) || monthNameShort.includes(term) || monthNumber.includes(term);
  });

  return (
    <div className="p-4 md:p-8">
      <Helmet>
        <title>Dashboard || Payment History</title>
      </Helmet>

      {/* Page header */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
        Payment History
      </h2>
      <div className="divider border-t-2 border-yellow-500 w-1/2 mx-auto mb-6"></div>

      {/* Top section: total payments + search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Total Payments: {filteredPayments.length}
        </h3>

        <input
          type="text"
          placeholder="Search by month name (Jan) or number (1-12)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-64"
        />
      </div>

      {/* Payment table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full text-sm md:text-base">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.length > 0 ? (
              filteredPayments.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.transactionId}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td className={item.payment === "paid" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                    {item.payment}
                  </td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  No payments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
