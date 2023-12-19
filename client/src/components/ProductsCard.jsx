import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsCard = ({
  data,
  showNewArrivals,
  selectedColor,
  selectedPrice,
}) => {
  const [products] = useState(data);
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);

    // Used react-toastify to display notification
    toast.success(`${item.name} added to cart!`, {
      position: "bottom-left",
      autoclose: 1000, // This is in milliseconds
    });
  };

  // Filter NewArrivals if showNewArrivals is true
  const filteredProducts = showNewArrivals
    ? products.filter((item) => item.isNewArrival)
    : products;

  // Apply filters based on user selection
  const filteredByColor = selectedColor
    ? filteredProducts.filter((item) => item.color === selectedColor)
    : filteredProducts;
  const filteredByPrice = selectedPrice
    ? filteredProducts.filter((item) => item.price <= selectedPrice)
    : filteredProducts;

  // Combine the filters
  const filteredResults =
    selectedColor && selectedPrice
      ? filteredByColor.filter((item) => item.price <= selectedPrice)
      : selectedColor
      ? filteredByColor
      : selectedPrice
      ? filteredByPrice
      : filteredProducts;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 w-container mx-auto mt-4">
        {filteredResults.map((item) => (
          <div
            key={item.id}
            className="shadow-lg hover:scale-105 duration-300 mt-6 rounded-lg"
            // onClick={() => navigate(`/shop/${item.id}`)}
          >
            <Link to={`/shop/${item.id}`}>
              <img
                className="w-full h-[300px] object-cover rounded-t-lg cursor-pointer"
                src={item.image}
                alt={item.name}
              />
            </Link>
            <div className="flex flex-col items-center gap-2 py-4 px-2 rounded-lg">
              <p className="mb-0">{item.name}</p>
              <span className="w-8 h-[2px] bg-black mb-1"></span>
              <p>
                <span className="text-[#BC4C2A]">
                  KSH {item.price.toLocaleString()}
                </span>
              </p>

              <button
                onClick={() => handleAddToCart(item)}
                className="hover:bg-[#BC4C2A] hover:text-white cursor-pointer border border-1 border-[#BC4C2A] text-[#BC4C2A] py-1 px-4 my-2 shadow-md transition duration-300 transform hover:scale-105"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

ProductsCard.propTypes = {
  data: PropTypes.array.isRequired,
  showNewArrivals: PropTypes.bool,
  selectedColor: PropTypes.string,
  selectedPrice: PropTypes.string,
  onCartUpdate: PropTypes.func,
};

export default ProductsCard;
