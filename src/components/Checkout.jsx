import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useCart } from "./CartContext";

const stripePromise = loadStripe(
  "pk_test_51ONALbJhT4fv35052YwqHdTM55Fn6YGeA961aQTXmIcWEiqEtMBiL7Mjj8oWn3n7PPIMTzhwJDDn0L2qg1YPN9zp00Y1LC2yMg"
);

const Checkout = () => {
  const { clearCart, getCartCount } = useCart();
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const { cart } = useCart();

  // Calculate total amount
  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const itemCount = getCartCount();

  const handlePaymentSuccess = () => {
    // Clear the cart upon successful payment
    clearCart();

    // Set the paymentSuccessful state to true
    setPaymentSuccessful(true);

    // Handle additional logic for successful payment if needed
    console.log("Payment successful!");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <Elements stripe={stripePromise}>
        {paymentSuccessful ? (
          <div>
            <h1>Payment Successful</h1>
            {/* Add any additional success message or redirection logic */}
          </div>
        ) : (
          <CheckoutForm
            totalAmount={totalAmount}
            itemCount={itemCount}
            products="Leather Bag"
            onSuccess={handlePaymentSuccess}
          />
        )}
      </Elements>
    </div>
  );
};

export default Checkout;
