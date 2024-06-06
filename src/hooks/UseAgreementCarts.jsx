import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseAgreementCarts = () => {
   const axiosSecure = UseAxiosSecure();
   const {user} = useContext(AuthContext);
   const { refetch, data: cart = [] } = useQuery({
      queryKey: ['cart', user?.email],
      queryFn: async() => {
         const res = await axiosSecure.get(`/agreementCarts?email=${user.email}`);
         return res.data;
      }
   })
   return [cart, refetch]
};

export default UseAgreementCarts;

// import { useQuery } from "@tanstack/react-query";
// import UseAxiosSecure from "./UseAxiosSecure";

// const UseAgreementCarts = () => {
//     // tan Stack Query
//     const axiosSecure = UseAxiosSecure();
//    const {data: cart = [] } = useQuery({
//         queryKey: ['cart'],
//         queryFn: async () => {
//            const res = await axiosSecure.get('/agreementCarts')
//            return res.data;
//         }
//    })
//    return [cart]
// };

// export default UseAgreementCarts;
