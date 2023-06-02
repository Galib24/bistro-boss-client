import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";


// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle subHeading='Please Proceed' heading='Payment'></SectionTitle>
            <h2 className="text-3xl">this is payment part</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price}></CheckOutForm></Elements>
        </div>
    );
};

export default Payment;