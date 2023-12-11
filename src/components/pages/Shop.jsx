import { data } from "../../data/data";
import Products from "../Products";
import Layout from "../Layout";

const Shop = () => {
  return (
    <Layout>
      <div className="w-container mx-auto px-4">
        <h1 className="text-[#BC4C2A] text-3xl mx-6 flex justify-center items-center py-12 px-2">
          All Products
        </h1>
        <Products data={data} />
      </div>
    </Layout>
  );
};

export default Shop;
