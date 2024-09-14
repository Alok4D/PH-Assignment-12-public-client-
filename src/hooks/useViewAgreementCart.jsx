import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useViewAgreementCart = () => {

    const axiosSecure = UseAxiosSecure();
    const {user} = useContext(AuthContext);

    const { refetch, data: viewCart = [] } = useQuery({
        queryKey: ['viewCart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/agreementView?email=${user.email}`);
            return res.data;
        }
    })
    return [viewCart, refetch]
};

export default useViewAgreementCart;


















// import { useQuery } from "@tanstack/react-query";
// import UseAxiosSecure from "./UseAxiosSecure";

// const useViewAgreementCart = () => {
//     // tan stack query
//     const axiosSecure = UseAxiosSecure();
//     const {data: viewCart = [] } = useQuery({
//         queryKey: ['cart'],
//         queryFn: async () =>{
//             const res = await axiosSecure.get('/agreementView')
//             return res.data;
//         }
//     })
//     return [viewCart]
// };

// export default useViewAgreementCart;
