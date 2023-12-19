import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();

    // This clears the previous error message
    setError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsSignUpSuccessful(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);

        if (errorCode === "auth/weak-password") {
          setError("The provided password is too weak.");
        } else if (errorCode === "auth/email-already-in-use") {
          setError("The provided email is already in use ");
        } else {
          setError("Error signing up. Please try again.");
        }
      });
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center opacity-90 justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1561542611-7af32c97f8db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGxvZ2luJTIwYmVpZ2V8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="bg-[#fff] p-8 rounded shadow-md w-96 text-center">
        {isSignUpSuccessful ? (
          <div>
            <p className="text-black mb-4">Thank you for signing up!</p>
            <button
              onClick={handleLoginClick}
              className="bg-[#BC4C2A] text-white py-2 px-4 rounded hover:bg-[#d14b23] focus:outline-none"
            >
              Login
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-4xl text-[#BC4C2A] mb-6">Register here.</h2>
            <form onSubmit={signUp}>
              {/* Signup form fields */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm mb-2"
                >
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
                Sign Up
              </button>
            </form>
          </>
        )}

        <div className="mt-6">
          {/* Google sign-up button */}
          <button className="w-full bg-gray-200 text-[#333] py-2 px-4 border border-gray-300 shadow-sm rounded hover:bg-gray-300 focus:outline-none">
            <div className="flex items-center justify-center gap-2">
              <FcGoogle />
              <span className="text-sm">Sign Up with Google</span>
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
            Already have an account?{" "}
            <Link to="/Login" className="text-blue-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
