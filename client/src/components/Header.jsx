import { useState } from "react";
import { useCart } from "./CartContext";
import {
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import { useAuth } from "../components/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { getCartCount } = useCart();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { authUser, userSignOut } = useAuth();
  const navigate = useNavigate();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSignOut = () => {
    userSignOut();
    toast.success("Successfully logged out!", {
      autoClose: 1000,
      theme: "dark",
    });
  };

  const performSearch = (query) => {
    // Perform your search logic here (e.g., search in a list of products)
    const results = data.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleSearchInput = (event) => {
    const input = event.target.value;
    setSearchInput(input);

    // Perform search when the input is not empty
    if (input.trim() !== "") {
      performSearch(input);
    } else {
      setSearchResults([]); // Clear results if the input is empty
    }
  };

  const handleResultClick = (productId) => {
    // Redirect to the specific product page
    navigate(`/shop/${productId}`);
    // Clear search results
    setSearchResults([]);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchResults.length > 0 && searchResults[0]) {
      const firstResultId = searchResults[0].id;
      navigate(`/shop/${firstResultId}`);
    }
  };

  return (
    <header className="bg-[#f0f0d0f3] container mx-auto md:px-4 z-50 sticky top-0">
      {/* Top side */}
      <div className="flex md:justify-between items-center py-2">
        <h1 className="text-[#BC4C24] cursor-pointer mr-3 md:py-2 md:text-2xl">
          <Link to="/">MaliasBag</Link>
        </h1>

        {/* Mobile Search bar */}
        <div className="md:hidden flex justify-center items-center relative py-2 hover:shadow-sm mr-2 transform hover:translate-y-px">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search bags ..."
                value={searchInput}
                onChange={handleSearchInput}
                className="placeholder:text-[#BC4C24] focus:outline-none bg-transparent text-sm border-b border-[#BC4C24] py-1 transition-all duration-300"
              />
              <FaSearch
                type="submit"
                className="cursor-pointer absolute right-0 top-0 mt-2 mr-3 text-[#BC4C24]"
              />

              {/* Display search results */}
              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full bg-pink-100 border border-gray-100 rounded z-10">
                  {searchResults.map((result) => (
                    <Link
                      key={result.id}
                      onClick={() => handleResultClick(result.id)}
                      className="block p-2 hover:bg-[#ebb866]"
                    >
                      {/* Render specific properties of the result object */}
                      <p>{result.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="hidden md:flex justify-center items-center relative py-2 px-8 hover:shadow-sm transform hover:translate-y-px">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search bags ..."
                value={searchInput}
                onChange={handleSearchInput}
                className="placeholder:text-[#BC4C24] focus:outline-none bg-transparent border-b  border-[#BC4C24] transition-all duration-300 px-14 py-1"
              />
              <FaSearch
                type="submit"
                className="cursor-pointer absolute right-0 top-0 mt-2 mr-3 text-[#BC4C24]"
              />

              {/* Display search results */}
              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full bg-pink-100 border border-gray-100 rounded z-10">
                  {searchResults.map((result) => (
                    <Link
                      key={result.id}
                      onClick={() => handleResultClick(result.id)}
                      className="block p-2 hover:bg-[#ebb866]"
                    >
                      {/* Render specific properties of the result object */}
                      <p>{result.name}</p>
                      {/* Add other properties you want to display */}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="flex md:justify-between items-center md:space-x-4 gap-1 md:p-2">
          <div onClick={handleMenu} className="md:hidden">
            {openMenu ? (
              <AiOutlineClose size={22} />
            ) : (
              <AiOutlineMenu size={22} />
            )}
          </div>
          <div className=" hidden space-x-2 md:flex justify-between items-center p-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BC4C24]"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BC4C24]"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BC4C24]"
            >
              <FaTwitter size={20} />
            </a>
          </div>
          {authUser ? (
            <div
              onClick={handleSignOut}
              className="hidden md:flex justify-between items-center space-x-2 p-2 cursor-pointer"
            >
              <FaUser size={20} />
              <p>Log Out</p>
            </div>
          ) : (
            <Link to="/Login">
              <div className="hidden md:flex justify-between items-center space-x-2 p-2">
                <FaUser size={20} />
                <p>Log In</p>
              </div>
            </Link>
          )}
          <div className="relative md:flex justify-center  items-center">
            <Link to="/Cart" className="relative">
              <FaShoppingCart size={20} />
              {getCartCount() >= 0 && (
                <span className="absolute top-[-6px] right-[-7px] bg-red-500 text-white px-[4px] py-0 rounded-full text-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Side */}
      <nav>
        {/* Conditionally render navigation links based on search state */}
        {!searchResults.length > 0 && (
          <ul className="hidden md:flex cursor-pointer justify-center items-center space-x-16 text-xl">
            <li className="p-2 hover:-translate-y-px transition-all duration-300 transform">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 hover:-translate-y-px transition-all duration-300  transform">
              <Link to="/Shop">Shop</Link>
            </li>
            <li className="p-2 hover:-translate-y-px transition-all duration-300  transform">
              <Link to="/About">About</Link>
            </li>
            <li className="p-2 hover:-translate-y-px transition-all duration-300  transform">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        )}

        {/* Mobile Responsive code */}
        <ul
          className={
            openMenu
              ? "border-r border-r-[#bc4c2a38] bg-[#f0f0d0f3] fixed top-0 left-0 md:hidden flex flex-col cursor-pointer uppercase justify-center items-center w-[74%] h-full ease-in-out duration-300 text-[#BC4C2A] text-2xl"
              : "border-r border-r-[#bc4c2a38] bg-[#f0f0d0f3] top-0 md:hidden flex flex-col justify-center items-center w-[74%] h-full text-[#BC4C2A] text-2xl ease-in-out fixed duration-300 left-[-100%]"
          }
        >
          <li className="p-4 hover:-translate-y-px transition-all duration-300 transform">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:-translate-y-px transition-all duration-300 transform">
            <Link to="/Shop">Shop</Link>
          </li>
          <li className="p-4 hover:-translate-y-px transition-all duration-300 transform">
            <Link to="/About">About</Link>
          </li>
          <li className="p-4 hover:-translate-y-px transition-all duration-300 transform">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
