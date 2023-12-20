import { data } from "../../data/data";
import Products from "../Products";
import Layout from "../Layout";

const Shop = () => {
  return (
    <Layout>
      <div className="container mx-auto md:px-4">
        <div className="flex flex-col justify-center items-center py-8 my-6">
          <h1 className="text-[#BC4C2A] text-3xl mx-6 flex font-semibold justify-center items-center px-2">
            All Products
          </h1>
          <span className="w-10 h-[2px] bg-black mt-1"></span>
        </div>
        <Products data={data} />
      </div>
    </Layout>
  );
};

export default Shop;
