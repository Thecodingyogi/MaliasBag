import { useParams, Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Layout from "./Layout";
import { useCart } from "./CartContext";

const ProductDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateCartCount } = useCart();

  const currentIndex = data.findIndex((item) => item.id === parseInt(id));
  const nextProduct = data[currentIndex + 1];
  const prevProduct = data[currentIndex - 1];

  if (!nextProduct && !prevProduct) {
    return <div className="text-2xl text-center mt-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    updateCartCount((prevCount) => prevCount + 1);
    alert("Added to Cart!");
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
            <h2 className="text-3xl font-semibold mb-4">
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
                <span className="font-semibold">Price:</span>{" "}
                {data[currentIndex].price}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Bestseller:</span>{" "}
                {data[currentIndex].isBestseller ? "Yes" : "No"}
              </p>
              <div className="mt-8">
                <button
                  className="bg-[#BC4C2A] text-white py-2 px-6 rounded-md shadow-md transition duration-300 transform hover:scale-105"
                  onClick={() => navigate("/shop")}
                >
                  Back to Shop
                </button>
              </div>
              <div className="mt-4">
                <button
                  className="bg-[#BC4C2A] text-white py-2 px-6 rounded-md shadow-md transition duration-300 transform hover:scale-105"
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
