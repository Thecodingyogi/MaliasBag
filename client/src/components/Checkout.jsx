import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useCart } from "./CartContext";
import { useAuth } from "../components/auth/AuthContext";
import AuthDetails from "../components/auth/AuthDetails";
import Login from "./auth/Login";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

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

  useEffect(() => {
    if (paymentSuccessful) {
      // Clear the cart upon successful payment
      clearCart();
      console.log("Payment successful!");
    }
  }, [paymentSuccessful, clearCart]);

  const handlePaymentSuccess = () => {
    // Set the paymentSuccessful state to true
    setPaymentSuccessful(true);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1637841099236-a9f2d821aaa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlaWdlJTIwYWVzdGhldGljfGVufDB8fDB8fHww")',
        backgroundSize: "cover",
      }}
      className="bg-gray-100 h-screen flex items-center justify-center"
    >
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
                    productName="Handbags"
                    onSuccess={handlePaymentSuccess}
                  />
                </div>
              </>
            )
          ) : (
            <Login
              redirectPath="/Checkout"
              // onLogin={() => navigate("/checkout")}
            />
          )}
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;
