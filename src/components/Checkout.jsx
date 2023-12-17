import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useCart } from "./CartContext";
import { useAuth } from "../components/auth/AuthContext";
import AuthDetails from "../components/auth/AuthDetails";
import Login from "./auth/Login";

const stripePromise = loadStripe(
  "pk_test_51ONALbJhT4fv35052YwqHdTM55Fn6YGeA961aQTXmIcWEiqEtMBiL7Mjj8oWn3n7PPIMTzhwJDDn0L2qg1YPN9zp00Y1LC2yMg"
);

const Checkout = () => {
  const { clearCart, getCartCount, cart } = useCart();
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const { authUser } = useAuth();

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
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md h-[80%] w-full max-w-md flex-col">
        <Elements stripe={stripePromise}>
          {authUser ? (
            paymentSuccessful ? (
              <div className="text-2xl text-red-500 text-center mb-4">
                <h1>Payment Not Successful</h1>
              </div>
            ) : (
              <>
                <h2 className="text-2xl mb-4 text-[#BC4C2A] font-bold text-center">
                  Checkout
                </h2>
                <div className="mt-6">
                  <AuthDetails />
                  <CheckOutForm
                    totalAmount={totalAmount}
                    itemCount={itemCount}
                    productName="Purchased Items"
                    onSuccess={handlePaymentSuccess}
                  />
                </div>
              </>
            )
          ) : (
            <Login
              redirectPath="/checkout"
              // onLogin={() => navigate("/checkout")}
            />
          )}
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;
