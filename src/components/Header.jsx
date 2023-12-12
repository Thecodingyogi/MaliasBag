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

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { cartCount } = useCart();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="bg-pink-100 container z-50 mx-auto px-4 sticky top-0">
      {/* Top side */}
      <div className="flex justify-between items-center p-2">
        <h1 className="text-[#BC4C24] p-2 cursor-pointer text-2xl">
          <Link to="/">MaliasBag.</Link>
        </h1>
        <div className="hidden md:flex justify-center items-center relative p-2 hover:opacity-80 hover:shadow-sm transform hover:translate-y-px">
          <input
            type="text"
            placeholder="Search bags ..."
            className="placeholder:text-[#BC4C24] focus: outline-none bg-transparent border-b  border-[#BC4C24] transition-all duration-300 px-6 py-1"
          />
          <FaSearch className="cursor-pointer absolute right-0 top-0 mt-2 mr-3 text-[#BC4C24]" />
        </div>
        <div className="flex justify-between items-center space-x-4 p-2">
          <div onClick={handleMenu} className="md:hidden">
            {openMenu ? (
              <AiOutlineClose size={32} />
            ) : (
              <AiOutlineMenu size={32} />
            )}
          </div>
          <div className=" hidden space-x-2 md:flex justify-between items-center p-2">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
          </div>
          <div className="hidden md:flex justify-between items-center space-x-2 p-2">
            <FaUser size={20} />
            <p>Log In</p>
          </div>
          <div className="relative md:flex justify-center items-center">
            <Link className="relative">
              <FaShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-[-6px] right-[-8px] bg-red-500 text-white px-[2px] py-0 rounded-full text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Side */}
      <nav>
        <ul className="hidden md:flex cursor-pointer justify-center items-center space-x-16 text-xl">
          <li className="p-2 hover:-translate-y-px transition-all duration-300 hover:shadow-sm transform">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 hover:-translate-y-px transition-all duration-300 hover:shadow-sm transform">
            <Link to="/Shop">Shop</Link>
          </li>
          <li className="p-2 hover:-translate-y-px transition-all duration-300 hover:shadow-sm transform">
            <Link to="/About">About</Link>
          </li>
          <li className="p-2 hover:-translate-y-px transition-all duration-300 hover:shadow-sm transform">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Responsive code */}
        <ul
          className={
            openMenu
              ? "border-r border-r-[#bc4c2a38] bg-pink-100 fixed top-0 left-0 md:hidden flex flex-col cursor-pointer uppercase justify-center items-center w-[80%] h-full ease-in-out duration-300 text-[#BC4C2A] text-2xl"
              : "border-r border-r-[#bc4c2a38] bg-pink-100 top-0 md:hidden flex flex-col justify-center items-center w-[80%] h-full text-[#BC4C2A] text-2xl ease-in-out fixed duration-300 left-[-100%]"
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
