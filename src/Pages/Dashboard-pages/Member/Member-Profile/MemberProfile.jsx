import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { motion } from "framer-motion";
import useGetRoles from "../../../../hooks/UseGetRoles";

const MemberProfile = () => {
  const { user } = useContext(AuthContext);
  const { role } = useGetRoles(); // get user role
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://building-management-server-sigma.vercel.app/memberProfile/${user.email}`)
        .then((res) => setProfile(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  if (!profile)
    return (
      <p className="text-center mt-16 text-gray-500 font-medium text-lg animate-pulse">
        Loading profile...
      </p>
    );

  return (
    <motion.div
      className="max-w-5xl mx-auto mt-12 p-6 md:p-10 bg-white rounded-3xl shadow-2xl border border-gray-200"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-yellow-600 mb-8 tracking-wide">
        My Profile
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Left: Profile Image */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={user?.photoURL || "/default-avatar.png"}
            alt={user?.displayName || profile.name}
            className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
          />
        </motion.div>

        {/* Right: Info Card */}
        <motion.div
          className="flex-1 space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Role Display */}
          <div className="p-4 bg-yellow-100 rounded-lg shadow-md text-center font-semibold text-yellow-800 text-lg">
            Role: {role || "Member"}
          </div>

          {/* Profile Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Name", value: user?.displayName || profile.name },
              { label: "Email", value: profile.email },
              {
                label: "Agreement Accept Date",
                value: profile.agreementDate
                  ? new Date(profile.agreementDate).toLocaleDateString()
                  : "N/A",
              },
              { label: "Floor", value: profile.floor || "-" },
              { label: "Block", value: profile.block || "-" },
              { label: "Room No", value: profile.room || "-" },
              { label: "Rent", value: profile.rent ? `$${profile.rent}` : "-" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-semibold text-gray-800">{item.label}:</span>
                <span className="text-gray-600">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MemberProfile;
