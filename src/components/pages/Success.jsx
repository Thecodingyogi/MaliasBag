import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import SuccessCheck from "../../assets/SuccessCheck.png";

const stripePromise = loadStripe(
  "pk_test_51ONALbJhT4fv35052YwqHdTM55Fn6YGeA961aQTXmIcWEiqEtMBiL7Mjj8oWn3n7PPIMTzhwJDDn0L2qg1YPN9zp00Y1LC2yMg"
);

const Success = () => {
  return (
    <Layout>
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <Elements stripe={stripePromise}>
          <div className="max-w-lg w-full  p-6 bg-white rounded-lg shadow-md my-2">
            <div className="text-3xl text-green-500 text-center mb-4">
              <h1>Payment Successful</h1>
            </div>
            <p className="text-gray-600 text-center mb-4">
              Thank you for your purchase! Your order has been successfully
              processed.
            </p>
            <img
              src={SuccessCheck}
              alt="Success Illustration"
              className=" mb-6 rounded object-cover mx-auto"
            />
            <div className="text-center">
              <Link to="/Shop">
                <button className="bg-[#BC4C2A] text-[#fff] py-2 px-6 rounded-md shadow-md transition duration-300 transform hover:scale-105">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </Elements>
      </div>
    </Layout>
  );
};

export default Success;
