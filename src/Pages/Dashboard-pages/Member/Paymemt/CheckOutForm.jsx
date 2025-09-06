// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useContext, useEffect, useState } from "react";
// import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
// import useViewAgreementCart from "../../../../hooks/useViewAgreementCart";
// import { AuthContext } from "../../../../Provider/AuthProvider";
// import toast from "react-hot-toast";

// const CheckOutForm = ({ couponDiscount = 0 }) => {
//   const [clientSecret, setClientSecret] = useState('');
//   const [error, setError] = useState('');
//   const [transaction, setTransactionId] = useState('');
//   const [loading, setLoading] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();
//   const axiosSecure = UseAxiosSecure();
//   const { user } = useContext(AuthContext);
//   const [viewCart, refetch] = useViewAgreementCart();

//   const totalPrice = viewCart.reduce((total, item) => total + item.rent, 0);
//   const discountedPrice = totalPrice * (1 - couponDiscount / 100);

//   useEffect(() => {
//     if(discountedPrice > 0){
//       axiosSecure.post('/create-payment-intent', { price: discountedPrice })
//         .then(res => setClientSecret(res.data.clientSecret))
//         .catch(err => console.log(err));
//     }
//   }, [axiosSecure, discountedPrice]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     if(!stripe || !elements) return;

//     const card = elements.getElement(CardElement);
//     if(!card) return;

//     const { error: paymentMethodError } = await stripe.createPaymentMethod({
//       type: 'card',
//       card
//     });

//     if(paymentMethodError){
//       setError(paymentMethodError.message);
//       setLoading(false);
//       return;
//     } else {
//       setError('');
//     }

//     // confirm payment
//     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card,
//         billing_details: {
//           email: user?.email || 'anonymous',
//           name: user?.displayName || 'anonymous'
//         }
//       }
//     });

//     if(confirmError){
//       setError(confirmError.message);
//       setLoading(false);
//       return;
//     }

//     if(paymentIntent.status === 'succeeded'){
//       setTransactionId(paymentIntent.id);

//       // Save payment in DB
//       const payment = {
//         email: user.email,
//         price: discountedPrice,
//         originalPrice: totalPrice,
//         discount: couponDiscount,
//         transactionId: paymentIntent.id,
//         date: new Date(),
//         payment: 'paid'
//       };

//       try {
//         const res = await axiosSecure.post('/payments', payment);
//         if(res.data?.insertedId){
//           toast.success('Payment Successful!');
//           // Clear user's cart
//           refetch();
//         }
//       } catch(err) {
//         console.log(err);
//         toast.error('Payment saved failed!');
//       }
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <p className="text-lg">Total: ${totalPrice.toFixed(2)}</p>
//         {couponDiscount > 0 && (
//           <p className="text-green-600 font-semibold">
//             Discounted Price: ${discountedPrice.toFixed(2)}
//           </p>
//         )}
//       </div>

//       <div className="border border-gray-300 rounded-xl p-4 mb-4">
//         <CardElement
//           options={{
//             style: {
//               base: { fontSize: "18px", color: "#424770", "::placeholder": { color: "#aab7c4" } },
//               invalid: { color: "#9e2146" }
//             }
//           }}
//         />
//       </div>

//       <button
//         className="btn btn-primary w-full"
//         type="submit"
//         disabled={!stripe || !clientSecret || loading}
//       >
//         {loading ? "Processing..." : "Pay"}
//       </button>

//       {error && <p className="text-red-600 mt-2">{error}</p>}
//       {transaction && <p className="text-green-500 mt-2">Transaction ID: {transaction}</p>}
//     </form>
//   );
// };

// export default CheckOutForm;


import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import useViewAgreementCart from "../../../../hooks/useViewAgreementCart";
import { AuthContext } from "../../../../Provider/AuthProvider";
import toast from "react-hot-toast";

const CheckOutForm = ({ couponDiscount = 0 }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [transaction, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const [viewCart, refetch] = useViewAgreementCart();

  const totalPrice = viewCart.reduce((total, item) => total + item.rent, 0);
  const discountedPrice = totalPrice * (1 - couponDiscount / 100);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { price: discountedPrice }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, discountedPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error: paymentMethodError } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: user?.email || "anonymous",
        name: user?.displayName || "anonymous",
      },
    });

    if (paymentMethodError) {
      setError(paymentMethodError.message);
      return;
    } else {
      setError("");
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card },
    });

    if (confirmError) {
      setError(confirmError.message);
    } else if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user.email,
        price: discountedPrice,
        originalPrice: totalPrice,
        discount: couponDiscount,
        transactionId: paymentIntent.id,
        date: new Date(),
        payment: "paid",
      };

      try {
        const res = await axiosSecure.post("/payments", payment);
        if (res.data?.insertedId) {
          toast.success("Payment Successful!");

          // Clear cart
          refetch();

          // Clear CardElement fields
          const card = elements.getElement(CardElement);
          if (card) card.clear();

          // Reset state
          setError("");
        }
      } catch (err) {
        console.log(err);
        toast.error("Payment save failed!");
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-sky-500">Complete Your Payment</h2>

      <div className="mb-4">
        <p className="text-lg">Total Price: ${totalPrice.toFixed(2)}</p>
        {couponDiscount > 0 && <p className="text-green-600">Discounted Price: ${discountedPrice.toFixed(2)}</p>}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "18px",
                  color: "#424770",
                  "::placeholder": { color: "#aab7c4" },
                  padding: "12px",
                },
                invalid: { color: "#9e2146" },
              },
            }}
          />
        </div>

        {error && <p className="text-red-600 mb-2">{error}</p>}
        {transaction && <p className="text-green-500 mb-2">Transaction ID: {transaction}</p>}

        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-lg transition"
        >
          Pay ${discountedPrice.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
