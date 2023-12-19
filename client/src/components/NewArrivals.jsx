import ProductsCard from "./ProductsCard";
import { data } from "../data/data";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <div className="py-8 container mx-auto my-6 px-2">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="uppercase text-2xl mt-2">New Arrivals</h1>
          <span className="w-20 h-1 bg-black mt-1"></span>
        </div>
        <ProductsCard data={data} showNewArrivals={true} />
        <button className="hover:bg-[#BC4C2A] hover:text-white cursor-pointer border border-1 border-[#BC4C2A] bg-transparent text-[#BC4C2A] py-2 px-14 shadow-md m-2 transition duration-300 transform hover:scale-105">
          <Link to="/Shop">Shop All</Link>
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
