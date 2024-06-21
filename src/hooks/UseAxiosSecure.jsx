import axios from "axios";

const axiosSecure = axios.create({
    baseURL : 'https://building-management-server-sigma.vercel.app/'
})
const UseAxiosSecure = () => {
    
  return axiosSecure;
};

export default UseAxiosSecure;