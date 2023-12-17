import { useAuth } from "./AuthContext";

const AuthDetails = () => {
  const { authUser, userSignOut } = useAuth();

  return (
    <div className="flex justify-between">
      {authUser ? (
        <>
          <p>{`Welcome, ${authUser.email}`}</p>
          <button
            onClick={userSignOut}
            className="border border-[#bc4c2a5e] text-sm rounded-sm text-[#BC4C2A] px-2 hover:bg-[#c45330] hover:text-[#fff] transition duration-300 ease-in-out"
          >
            Sign Out
          </button>
        </>
      ) : (
        <p className="text-[#BC4C2A] text-sm">You&apos;re not Signed In!</p>
      )}
    </div>
  );
};

export default AuthDetails;
