import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <Helmet>
        <title>Dashboard || My Profile</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-700 dark:text-white mb-6">
        My Profile
      </h1>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
        {/* User Info */}
        <div className="flex items-center space-x-6">
          <img
            className="w-28 h-28 rounded-full object-cover bg-gray-300"
            src={user?.photoURL}
            alt={user?.displayName}
          />
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
              {user?.displayName}
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              Email: {user?.email}
            </p>
            <p className="text-gray-500 dark:text-gray-300">
              Role: Normal User
            </p>
          </div>
        </div>

        {/* Apartment Info */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
            Apartment Info
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
            <div>
              <span className="font-medium">Agreement Accept Date:</span> none
            </div>
            <div>
              <span className="font-medium">Floor:</span> none
            </div>
            <div>
              <span className="font-medium">Block:</span> none
            </div>
            <div>
              <span className="font-medium">Room No:</span> none
            </div>
          </div>
        </div>

        <button className="w-full py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
