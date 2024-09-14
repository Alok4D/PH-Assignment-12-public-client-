import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PayPayment = () => {
    return (
        <div>
            <h2 className="text-sky-500 text-5xl text-center">This is payment page!</h2>
            <div>
              <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
              </Elements>
            </div>
        </div>
    );
};

export default PayPayment;