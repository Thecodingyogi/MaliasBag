import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import SuccessCheck from "../../assets/SuccessCheck.png";
import { useAuth } from "../auth/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const stripePromise = loadStripe(
  "pk_test_51ONALbJhT4fv35052YwqHdTM55Fn6YGeA961aQTXmIcWEiqEtMBiL7Mjj8oWn3n7PPIMTzhwJDDn0L2qg1YPN9zp00Y1LC2yMg"
);

const Success = () => {
  const { authUser, userSignOut } = useAuth();

  const handleSignOut = () => {
    userSignOut();
    toast.success("Successfully logged out!", {
      autoClose: 1000,
      theme: "dark",
    });
  };

  return (
    <Layout>
      <div className="h-screen flex items-center justify-center bg-gray-100">
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
            <div className="text-center flex justify-center items-center flex-col gap-6">
              <div>
                <Link to="/Shop">
                  <button className="hover:bg-[#BC4C2A] hover:text-[#fff] text-[#BC4C2A] bg-[#fff] border border-[#BC4C2A] py-2 px-6 rounded-md shadow-md transition duration-300 transform hover:scale-105">
                    Continue Shopping
                  </button>
                </Link>
              </div>
              <div>
                {authUser ? (
                  <button
                    onClick={handleSignOut}
                    className="hover:bg-[#BC4C2A] text-[#BC4C2A] border border-[#BC4C2A] bg-[#fff] hover:text-[#fff] py-1 px-4 rounded-sm shadow-md transition duration-300 transform hover:scale-105"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/Login">
                    <button className="hover:bg-[#BC4C2A] hover:text-[#fff] text-[#BC4C2A] bg-[#fff] border border-[#BC4C2A] py-1 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105">
                      Log In
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Elements>
      </div>
    </Layout>
  );
};

export default Success;
