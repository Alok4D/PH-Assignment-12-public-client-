import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {
  const axiosSecure = UseAxiosSecure();
  // fetch payment data
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payments`);
      return data;
    },
  });
  console.log(payments);

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
      <div className="mb-5">
        <h2 className="text-6xl">Payment History  : {payments.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[18px]"># </th>
             
              <th className="text-[18px]">Email</th>
              <th className="text-[18px]">Transaction Id</th>
              <th className="text-[18px]">Price</th>
              <th className="text-[18px]">Payment</th>
              
            </tr>
          </thead>
          <tbody>
            {payments.map((item, index) => (
               
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item?.email}</td>
                <td>{item?.transactionId}</td>
                <td>${item?.price}</td>
                <td>{item?.payment}</td>
              
           
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
