import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setCardError('');
        }

    }

    return (
        <>

            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="text-white btn btn-info btn-sm mt-4" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}

        </>
    );
};

export default CheckOutForm;