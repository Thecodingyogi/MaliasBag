import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
// import { useHistory } from "react-router-dom";

const CheckoutForm = ({ onSuccess, totalAmount, itemCount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  // const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
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
    <form onSubmit={handleSubmit}>
      <div>
        <p>Total Amount: {totalAmount}</p>
        <p>Number of Items: {itemCount}</p>
      </div>
      <CardElement />
      <button type="submit">Pay Now</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

CheckoutForm.propTypes = {
  onSuccess: PropTypes.func,
  totalAmount: PropTypes.number,
  itemCount: PropTypes.number,
};

export default CheckoutForm;
