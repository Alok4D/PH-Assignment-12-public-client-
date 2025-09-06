import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { motion } from "framer-motion";

const MemberProfile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/memberProfile/${user.email}`)
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
      className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-yellow-600 tracking-wide">
        My Profile
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={user?.photoURL || "/default-avatar.png"}
            alt={user?.displayName || profile.name}
            className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          className="flex-1 space-y-4 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
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
              className="flex justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <span className="font-semibold text-gray-800">{item.label}:</span>
              <span className="text-gray-600">{item.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MemberProfile;
