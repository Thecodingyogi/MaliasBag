import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
// import { useHistory } from "react-router-dom";

const CheckOutForm = ({ onSuccess, totalAmount, itemCount, productName }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  // const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !stripe ||
      !elements ||
      isNaN(totalAmount) ||
      totalAmount <= 0 ||
      !Number.isInteger(itemCount) ||
      itemCount < 0
    ) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setError(error.message);
        return;
      }

      // Send the paymentMethod ID to the server for payment processing
      const response = await fetch(
        "http://localhost:4242/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment_method: paymentMethod.id,
            totalAmount,
            itemCount,
            productName,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to create checkout session: ${response.statusText}`
        );
      }

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      } else {
        onSuccess();
        // history.push("/Cart");
      }
    } catch (err) {
      console.error("Error processing payment:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 border rounded shadow-lg"
    >
      <div className="mb-4">
        <p className="text-lg font-semibold mb-2">Order Summary</p>
        <p>Total Amount: Ksh {totalAmount.toLocaleString()}</p>
        <p>Cart Items: {itemCount}</p>
        <p>Product: {productName}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold mb-2">Card Information</p>
        <CardElement className="border p-2 rounded" />
      </div>
      <button
        type="submit"
        className="bg-[#BC4C2A] text-white py-2 px-4 mt-4 rounded-full w-full"
      >
        Pay Now
      </button>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </form>
  );
};

CheckOutForm.propTypes = {
  onSuccess: PropTypes.func,
  totalAmount: PropTypes.number,
  itemCount: PropTypes.number,
  productName: PropTypes.string,
};

export default CheckOutForm;
