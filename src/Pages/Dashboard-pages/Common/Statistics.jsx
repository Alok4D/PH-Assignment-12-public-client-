import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useGetRoles from "../../../hooks/UseGetRoles";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const { role } = useGetRoles();
  // console.log(role);
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div>
      <Helmet>
        <title>Dashboard Statistics</title>
      </Helmet>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/976/274/non_2x/stick-figures-welcome-free-vector.jpg"
          alt=""
          className="h-[90%] "
        />
      </div>
      <p className="text-yellow-400-400 text-5xl text-center">
        {user?.displayName}
      </p>
    </div>
  );
};

export default Statistics;
