import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import useViewAgreementCart from "../../../../hooks/useViewAgreementCart";
import { AuthContext } from "../../../../Provider/AuthProvider";
import toast from "react-hot-toast";


const CheckOutForm = () => {
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');
    const [transaction, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const {user} = useContext(AuthContext);
    const [viewCart] = useViewAgreementCart();
    
    const totalPrice = viewCart.reduce( (total, item) => total + item.rent , 0)
    const paymentInfo = viewCart.find(cart => cart.email===user.email);
    console.log(paymentInfo);

    useEffect( () => {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement)

    if(card === null){
        return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if(error){
        // console.log('Payment error', error);
        setError(error.message);
    }
    else{
        // console.log('payment method', paymentMethod);
        setError('');
    }

    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })
    if(confirmError){
        // console.log('confirm error');
    }
    else{
        // console.log('payment intent', paymentIntent)
        if(paymentIntent.status === 'succeeded'){
            // console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id);

            // now save the payment in the db
            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: paymentInfo.date,
                payment: 'paid'
               
            }
          const res = await  axiosSecure.post('/payments', payment);
          // console.log('payment saved', res);
          if(res.data?.insertedId){
            toast.success('Payment Successfully!')
          
          }
        }
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transaction && <p className="text-green-500">Your transaction id: {transaction}</p>}
    </form>
  );
};

export default CheckOutForm;
