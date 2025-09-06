import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PayPayment = () => {
  const [searchParams] = useSearchParams();
  const discount = parseFloat(searchParams.get("discount") || 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full max-w-3xl mb-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-sky-600 mb-4">
          Complete Your Payment
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl">
          Securely pay your rent online. Enter your card details below.
        </p>
      </header>

      {/* Discount Alert */}
      {discount > 0 && (
        <div className="bg-green-50 border border-green-300 text-green-800 rounded-lg p-4 mb-6 w-full max-w-md text-center shadow">
          <p className="font-semibold text-lg">
            Coupon Applied! You will get {discount}% discount
          </p>
        </div>
      )}

      {/* Payment Card Box */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-700 text-center">
          Enter Your Card Details
        </h2>
        <div className="border border-gray-200 rounded-xl p-6">
          <Elements stripe={stripePromise}>
            <CheckOutForm couponDiscount={discount} />
          </Elements>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-6 text-gray-500 text-center max-w-md text-sm">
        Your payment is secure and powered by Stripe. We do not store your card details.
      </p>
    </div>
  );
};

export default PayPayment;
