import { FaTrashAlt } from "react-icons/fa";
import UseAgreementCarts from "../../../hooks/UseAgreementCarts";

import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const AgreementRequest = () => {
  const axiosSecure = UseAxiosSecure();
  const [cart, refetch] = UseAgreementCarts();
  console.log(cart);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
      
        axiosSecure.delete(`/agreementCarts/${id}`)
        .then(res => {
          if(res.data.deletedCount > 0){
            refetch();
              Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
             icon: "success"
        });
          }
        })
      }
    });
  }

  return (
    <div>
      <div>
        <h2 className="text-6xl">Items: {cart.length}</h2>
      
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th># </th>
              <th>Name</th>
              <th>Email</th>
              <th>Floor no</th>
              <th>Block Name</th>
              <th>Room No</th>
              <th>Rent</th>
              <th>Agreement request date</th>
              <th>Accept button</th>
              <th>Reject button</th>
            </tr>
          </thead>
          <tbody>
          {
            cart.map((item, index) =>    <tr key={item._id}>
              <th>
                {index + 1}
              </th>
              <td>{item.userName}</td>
              <td>{item.email}</td>
              <td>{item.floorNo}</td>
              <td>{item.blockName}</td>
              <td>{item.apartmentNo}</td>
              <td>${item.rent}</td>
              <td>{item.agreementReqDate}</td>
              <th>
                <button className="btn btn-ghost btn-xs">
                <TiTick className="text-2xl text-green-400" />
                </button>
              </th>
              <th>
                <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-ghost btn-xs">
                  <FaTrashAlt className="text-[14px] text-red-400" />
                </button>
              </th>
            </tr> )
          }
         
          
          </tbody>
       
        
        </table>
      </div>
    </div>
  );
};

export default AgreementRequest;
