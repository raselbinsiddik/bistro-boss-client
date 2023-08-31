import { loadStripe } from "@stripe/stripe-js";
import SectionsTitle from "../../../copmonets/SectionTitle/SectionsTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/UseCart"

const stripPromise = loadStripe(import.meta.env.VITE_payment_getway_pk);
// console.log("as", import.meta.env.VITE_payment_getway_pk);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionsTitle subHeading={'please processs the payment'}
                heading={'payment'}></SectionsTitle>
            
            <Elements stripe={stripPromise}><CheckOutForm cart={cart} price={price}></CheckOutForm></Elements>
        </div>
    );
};

export default Payment;