import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const useGetRoles = () => {
    
    const {user} = useContext(AuthContext);

    const axiosPublic = UseAxiosPublic();

    const { data: role = '', isLoading: roleLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic(`/users/${user?.email}`);
            return data?.role;
        }
    })

    return { role, roleLoading };
}

export default useGetRoles