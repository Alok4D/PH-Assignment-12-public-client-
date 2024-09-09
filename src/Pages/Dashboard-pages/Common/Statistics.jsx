import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const Statistics = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/011/976/274/non_2x/stick-figures-welcome-free-vector.jpg" alt="" className="h-[90%] " />
            </div>
            <p className="text-pink-400 text-5xl text-center">{user?.displayName}</p>
        </div>
    );
};

export default Statistics;