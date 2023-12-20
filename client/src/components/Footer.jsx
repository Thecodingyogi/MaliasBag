import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#e6d9d9] text-[#BC4C2A] p-8 w-container mx-auto px-4">
      <div className="w-container mx-auto px-4 flex flex-wrap md:flex-row md:items-start justify-between items-center">
        {/* Connect with Us */}
        <div className="mb-4 font-semibold md:mb-0">
          <h2 className="text-2xl mb-4">Connect with Us</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://twitter.com/Thecodingyogi44"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/cynthia_tonui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/cynthia.c.tonui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        {/* Contact information */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>Email: Cynthiatonui@gmail.com</p>
          <p>Phone: +254 724 207744</p>
        </div>
        {/* Additional Links */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl mb-4 font-semibold">Additional Links</h2>
          <ul>
            <li>
              <Link to="/FAQs" className="hover:cursor-pointer">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/ReturnPolicy" className="hover:cursor-pointer">
                Shipping & Returns
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="pt-2 border-[#BC4C2A] mt-4 text-center leading-loose">
        <p>&copy; 2023 MaliasBag. All rights reserved. Design by TCY</p>
      </div>
    </footer>
  );
};

export default Footer;
