import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import './PaymentHistory.css';

const PaymentHistory = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  // fetch payment data
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payments`);
      return data;
    },
  });
  const userPayments = payments?.filter((info) => info?.email === user?.email);
 

  const paymentData = userPayments?.filter((info) => {
    const dateName = new Date(info?.date)
      .toDateString()
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
    const dateNumber = new Date(info?.date)
      .toLocaleString()
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
    return dateName || dateNumber;
  });


  return (
    <div>
      <Helmet>
        <title>Dashboard || Payment History</title>
      </Helmet>
      <div>
        <h2 className="text-center text-3xl text-yellow-500">
          All agreement payment history!
        </h2>
        <div className="divider divider-success ml-72 mr-72"></div>
      </div>
    {/* Apply search functionality */}
      <div className="flex justify-between">
        <div className="mb-5">
          <h2 className="text-4xl">Payment History : {paymentData.length}</h2>
        </div>
        <div>
          <input
            type="text"
            name="search"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Month Name or Number"
            className="search-input"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-[18px]"># </th>
              <th className="text-[18px]">Email</th>
              <th className="text-[18px]">Transaction Id</th>
              <th className="text-[18px]">Price</th>
              <th className="text-[18px]">Payment</th>
              <th className="text-[18px]">Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentData?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item?.email}</td>
                <td>{item?.transactionId}</td>
                <td>${item?.price}</td>
                <td>{item?.payment}</td>
                <td>{new Date(item?.date).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
