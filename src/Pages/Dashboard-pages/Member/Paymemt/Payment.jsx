import { FaTrashAlt } from "react-icons/fa";
import useViewAgreementCart from "../../../../hooks/useViewAgreementCart";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Payment = () => {

  const [viewCart, refetch] = useViewAgreementCart();
  // console.log(viewCart)
  const axiosSecure = UseAxiosSecure();
  const totalPrice = viewCart.reduce((total, item) => total + item.rent, 0);


  const handleViewAgreeDelete = async (id) => {

    const response = await axiosSecure.delete(`/agreementView/${id}`)
      if(response.data?.acknowledged){
        toast.success('Agreement Deleted!');
        refetch();
      }
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">Total Order: {viewCart.length}</h2>
        <h2 className="text-3xl">Total Price: {totalPrice}</h2>
        
         { viewCart.length ? <Link to="/dashboard/payPayment">
         <button className="btn btn-primary">Pay</button>
         </Link> : 
          <button disabled className="btn btn-primary">Pay</button>
         }

      </div>
      <div>
        <div className="overflow-x-auto ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Block Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Date</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
              {viewCart.map((itemData, index) => (
                <tr key={itemData._id}>
                  <th>{index + 1}</th>
                  <th>{itemData.name}</th>
                  <td>{itemData.blockName}</td>
                  <td>{itemData.date}</td>
                  <td>${itemData.rent}</td>
                  <td>{itemData.date}</td>

                  <th>
                    <button
                      onClick={() => handleViewAgreeDelete(itemData._id)}
                      className="btn btn-ghost btn-xs">
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payment;
