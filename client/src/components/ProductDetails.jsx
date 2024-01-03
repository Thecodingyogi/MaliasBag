import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Layout from "./Layout";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [currentIndex, setCurrentIndex] = useState(
    data.findIndex((item) => item.id === parseInt(id))
  );
  const [nextProduct, setNextProduct] = useState(data[currentIndex + 1]);
  const [prevProduct, setPrevProduct] = useState(data[currentIndex - 1]);

  useEffect(() => {
    setCurrentIndex(data.findIndex((item) => item.id === parseInt(id)));
  }, [id, data]);

  useEffect(() => {
    setNextProduct(data[currentIndex + 1]);
    setPrevProduct(data[currentIndex - 1]);
  }, [currentIndex, data]);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    addToCart(data[currentIndex]);
    toast.success(`${data[currentIndex].name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white p-8 my-8 rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          <Link
            to={`/shop/${prevProduct ? prevProduct.id : ""}`}
            className={`${
              prevProduct
                ? "text-[#BC4C2A] hover:underline cursor-pointer"
                : "hidden"
            }`}
          >
            Previous
          </Link>
          <Link
            to={`/shop/${nextProduct ? nextProduct.id : ""}`}
            className={`${
              nextProduct
                ? "text-[#BC4C2A] hover:underline cursor-pointer"
                : "hidden"
            }`}
          >
            Next
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center p-4">
          <div className="md:w-1/2 md:pr-8 text-center md:text-left">
            <h2 className="text-3xl mb-4 font-semibold text-[#333]">
              {data[currentIndex].name}
            </h2>
            <img
              className="w-96 h-96 object-cover rounded-lg mx-auto mb-4 md:mx-0"
              src={data[currentIndex].image}
              alt={data[currentIndex].name}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <div className="mt-8">
              <p className="text-lg">
                <span className="font-semibold">Color:</span>{" "}
                {data[currentIndex].color}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Price:</span> Ksh{" "}
                {data[currentIndex].price.toLocaleString()}
              </p>
              <p className="text-lg">
                <span className="font-semibold">New Arrival:</span>{" "}
                {data[currentIndex].isNewArrival ? "Yes" : "No"}
              </p>
              <div className="mt-8">
                <button
                  className="hover:bg-[#BC4C2A] text-[#BC4C2A] border border-[#BC4C2A] bg-[#fff] hover:text-white py-2 px-6 rounded-sm shadow-md transition duration-300 transform hover:scale-105"
                  onClick={() => navigate("/shop")}
                >
                  Back to Shop
                </button>
              </div>
              <div className="mt-4">
                <button
                  className="hover:bg-[#BC4C2A] text-[#BC4C2A] border border-[#BC4C2A] bg-[#fff] hover:text-white py-2 px-6 rounded-sm shadow-md transition duration-300 transform hover:scale-105"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

ProductDetails.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ProductDetails;
