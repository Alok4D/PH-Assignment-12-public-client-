import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://building-management-server-sigma.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;