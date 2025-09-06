import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import toast from "react-hot-toast";
import useViewAgreementCart from "../../../../hooks/useViewAgreementCart";

const Payment = () => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [isApplied, setIsApplied] = useState(false);
  const axiosSecure = UseAxiosSecure();
  const [viewCart] = useViewAgreementCart();

  const totalPrice = viewCart.reduce((total, item) => total + item.rent, 0);

  useEffect(() => {
    if (discount > 0) {
      setDiscountedPrice(totalPrice - (totalPrice * discount) / 100);
    } else {
      setDiscountedPrice(totalPrice);
    }
  }, [discount, totalPrice]);

  const handleApplyCoupon = async () => {
    if (!couponCode) return;

    try {
      const res = await axiosSecure.post("/validate-coupon", { couponCode });
      if (res.data.success) {
        setDiscount(res.data.discount);
        setIsApplied(true);
        toast.success(res.data.message);
      } else {
        setDiscount(0);
        setIsApplied(false);
        toast.error(res.data.message);
      }
    } catch (err) {
      setDiscount(0);
      setIsApplied(false);
      toast.error(err.response?.data?.message || "Invalid coupon");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side: Total Price */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Total Price</h2>
          <p className="text-xl">
            {discount > 0 ? (
              <>
                Original: <span className="line-through">${totalPrice}</span> <br />
                Discounted: <span className="text-green-600">${discountedPrice}</span>
              </>
            ) : (
              <span>${totalPrice}</span>
            )}
          </p>
        </div>

        {/* Right Side: Apply Coupon */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Apply Coupon</h2>
          <input
            type="text"
            placeholder="Enter coupon code (optional)"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="input input-bordered w-full mb-3"
            disabled={isApplied}
          />
          <button
            className={`btn w-full mb-3 ${isApplied ? "btn-success cursor-not-allowed" : "btn-secondary"}`}
            onClick={handleApplyCoupon}
            disabled={isApplied}
          >
            {isApplied ? "Coupon Applied" : "Apply Coupon"}
          </button>
          {discount > 0 && (
            <p className="text-green-600 font-medium">
              Discount Applied: {discount}% → New Price: ${discountedPrice}
            </p>
          )}
          {discount === 0 && (
            <p className="text-gray-600">No coupon applied. You will pay full price.</p>
          )}
        </div>
      </div>

      {/* Pay Button outside boxes */}
      <div className="mt-6 flex justify-center">
        <Link to={`/dashboard/payPayment?discount=${discount}`}>
          <button className="btn btn-primary btn-lg px-12 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200">
            Pay ${discount > 0 ? discountedPrice : totalPrice}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
