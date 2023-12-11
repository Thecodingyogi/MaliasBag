import ProductsCard from "./ProductsCard";
import { useState } from "react";
import PropTypes from "prop-types";

const Products = ({ data }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrice, SetSelectedPrice] = useState("");

  // Handler functions for updating selectedColor and selectedPrice
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handlePriceChange = (price) => {
    SetSelectedPrice(price);
  };

  return (
    <div className="w-container mx-auto px-4">
      {/* UI elements for user input */}
      <div className="w-container mx-auto px-4 flex justify-center md:justify-between gap-x-20 items-center">
        {/* Color selection */}
        <div className="flex flex-wrap md:flex items-center text-[#BC4C24]">
          <label htmlFor="color" className="mr-1 text-[#333]">
            Select Color:
          </label>
          <select
            name="color"
            id="color"
            value={selectedColor}
            onChange={(e) => handleColorChange(e.target.value)}
          >
            <option value="">All Colors</option>
            <option value="Beige">Beige</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Brown">Brown</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
          </select>
        </div>

        {/* Price range selection */}
        <div className="flex flex-wrap md:flex items-center text-[#BC4C24]">
          <label htmlFor="price" className="mr-1 text-[#333]">
            Select Price Range:{" "}
          </label>
          <input
            className="placeholder:text-[#BC4C24]"
            type="number"
            id="price"
            placeholder="Enter price"
            value={selectedPrice}
            onChange={(e) => handlePriceChange(e.target.value)}
          />
        </div>
      </div>
      {/* Display filtered products based on  user input */}
      <ProductsCard
        data={data}
        showBestsellers={false}
        selectedColor={selectedColor}
        selectedPrice={selectedPrice}
      />
    </div>
  );
};

Products.propTypes = {
  data: PropTypes.array,
};

export default Products;
