import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";


// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading='Please Proceed' heading='Payment'></SectionTitle>
            <h2 className="text-3xl">this is payment part</h2>
            <Elements stripe={stripePromise}><CheckOutForm></CheckOutForm></Elements>
        </div>
    );
};

export default Payment;