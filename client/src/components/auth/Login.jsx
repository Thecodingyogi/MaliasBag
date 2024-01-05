import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import PropTypes from "prop-types";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ redirectPath = "/Home" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("Successfully signed in!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
        navigate(redirectPath);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        toast.error("Sign-in failed. Please try again.");

        // Handle specifice errors
        if (errorCode === "auth/invalid-credential") {
          setError("This email is not registered. Please Sign up");
        } else if (errorCode === "auth/invalid-password") {
          setError("Incorrect password. Please try again.");
        } else {
          setError("An error occured. Please try again.");
        }
      });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("Successfully signed in!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
        navigate(redirectPath);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        toast.error("Google sign-in failed. Please try again.");
      });
  };

  return (
    <div
      className="bg-cover bg-center flex items-center opacity-90 justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1637841099236-a9f2d821aaa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlaWdlJTIwYWVzdGhldGljfGVufDB8fDB8fHww')",
      }}
    >
      <div className="bg-[#fff] p-8 rounded shadow-md max-w-md text-center">
        <h2 className="text-4xl text-[#BC4C2A] mb-6">Sign In</h2>
        <form onSubmit={signIn}>
          {/* Login form fields */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#BC4C2A] text-white py-2 px-4 rounded hover:bg-[#d14b23] focus:outline-none"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6">
          {/* Google sign-in button */}
          <button
            onClick={signInWithGoogle}
            className="w-full bg-gray-200 text-[#333] py-2 px-4 border border-gray-300 shadow-sm rounded hover:bg-gray-300 focus:outline-none"
          >
            <div className="flex items-center justify-center gap-2">
              <FcGoogle />
              <span className="text-sm">Sign In with Google</span>
            </div>
          </button>
        </div>

        {error && (
          <div className="mt-4 text-red-500">
            <p>{error}</p>
          </div>
        )}

        <div className="mt-4">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/Signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  redirectPath: PropTypes.string,
};

export default Login;
