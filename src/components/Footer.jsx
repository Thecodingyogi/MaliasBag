import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e6d9d9] text-[#BC4C2A] p-8 w-container mx-auto px-4">
      <div className="w-container mx-auto px-4 flex flex-wrap md:flex-row md:items-start justify-between items-center">
        {/* Connect with Us */}
        <div className="mb-4 font-semibold md:mb-0">
          <h2 className="text-2xl mb-4">Connect with Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        {/* Contact information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>Email: Cynthiatonui@gmail.com</p>
          <p>Phone: +254 724 207744</p>
        </div>
        {/* Newsletter */}
        <div className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">NewsLetter</h2>
          <p>Subscribe to our newsletter for Updates</p>
        </div>
        {/* Bottom Section */}
        <div className="pt-4 border-t border-[#BC4C2A] text-center">
          <p>&copy; 2023 MaliasBag. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
