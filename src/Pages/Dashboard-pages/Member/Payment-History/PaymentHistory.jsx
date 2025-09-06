import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const PaymentHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/payments");
      return data;
    },
  });

  const userPayments = payments.filter((p) => p.email === user?.email);

  const filteredPayments = userPayments.filter((p) => {
    if (!searchTerm) return true;

    const dateObj = new Date(p.date);
    if (isNaN(dateObj)) return false;

    const monthNameFull = dateObj.toLocaleString("default", { month: "long" }).toLowerCase();
    const monthNameShort = dateObj.toLocaleString("default", { month: "short" }).toLowerCase();
    const monthNumber = (dateObj.getMonth() + 1).toString();

    const term = searchTerm.trim().toLowerCase();
    return monthNameFull.includes(term) || monthNameShort.includes(term) || monthNumber.includes(term);
  });

  return (
    <div className="p-4 md:p-8">
      <Helmet>
        <title>Dashboard || Payment History</title>
      </Helmet>

      <h2 className="text-center text-3xl md:text-4xl font-bold text-yellow-500 mb-2">Payment History</h2>
      <div className="divider border-t-2 border-yellow-500 w-1/2 mx-auto mb-6"></div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-2xl md:text-3xl font-semibold">Total Payments: {filteredPayments.length}</h3>
        <input
          type="text"
          placeholder="Search by month name (Jan) or number (1-12)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-64"
        />
      </div>

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
                  <td>{new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4">No payments found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
