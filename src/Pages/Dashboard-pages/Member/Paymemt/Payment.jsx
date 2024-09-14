import { FaTrashAlt } from "react-icons/fa";
import useViewAgreementCart from "../../../../hooks/useViewAgreementCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const Payment = () => {

  const [viewCart, refetch] = useViewAgreementCart();
  const axiosSecure = UseAxiosSecure();
  const totalPrice = viewCart.reduce((total, item) => total + item.rent, 0);


  const handleViewAgreeDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/agreementView${id}`)
        .then((res) => {
          if (res.itemData.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your agreement deleted!",
              icon: "success",
            });
          }
        });
      }
    });
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

                  <th>
                    <button
                      onClick={() => handleViewAgreeDelete(itemData._id)}
                      className="btn btn-ghost btn-xs"
                    >
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
