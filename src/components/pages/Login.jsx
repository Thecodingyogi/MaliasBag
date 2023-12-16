import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center opacity-90 justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1561542611-7af32c97f8db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGxvZ2luJTIwYmVpZ2V8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="bg-[#fff] p-8 rounded shadow-md w-96 text-center">
        <h2 className="text-4xl text-[#BC4C2A] mb-6">MaliasBag.</h2>
        <form>
          {/* Login form fields */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
          <button className="w-full bg-gray-200 text-[#333] py-2 px-4 border border-gray-300 shadow-sm rounded hover:bg-gray-300 focus:outline-none">
            <div className="flex items-center justify-center gap-2">
              <FcGoogle />
              <span>Sign In with Google</span>
            </div>
          </button>
        </div>

        <div className="mt-4">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account?{" "}
            <a href="#signup" className="text-blue-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
