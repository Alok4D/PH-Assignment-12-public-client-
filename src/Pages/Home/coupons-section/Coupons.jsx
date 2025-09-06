import { useEffect, useState } from "react";
import { FaCopy, FaTag } from "react-icons/fa";
import Swal from "sweetalert2";

const CouponSection = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    // Fetch coupons from your backend API
    fetch("http://localhost:5000/coupons") // Replace with your deployed API URL
      .then((res) => res.json())
      .then((data) => setCoupons(data));
  }, []);

  // Copy coupon code
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    Swal.fire("Copied!", `Coupon code "${code}" copied successfully.`, "success");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          🎁 Exclusive Coupons
        </h2>

        {/* Coupon Cards */}
        {coupons.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coupons.map((coupon) => (
              <div
                key={coupon._id}
                className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                {/* Discount Badge */}
                <div className="absolute -top-3 -right-3 bg-yellow-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                  {coupon.discount}% OFF
                </div>

                {/* Icon + Code */}
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-yellow-100 p-4 rounded-full text-yellow-600 text-3xl shadow-md">
                    <FaTag />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 tracking-wide uppercase">
                    {coupon.couponCode}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center mt-4 flex-1">
                  {coupon.description || "Use this coupon to get amazing discounts!"}
                </p>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(coupon.couponCode)}
                  className="mt-6 w-full py-2 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 transition flex items-center justify-center gap-2"
                >
                  <FaCopy /> Copy Code
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No coupons available right now.</p>
        )}
      </div>
    </section>
  );
};

export default CouponSection;
